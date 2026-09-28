// ─────────────────────────────────────────────────────────────────────────────
// Composant JSON-LD — Schémas structurés pour Google Rich Results
// Product + Offer + AggregateRating + FAQPage
// ─────────────────────────────────────────────────────────────────────────────

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Bougie Bijou Luxe',
  description:
    'Bougie parfumée d\'exception de Grasse, avec bijou gravé au laser en acier inoxydable. Cire de colza naturelle, 40h de combustion. Livraison 7 jours. 14j satisfait ou remboursé.',
  url: 'https://candle-jewelry-top1.vercel.app/',
  image: '/og-image.svg',
  thumbnailUrl: '/og-image.svg',
  sku: 'CANDLE-001',
  brand: {
    '@type': 'Brand',
    name: 'CANDLE',
    url: 'https://candle-jewelry-top1.vercel.app/a-propos',
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'CANDLE',
    url: 'https://candle-jewelry-top1.vercel.app/a-propos',
  },
  // ⚠️ Pas de bloc Review : l'avis de « Sophie M. » était inventé.
  // Google lit ce structuré pour afficher les étoiles. Une fausse note
  // structurée est Penalisée par le moteur de recherche ET signalable.
  // On réactivera ce bloc au premier avis réel, avec l'accord écrit du client.
  offers: {
    '@type': 'Offer',
    priceCurrency: 'EUR',
    price: '59.90',
    priceValidUntil: '2027-12-31',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
    seller: {
      '@type': 'Organization',
      name: 'CANDLE',
      url: 'https://candle-jewelry-top1.vercel.app/a-propos',
    },
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: { '@type': 'MonetaryAmount', currency: 'EUR', value: '0' },
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: { '@type': 'QuantitativeValue', minValue: 1, maxValue: 2, unitCode: 'DAY' },
        transitTime: { '@type': 'QuantitativeValue', minValue: 3, maxValue: 5, unitCode: 'DAY' },
      },
    },
  },
  hasMerchantReturnPolicy: {
    '@type': 'MerchantReturnPolicy',
    applicableBatch: 'https://schema.org/FormOnlyReturnPolicyFreeReturn',
    returnCost: { '@type': 'MonetaryAmount', currency: 'EUR', value: '0' },
    returnTime: { '@type': 'Date', minValue: 'P14D' },
  },
}

const bundleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Bougie Bijou Luxe — Bundle 2',
  description:
    'Pack de 2 Bougies Bijou Luxe. Parfum d\'exception de Grasse, bijou gravé au laser, cire de colza. Idéal pour offrir — chaque bougie est accompagnée de son bijou personnel. Économisez 19.90€.',
  url: 'https://candle-jewelry-top1.vercel.app/#bundle',
  image: '/og-image.svg',
  sku: 'CANDLE-BUNDLE-002',
  brand: { '@type': 'Brand', name: 'CANDLE' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'EUR',
    price: '99.90',
    priceValidUntil: '2027-12-31',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
  },
}

// ⚠️ aggregateRatingSchema supprimé : il annonçait 127 avis et une note de
// 5/5 pour une boutique qui n'a enregistré aucune vente. C'est le structuré le
// plus sanctionné par Google (rich results trompeurs) et le plus facile à
// transformer en signalement Stripe. À réactiver au premier avis réel.

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel parfum choisir pour offrir ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Notre parfum d\'exception est universel — notes ambrées et boisées de Grasse. Apprécié pour sa douceur, quel que soit le goût.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure la bougie ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '40 heures de combustion optimale. Tronquez la mèche à 0.5cm avant chaque allumage pour une flamme propre.',
      },
    },
    {
      '@type': 'Question',
      name: 'Le bijou est-il vraiment personnalisé ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui — gravure au laser sur acier inoxydable de qualité bijou. Hypoallergénique, résistant à l\'eau, conçu pour durer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment fonctionne le retour ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '14 jours satisfait ou remboursé. La bougie doit être intacte, non allumée. Retour gratuit — contact@candle-jewelry.fr.',
      },
    },
    {
      '@type': 'Question',
      name: 'D\'où vient le parfum de Grasse ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Grasse, en Provence, est la capitale mondiale du parfum. Nos fragrances y sont créées par des nose d\'exception.',
      },
    },
  ],
}

// ── Injection dans le layout ──────────────────────────────────────────────────
export function ProductJSONLD() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bundleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
