// ─── Webhook Stripe — déclenche la transmission au fournisseur ─────────────────
//
// ⚠️ IMPORTANT — ce webhook est OBSERVABLE, pas EXÉCUTOIRE.
//
// Il enregistre chaque paiement confirmé et journalise l'état. Il n'appelle
// PAS encore fulfilOrder() : tant qu'aucun fournisseur n'est approuvé (devis
// signé + échantillon validé + livraison France confirmée), envoyer une
// commande nous ferait tenir un engagement de délai qu'on ne peut pas
// respecter. Voir lib/providers.ts → blockingReasons().
//
// Le jour où un fournisseur passe à `status: 'approved'`, on décommente
// l'appel ci-dessous. Le reste ne change pas.

import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { PROVIDERS, blockingReasons } from '@/lib/providers'

export const runtime = 'nodejs'

function stripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) throw new Error('STRIPE_SECRET_KEY absent')
  return new Stripe(key, { apiVersion: '2026-08-26.dahlia' as Stripe.LatestApiVersion })
}

/**
 * Idempotence : Stripe retente un webhook si la réponse n'est pas 2xx rapide.
 * On mémorise les IDs traités en mémoire. Non durable entre redémarrages —
 * suffisant ici car l'opération est idempotente par nature (créer une session
 * de paiement deux fois ne double pas l'achat : Stripe gère la déduplication
 * de son côté via l'idempotency key).
 */
const processed = new Set<string>()

export async function POST(request: NextRequest) {
  const signature = request.headers.get('stripe-signature')
  const secret = process.env.STRIPE_WEBHOOK_SECRET
  if (!signature || !secret) {
    return NextResponse.json({ error: 'Signature absente' }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    const body = await request.text()
    event = stripe().webhooks.constructEvent(body, signature, secret)
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'signature invalide'
    return NextResponse.json({ error: msg }, { status: 400 })
  }

  if (processed.has(event.id)) {
    return NextResponse.json({ received: true, duplicate: true })
  }
  processed.add(event.id)

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    const variant = session.metadata?.variant ?? 'inconnue'
    const customerEmail = session.customer_details?.email ?? session.customer_email ?? ''
    const country = session.customer_details?.address?.country ?? 'FR'
    const amountTotal = session.amount_total ?? 0

    // Ce qui BLOQUE réellement l'envoi au fournisseur.
    const candleBlockers = blockingReasons('candle')
    const jewelryBlockers = blockingReasons('jewelry')

    console.log('[webhook] Paiement confirmé', {
      sessionId: session.id,
      variant,
      amountTotal,
      country,
      // La gravure n'est pas encore collectée : à ajouter au checkout.
      engraving: '(non collectée — à implémenter)',
    })

    console.log('[webhook] Commande fournisseur NON transmise', {
      candle: candleBlockers.length ? candleBlockers : 'prêt',
      jewelry: jewelryBlockers.length ? jewelryBlockers : 'prêt',
    })

    // ─── Quand un fournisseur sera approuvé ────────────────────────────────
    // const { ok, reference, reason } = await fulfilOrder({
    //   reference: session.id,
    //   provider: 'jewelry',
    //   engravingText: session.metadata?.engraving ?? '',
    //   customerEmail,
    //   country,
    //   createdAt: new Date().toISOString(),
    // })
    // if (!ok) console.error('[webhook] Échec transmission', reason)
  }

  return NextResponse.json({ received: true })
}

export async function GET() {
  // Sonde de santé de la chaîne fournisseur — sert aussi de diagnostic.
  return NextResponse.json({
    status: 'ok',
    providers: Object.values(PROVIDERS).map((p) => ({
      name: p.name,
      status: p.status,
      shipsToFrance: p.shipsToFrance,
      leadTimeDays: p.announcedLeadTimeDays,
      blockers: blockingReasons(p.provider),
    })),
  })
}
