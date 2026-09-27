import { JSONLD } from '@/components/JSONLD'
import BuyButton from '@/components/BuyButton'

export const metadata = {
  title: 'Nos Produits — CANDLE',
  description:
    'Découvrez la Bougie Bijou Luxe — parfum d\'exception de Grasse, bijou gravé au laser, cire de colza naturelle. 40h de combustion, coffret offert.',
  openGraph: {
    title: 'Nos Produits — CANDLE',
    description: 'La Bougie Bijou Luxe — parfum d\'exception de Grasse.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://candle-jewelry-top1.vercel.app/produits',
    siteName: 'CANDLE',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Bougie Bijou Luxe — Nos Produits',
      },
    ],
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Bougie Bijou Luxe',
  description:
    'Bougie parfumée bijou luxe. Parfum d\'exception de Grasse, cire de colza, 40h de combustion, bijou gravé au laser.',
  url: 'https://candle-jewelry-top1.vercel.app/produits',
  image: '/og-image.svg',
  sku: 'CANDLE-001',
  brand: { '@type': 'Brand', name: 'CANDLE' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'EUR',
    price: '59.90',
    priceValidUntil: '2027-12-31',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '2000',
    bestRating: '5',
    worstRating: '1',
  },
  hasMerchantReturnPolicy: {
    '@type': 'MerchantReturnPolicy',
    returnsWithin: 'P14D',
    returnMethod: 'https://schema.org/ReturnByMail',
    returnFees: 'https://schema.org/FreeReturn',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Qu'est-ce que la Bougie Bijou Luxe ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Une bougie parfumée d'exception de Grasse, avec un bijou gravé au laser en acier inoxydable. Cire de colza naturelle, 40h de combustion.",
      },
    },
    {
      '@type': 'Question',
      name: 'La bougie peut-elle être offerte ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, chaque bougie est livrée avec un coffret cadeau luxe offert. Le bundle de 2 bougies est idéal pour offrir.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle est la différence entre la bougie unique et le bundle ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le bundle de 2 bougies coûte 99.90€ au lieu de 119.80€ — économisez 19.90€ (16% d\'économie). Chaque bougie du bundle est accompagnée de son bijou personnel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Le bijou est-il personnalisable ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, le bijou est gravé au laser sur acier inoxydable. Chaque bougie est accompagnée d'un bijou unique qui fait l'objet d'une gravure spéciale.",
      },
    },
  ],
}

const certifications = [
  { label: 'Parfum d\'exception', sub: 'Grasse — Provence' },
  { label: 'Cire de colza', sub: 'Végétale — France' },
  { label: '40h de combustion', sub: 'Longue tenue' },
  { label: 'Bijou gravé au laser', sub: 'Acier inoxydable' },
  { label: 'Livraison 7 jours', sub: 'Sous 48h' },
  { label: '14j satisfait ou remboursé', sub: 'Retour gratuit' },
  { label: 'Coffret cadeau offert', sub: 'Luxe' },
  { label: 'Emballage premium', sub: 'Prêt à offrir' },
]

const features = [
  {
    title: "Parfum d'exception",
    desc: "Fragrance de Grasse — notes ambrées, boisées et vanilles. Créé par des nose d'exception.",
  },
  {
    title: 'Bijou personnalisé',
    desc: 'Gravure au laser sur acier inoxydable de qualité bijou. Hypoallergénique et résistant.',
  },
  {
    title: 'Cire naturelle',
    desc: 'Cire de colza 100% végétale, mèche coton bio. Combustion propre et longue.',
  },
  {
    title: '40h de combustion',
    desc: 'Longue tenue de flamme. Allumez-la, laissez-la brûler, profitez.',
  },
  {
    title: 'Emballage cadeau luxe',
    desc: "Coffret offert avec chaque bougie. Prêt à offrir pour tous les occasions.",
  },
  {
    title: 'Gravure au laser',
    desc: 'Chaque bijou est gravé au laser avec un design exclusif. Collection limitée.',
  },
]

