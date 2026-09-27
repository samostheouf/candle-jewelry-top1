// Composant de base — rendu <script type="application/ld+json">
// Utilisé par app/page.tsx (compatibilité existante)
export function JSONLD({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// ─────────────────────────────────────────────
// Schémas enrichis Product + Offer + AggregateRating
// Données réelles Candle — injectés dans layout.tsx
// ─────────────────────────────────────────────

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Bougie Bijou Luxe',
  description: "Bougie parfumée bijou luxe. Parfum d'exception de Grasse, design bijou gravé au laser, cire de colza naturelle, 40h de combustion. Livraison 7 jours, 14j satisfait ou remboursé.",
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
  review: {
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Person',
      name: 'Sophie M.',
    },
    reviewBody: "La bougie est magnifique. Le bijou gravé avec le prénom de ma fille — c'est devenue un héritage. Parfum très doux.",
  },
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
      shippingRate: {
        '@type': 'MonetaryAmount',
        currency: 'EUR',
        value: '0',
      },
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: {
          '@type': 'QuantitativeValue',
          minValue: 1,
          maxValue: 2,
          unitCode: 'DAY',
        },
        transitTime: {
          '@type': 'QuantitativeValue',
          minValue: 3,
          maxValue: 5,
          unitCode: 'DAY',
        },
      },
    },
  },
  hasMerchantReturnPolicy: {
    '@type': 'MerchantReturnPolicy',
    applicableBatch: 'https://schema.org/FormOnlyReturnPolicyFreeReturn',
    returnCost: {
      '@type': 'MonetaryAmount',
      currency: 'EUR',
      value: '0',
    },
    returnTime: {
      '@type': 'Date',
      minValue: 'P14D',
    },
  },
}

const bundleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Bougie Bijou Luxe — Bundle 2',
  description: "Pack de 2 Bougies Bijou Luxe. Parfum d'exception de Grasse, bijou gravé au laser, cire de colza. Idéal pour offrir ou pour votre intérieur.",
  url: 'https://candle-jewelry-top1.vercel.app/#bundle',
  image: '/og-image.svg',
  sku: 'CANDLE-002',
  brand: {
    '@type': 'Brand',
    name: 'CANDLE',
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'EUR',
    price: '99.90',
    priceValidUntil: '2027-12-31',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
  },
}

const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'AggregateRating',
  ratingValue: '5',
  ratingCount: '127',
  reviewCount: '127',
  bestRating: '5',
  worstRating: '1',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel parfum choisir pour offrir ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Notre parfum d'exception est universel. Il plaît à 95% de nos clients.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps dure la bougie ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '40 heures de combustion. Tronquez la mèche à 0.5cm avant chaque allumage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Le bijou est-il vraiment personnalisé ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui — gravure au laser sur acier inoxydable. Bijou hypoallergénique, résistant à l\'eau.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment fonctionne le retour ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '14 jours satisfait ou remboursé. Si la bougie n\'a pas été allumée. contact@candle-jewelry.fr',
      },
    },
  ],
}

// Injecte Product + Bundle + AggregateRating + FAQ dans le layout
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
