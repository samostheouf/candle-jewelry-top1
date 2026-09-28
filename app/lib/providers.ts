// ─── Fournisseurs — configuration du montage dropshipping ─────────────────────
//
// ⚠️ ÉTAT À VÉRIFIER AVANT TOUTE VENTE
//
// Ce module est PRÊT mais NON ACTIVÉ. Aucune commande n'a été envoyée à un
// fournisseur. Les deux fournisseurs ci-dessous n'ont PAS été contactés, ne
// nous ont PAS confirmé de devis, et leurs conditions réelles sont inconnues.
//
// Ce qui est documenté publiquement par eux (à vérifier, pas garanti) :
//
//   Candle Drop (UK) — bougie print-on-demand, étiquette client.
//     Prix affiché : 7 à 13 USD selon le contenant.
//     Délai : non communiqué. Expédition depuis le UK.
//
//   Merry Shine (Shenzhen) — bijou argent 925 gravé au laser, API.
//     Gravure : oui, texte transmis par API.
//     Production : 5-7 jours ouvrés annoncés.
//     Expédition : US principalement (ligne dédiée US citée).
//     ⚠️ Livraison UE non confirmée — à demander avant de vendre en France.
//
// CONSIGNES : ne jamais activer `fulfilOrder()` sans avoir
//   1. reçu un devis écrit et daté du fournisseur,
//   2. testé un échantillon physique,
//   3. vérifié les délais de livraison réels vers la France.
// Un engagement de livraison souscrit en amont sur une page qui promet
// « livraison 7 jours » expose à un remboursement et à un avis négatif.

import 'server-only'

export type Provider = 'candle' | 'jewelry'

export interface FulfillmentConfig {
  provider: Provider
  name: string
  baseUrl: string
  /** Clés d'environnement requises pour appeler l'API. */
  envKeys: string[]
  /** Délai annoncé par le fournisseur, en jours ouvrés. */
  announcedLeadTimeDays: number
  /** Le fournisseur expédie-t-il en Europe de l'Ouest ? */
  shipsToFrance: boolean | null
  /** Statut de la relation : jamais contacté, ou devis en cours. */
  status: 'uncontacted' | 'quoting' | 'sampled' | 'approved'
}

export const PROVIDERS: Record<Provider, FulfillmentConfig> = {
  candle: {
    provider: 'candle',
    name: 'Candle Drop (UK)',
    baseUrl: 'https://candledrop.co.uk',
    envKeys: ['CANDLE_DROP_API_KEY'],
    announcedLeadTimeDays: 0, // non communiqué
    shipsToFrance: null, // vraisemblablement oui (UK → UE), à confirmer
    status: 'uncontacted',
  },
  jewelry: {
    provider: 'jewelry',
    name: 'Merry Shine (Shenzhen)',
    baseUrl: 'https://www.merryshinewholesale.com',
    envKeys: ['JEWELRY_DROPSHIP_KEY', 'JEWELRY_DROPSHIP_SECRET'],
    announcedLeadTimeDays: 7, // 5-7 jours ouvrés annoncés
    shipsToFrance: null, // US uniquement cité — BLOQUANT pour la France
    status: 'uncontacted',
  },
}

/** Un fournisseur est-il prêt à être appelé ? */
export function isProviderReady(provider: Provider): boolean {
  const cfg = PROVIDERS[provider]
  if (cfg.status !== 'approved') return false
  if (!cfg.shipsToFrance) return false
  return cfg.envKeys.every((k) => Boolean(process.env[k]))
}

/** Liste des raisons pour lesquelles un fournisseur n'est pas activable. */
export function blockingReasons(provider: Provider): string[] {
  const cfg = PROVIDERS[provider]
  const reasons: string[] = []

  if (cfg.status !== 'approved') {
    reasons.push('Aucun devis validé ni échantillon testé')
  }
  if (!cfg.shipsToFrance) {
    reasons.push('Livraison en France non confirmée')
  }
  const missing = cfg.envKeys.filter((k) => !process.env[k])
  if (missing.length > 0) {
    reasons.push(`Clés API absentes : ${missing.join(', ')}`)
  }
  return reasons
}

export interface FulfillmentOrder {
  reference: string
  provider: Provider
  engravingText?: string
  customerEmail: string
  country: string
  createdAt: string
}

/**
 * Transmet une commande au fournisseur.
 *
 * REFUSE TOUJENT de partir tant que le fournisseur n'est pas approuvé —
 * c'est volontaire. Sans devis signé et échantillon validé, nous ne pouvons
 * pas tenir le délai promis sur la page de vente, et nous expose à
 * remboursements. Better no sale than a broken promise.
 */
export async function fulfilOrder(
  order: FulfillmentOrder
): Promise<{ ok: true; reference: string } | { ok: false; reason: string }> {
  const cfg = PROVIDERS[order.provider]
  const reasons = blockingReasons(order.provider)

  if (reasons.length > 0) {
    return {
      ok: false,
      reason: `Fournisseur ${cfg.name} non activé — ${reasons.join(' ; ')}`,
    }
  }

  // Chemin d'implémentation réel une fois la clé API obtenue.
  // L'API Merry Shine exige un AccessKey/Secret délivrés manuellement après
  // qualification de la boutique — il n'existe pas de clé instantanée.
  throw new Error('Intégration API non implémentée — voir le guide de qualification')
}

/** Délai total promis au client, en jours. */
export function totalLeadTimeDays(): number {
  const candle = PROVIDERS.candle
  const jewelry = PROVIDERS.jewelry
  // Deux colis expédiés en parallèle = le plus lent des deux, pas la somme.
  return Math.max(candle.announcedLeadTimeDays, jewelry.announcedLeadTimeDays)
}