const faqData = [
  {
    question: "Qu'est-ce que la Bougie Bijou Luxe ?",
    answer:
      "Une bougie parfumée d'exception de Grasse, avec un bijou gravé au laser en acier inoxydable. Cire de colza naturelle, 40h de combustion.",
  },
  {
    question: 'La bougie peut-elle être offerte ?',
    answer:
      'Oui, chaque bougie est livrée avec un coffret cadeau luxe offert. Le bundle de 2 bougies est idéal pour offrir.',
  },
  {
    question: 'Quelle est la différence entre la bougie unique et le bundle ?',
    answer:
      "Le bundle de 2 bougies coûte 99.90€ au lieu de 119.80€ — économisez 19.90€ (16% d'économie). Chaque bougie du bundle est accompagnée de son bijou personnel.",
  },
  {
    question: 'Le bijou est-il personnalisable ?',
    answer:
      "Oui, le bijou est gravé au laser sur acier inoxydable. Chaque bougie est accompagnée d'un bijou unique qui fait l'objet d'une gravure spéciale.",
  },
  {
    question: "D'où vient le parfum ?",
    answer:
      "Grasse, capitale mondiale du parfum en Provence. Nos fragrances y sont créés par des nose d'exception.",
  },
  {
    question: "Comment fonctionne la livraison ?",
    answer:
      "Livraison 7 jours sous 48h. Expédition depuis la France. Suivi de commande inclus.",
  },
]

const relatedProducts = [
  { name: 'Bougie Bijou Luxe', price: '59.90€', variant: 'unit' as const, description: 'Parfum d\'exception de Grasse, bijou gravé au laser.' },
  { name: 'Bundle 2 Bougies', price: '99.90€', variant: 'bundle' as const, description: 'Économisez 19.90€ — Coffret cadeau offert.' },
]

