import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

export const dynamic = 'force-dynamic'

// ── GET /api/checkout/session?session_id=... ─────────────────────────────────
// Récupère les détails d'une session Stripe Checkout.
// En mode stub (pas de STRIPE_SECRET_KEY), retourne des données simulées
// construites à partir des query params ou d'un fallback raisonnable.
export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get('session_id')

  if (!sessionId) {
    return NextResponse.json({ error: 'session_id requis' }, { status: 400 })
  }

  // ── Mode Stripe actif ──────────────────────────────────────────────────────
  if (process.env.STRIPE_SECRET_KEY && !process.env.STRIPE_SECRET_KEY?.includes('«')) {
    try {
      const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: [
          'line_items',
          'customer_details',
          'payment_intent',
          'shipping_address',
        ],
      })

      const lineItem = (session.line_items?.data[0] ?? null) as any
      const created = new Date((session.created as number) * 1000)

      return NextResponse.json({
        source: 'stripe',
        sessionId: session.id,
        status: session.status,
        product: session.metadata?.product || lineItem?.price?.product_data?.name || 'Bougie Bijou de Grasse',
        variant: session.metadata?.variant || lineItem?.price?.product_data?.metadata?.variant || 'bougie-unique',
        price: (session.amount_total ?? 0) / 100,
        currency: session.currency ?? 'eur',
        originalPrice: (session.metadata?.originalPrice
          ? Number(session.metadata.originalPrice)
          : (lineItem?.price?.unit_amount ?? 0)) / 100,
        promoCode: session.metadata?.promoCode || '',
        discountDescription: session.metadata?.discountDescription || null,
        customerEmail: session.customer_details?.email || session.metadata?.email || '',
        createdAt: created.toISOString(),
        paymentIntentId: session.payment_intent as string | null,
        shippingAddress: (session as any).shipping_address
          ? {
              country: (session as any).shipping_address.country,
              city: (session as any).shipping_address.city,
              line1: (session as any).shipping_address.line1,
              line2: (session as any).shipping_address.line2 ?? undefined,
              postalCode: (session as any).shipping_address.postal_code ?? undefined,
            }
          : null,
      })
    } catch (err: any) {
      console.error('stripe session retrieve error', err.message)
      return NextResponse.json(
        { error: 'Session Stripe introuvable', detail: err.message },
        { status: 404 }
      )
    }
  }

  // ── Mode stub — pas de clé Stripe ─────────────────────────────────────────
  // On construit une réponse plausible à partir des query params du checkout
  // ou d'un fallback par défaut.
  const variant = request.nextUrl.searchParams.get('variant') || 'bougie-unique'
  const promo = request.nextUrl.searchParams.get('promo') || ''

  const labelMap: Record<string, string> = {
    'bougie-unique': 'Bougie Bijou de Grasse',
    'bundle': 'Bundle 2 Bougies Bijou de Grasse',
  }

  return NextResponse.json({
    source: 'stub',
    sessionId,
    status: 'paid',
    product: labelMap[variant] ?? 'Bougie Bijou de Grasse',
    variant,
    price: variant === 'bundle' ? 99.90 : 59.90,
    currency: 'eur',
    originalPrice: variant === 'bundle' ? 119.80 : 59.90,
    promoCode: promo || undefined,
    discountDescription: promo ? 'Offre de lancement —30%' : null,
    customerEmail: '',
    createdAt: new Date().toISOString(),
    paymentIntentId: null,
    shippingAddress: null,
  })
}