export default function Produits() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-stone-100 py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 to-transparent pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6 text-amber-300 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            COLLECTION 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-light">
            Nos Produits
          </h1>
          <p className="text-stone-400 mt-4 max-w-xl mx-auto text-lg font-light">
            Une collection élégante, pensée pour l'offrande et la self-care.
            Parfum d'exception de Grasse, bijou gravé au laser.
          </p>

          {/* Petit CTA rapide */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <BuyButton price={59.9} variant="unit" productId="CANDLE-001" />
            <a
              href="#bundle"
              className="border-2 border-stone-600 hover:border-stone-400 text-stone-200 hover:text-stone-100 px-8 py-4 rounded-lg font-medium transition-all w-full sm:w-auto text-center"
            >
              Bundle — 99.90€
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      </section>

      {/* Certifications labels */}
      <section className="py-8 px-4 bg-white border-b border-stone-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {certifications.map((cert) => (
              <div
                key={cert.label}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-stone-50 border border-stone-100 hover:border-amber-200 transition-all group"
              >
                <span className="text-stone-800 text-sm font-medium group-hover:text-amber-700 transition-colors">
                  {cert.label}
                </span>
                <span className="text-stone-400 text-xs mt-0.5">{cert.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featuring produit */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-100/30 to-transparent rounded-2xl blur-xl opacity-40" />
            <img
              src="/og-image.svg"
              alt="Bougie Bijou Luxe"
              className="relative w-full h-auto rounded-xl shadow-2xl shadow-stone-900/10 border border-stone-100"
              width={550}
              height={550}
            />
            <div className="absolute -bottom-3 -right-3 bg-amber-500 text-stone-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg shadow-amber-500/20">
              CANDLE-001
            </div>
          </div>

          {/* Détails */}
          <div className="flex flex-col">
            <span className="text-amber-600 text-sm font-medium tracking-wide uppercase">
              Le Chef-d'œuvre
            </span>
            <h2 className="text-3xl md:text-4xl font-serif italic text-stone-900 mt-2 leading-tight">
              Bougie Bijou Luxe
            </h2>

            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-4xl font-light text-stone-900">59.90€</span>
              <span className="text-stone-400 line-through text-xl">79.90€</span>
              <span className="bg-amber-500 text-stone-900 text-xs font-semibold px-2.5 py-1 rounded-full">-25%</span>
            </div>

            <p className="mt-4 text-stone-600 leading-relaxed text-lg">
              Parfum d'exception de Grasse, design bijou gravé au laser, cire de colza naturelle.
              <br />
              Chaque bougie est un objet d'art qui conjugue fragrance et précieux.
            </p>

            <ul className="mt-6 space-y-4">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                    <svg className="w-3 h-3 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div>
                    <span className="text-stone-800 font-medium">{f.title}</span>
                    <p className="text-stone-500 text-sm mt-0.5">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-stone-50 rounded-xl border border-stone-200">
              <p className="text-sm text-stone-500">
                📊 <strong className="text-stone-700">Marge nette</strong> : 42.6€ — 71% de marge
              </p>
            </div>

            <div className="mt-6">
              <BuyButton price={59.9} variant="unit" productId="CANDLE-001" />
            </div>
          </div>
        </div>
      </section>

      {/* Bundle section */}
      <section id="bundle" className="py-16 px-4 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-amber-600 text-sm font-medium tracking-wide uppercase">
            Plus value
          </span>
          <h2 className="text-3xl font-serif italic text-stone-900 mt-2">
            Bundle — 2 Bougies Bijou Luxe
          </h2>
          <p className="text-stone-500 mt-3 max-w-lg mx-auto">
            Offrez deux — chaque bougie offre un bijou unique. Économisez 19.90€.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {/* Bougie unique */}
            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-stone-500 text-sm">1 Bougie</p>
                  <p className="text-xs text-stone-400 mt-0.5">CANDLE-001</p>
                </div>
                <span className="text-3xl font-light text-stone-800">59.90€</span>
              </div>
              <button
                onClick={() => (window.location.href = '/?bundle=1#produit')}
                className="mt-4 w-full bg-stone-200 hover:bg-stone-300 text-stone-700 font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Acheter
              </button>
            </div>

            {/* Bundle */}
            <div className="bg-white rounded-xl p-6 border-2 border-amber-300 shadow-xl shadow-amber-500/10 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-stone-900 text-xs font-semibold px-3 py-1 rounded-full shadow-lg shadow-amber-500/20">
                ÉCONOMIE 19.90€
              </div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-stone-500 text-sm">2 Bougies</p>
                  <p className="text-xs text-stone-400 mt-0.5">CANDLE-BUNDLE-002</p>
                </div>
                <span className="text-3xl font-light text-amber-800">99.90€</span>
              </div>
              <p className="text-stone-500 text-sm mt-1">
                Soit 49.95€/bougie — <span className="text-amber-600 font-medium">16% d'économie</span>
              </p>
              <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-800">
                📦 Coffret cadeau luxe offert
              </div>
              <BuyButton price={99.9} variant="bundle" productId="CANDLE-BUNDLE-002" />
            </div>
          </div>
          <div className="mt-6 text-sm text-stone-400">
            📊 Marge nette bundle : <strong className="text-stone-600">91.6€</strong> — 91.7% de marge
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-amber-600 text-sm font-medium tracking-wide uppercase">FAQ</span>
            <h2 className="text-2xl font-serif italic text-stone-900 mt-2">Questions fréquentes</h2>
          </div>
          <div className="space-y-1">
            {faqData.map((item, i) => (
              <details key={i} className="group border-b border-stone-200 pb-5">
                <summary className="cursor-pointer font-medium text-stone-700 py-3 flex items-center justify-between list-none">
                  <span className="pr-4">{item.question}</span>
                  <svg
                    className="w-5 h-5 text-stone-400 transition-transform duration-200 group-open:rotate-180 ml-auto mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="pb-3 text-stone-500 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-stone-900 text-stone-400 text-sm text-center">
        <p>© 2026 CANDLE — Bougie Bijou Luxe</p>
        <p className="mt-2">
          Stripe sécurisé · CGV · Confidentialité ·{' '}
          <a href="mailto:contact@candle-jewelry.fr" className="text-amber-400 hover:text-amber-300">
            contact@candle-jewelry.fr
          </a>
        </p>
      </footer>

      {/* JSON-LD */}
      <JSONLD data={[productSchema, faqSchema]} />
    </>
  )
}
