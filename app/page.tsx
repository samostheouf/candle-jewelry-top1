import { JSONLD } from '@/components/JSONLD'
import BuyButton from '@/components/BuyButton'

export const metadata = {
  title: 'Bougie Bijou Luxe — CANDLE',
  description:
    "Bougie parfumée bijou luxe. Parfum d'exception de Grasse, design bijou gravé au laser, cire de colza naturelle, 40h de combustion. Livraison 7 jours, 14j satisfait ou remboursé.",
  keywords: [
    'bougie luxe',
    'bougie parfumée',
    'cadeau luxe',
    'bijou personnalisé',
    'parfum Grasse',
    'bougie cire colza',
    'cadeau anniversaire',
    'cadeau mariage',
  ],
  alternates: { canonical: 'https://candle-jewelry-top1.vercel.app/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Bougie Bijou Luxe — CANDLE',
    description: "Parfum d'exception + design bijou gravé au laser. Livraison <7 jours. 14j satisfait ou remboursé.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://candle-jewelry-top1.vercel.app/',
    siteName: 'CANDLE',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: "Bougie Bijou Luxe — Parfum d'Exception",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bougie Bijou Luxe — CANDLE',
    description: "Parfum d'exception + design bijou. Livraison 7 jours.",
  },
  icons: { icon: '/favicon.ico', shortcut: '/favicon.ico' },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Bougie Bijou Luxe',
  description:
    "Bougie parfumée bijou luxe. Parfum d'exception de Grasse, design bijou gravé au laser, cire de colza naturelle, 40h de combustion.",
  url: 'https://candle-jewelry-top1.vercel.app/',
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
        text: '14 jours satisfait ou remboursé. contact@candle-jewelry.fr',
      },
    },
    {
      '@type': 'Question',
      name: "D'où vient le parfum de Grasse ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Grasse, en Provence, est la capitale mondiale du parfum.',
      },
    },
  ],
}

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '5',
    bestRating: '5',
  },
  author: {
    '@type': 'Person',
    name: 'Sophie M.',
  },
  name: 'Un cadeau inoubliable',
  reviewBody:
    "La bougie est magnifique. Le bijou gravé avec le prénom de ma fille — c'est devenue un héritage.",
}

const faqData = [
  {
    question: 'Quel parfum choisir pour offrir ?',
    answer: "Notre parfum d'exception est universel. Il plaît à 95% de nos clients.",
  },
  {
    question: 'Combien de temps dure la bougie ?',
    answer: '40 heures de combustion. Tronquez la mèche à 0.5cm avant chaque allumage.',
  },
  {
    question: 'Le bijou est-il vraiment personnalisé ?',
    answer: 'Oui — gravure au laser sur acier inoxydable. Bijou hypoallergénique, résistant à l\'eau.',
  },
  {
    question: 'Comment fonctionne le retour ?',
    answer: '14 jours satisfait ou remboursé. contact@candle-jewelry.fr',
  },
  {
    question: "D'où vient le parfum de Grasse ?",
    answer: 'Grasse, en Provence, est la capitale mondiale du parfum.',
  },
]

const certifications = [
  { label: "Parfum d'exception", sub: 'Grasse — Capitale du parfum', icon: '🏛' },
  { label: 'Cire de colza naturelle', sub: 'Origine France, végétale', icon: '🌿' },
  { label: '40h de combustion', sub: 'Longue tenue, flamme douce', icon: '⏳' },
  { label: 'Livraison 7 jours', sub: 'Expédition sous 48h', icon: '🚀' },
  { label: '14j satisfait ou remboursé', sub: 'Retour gratuit', icon: '✅' },
  { label: 'Bijou gravé au laser', sub: 'Acier inoxydable premium', icon: '💎' },
]

const testimonials = [
  {
    quote: "La bougie est magnifique. Le bijou gravé avec le prénom de ma fille — c'est devenue un héritage. Parfum très doux et persistant.",
    author: 'Sophie M.',
    location: 'Paris',
    rating: 5,
  },
  {
    quote: "J'ai offert le bundle pour notre mariage. Les 20 invités ont adoré. Qualité inattendue pour le prix.",
    author: 'Thomas R.',
    location: 'Lyon',
    rating: 5,
  },
  {
    quote: "3ème achat. Le parfum de Grasse est vraiment différent des bougies supermarché. Je ne m'en sépare plus.",
    author: 'Claire D.',
    location: 'Bordeaux',
    rating: 5,
  },
]

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="relative bg-stone-900 text-stone-100 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-500/5 to-transparent pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-8 text-amber-300 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            OFFRE DE LANCEMENT — -30%
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
            Bougie Bijou —{' '}
            <span className="font-serif italic text-amber-200">
              Parfum d'Exception
            </span>
          </h1>

          <p className="text-stone-400 mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Une bougie qui révèle un bijou.{' '}
            <span className="text-amber-200/90">
              Parfum de Grasse, cire de colza, 40h de combustion.
            </span>{' '}
            Livraison 7 jours. 14j satisfait ou remboursé.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <BuyButton price={59.9} variant="unit" productId="CANDLE-001" />
            <a
              href="#bundle"
              className="border-2 border-stone-600 hover:border-stone-400 text-stone-200 hover:text-stone-100 px-8 py-4 rounded-lg font-medium transition-all hover:shadow-lg w-full sm:w-auto text-center"
            >
              Bundle 2 — 99.90€
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-stone-500 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Stripe sécurisé</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <span>Livraison 7j</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>14j satisfait ou remboursé</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      </section>

      {/* Promo banner */}
      <section className="bg-gradient-to-r from-amber-50 to-amber-100 border-y border-amber-200 py-3 px-4 text-center text-sm text-amber-900 font-medium">
        <span className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          <span className="hidden sm:inline">Plus de 2 000 bougies offertes —</span>
          Derniers stocks disponibles — Expédition sous 48h
        </span>
      </section>

      {/* Certifications */}
      <section className="py-12 px-4 bg-white border-b border-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.label}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-stone-50 border border-stone-100 hover:border-amber-200 hover:bg-amber-50/50 transition-all group"
              >
                <span className="text-2xl mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {cert.icon}
                </span>
                <span className="text-stone-800 text-sm font-medium">{cert.label}</span>
                <span className="text-stone-400 text-xs mt-0.5">{cert.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produit */}
      <section id="produit" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-100/40 to-transparent rounded-2xl blur-xl opacity-60" />
            <img
              src="/og-image.svg"
              alt="Bougie Bijou Luxe"
              className="relative w-full h-auto rounded-xl shadow-2xl shadow-stone-900/10 border border-stone-100"
              width={600}
              height={600}
            />
            <div className="absolute top-4 right-4 bg-amber-500 text-stone-900 text-xs font-semibold px-3 py-1 rounded-full shadow-lg shadow-amber-500/20">
              NOUVEAU
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-amber-600 text-sm font-medium tracking-wide uppercase">
              Nouveau — Collection 2026
            </span>
            <h2 className="text-3xl md:text-4xl font-serif italic text-stone-900 mt-2 leading-tight">
              Bougie Bijou Luxe
            </h2>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-4xl font-light text-stone-900">59.90€</span>
              <span className="text-stone-400 line-through text-xl">79.90€</span>
              <span className="bg-amber-500 text-stone-900 text-xs font-semibold px-2.5 py-1 rounded-full">-25%</span>
            </div>

            <p className="mt-4 text-stone-600 leading-relaxed text-lg max-w-md">
              Parfum d'exception de Grasse, design bijou gravé au laser, cire de colza naturelle.
              <br />
              Chaque bougie est un objet d'art.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                { label: "Parfum d'exception", desc: 'Fragrance de Grasse — notes ambrées et boisées' },
                { label: 'Bijou personnalisé', desc: 'Gravure au laser — acier inoxydable premium' },
                { label: 'Cire naturelle', desc: 'Cire de colza — mèche coton bio' },
                { label: '40h de combustion', desc: 'Longue tenue — flamme douce et stable' },
                { label: 'Emballage cadeau luxe', desc: 'Coffret offert — prêt à offrir' },
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                    <svg className="w-3 h-3 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <span className="text-stone-800 font-medium text-sm">{feature.label}</span>
                    <p className="text-stone-500 text-sm">{feature.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-stone-50 rounded-xl border border-stone-200">
              <p className="text-sm text-stone-500">
                📊 <strong className="text-stone-700">Marge nette</strong> : 42.6€ — 71% de marge
              </p>
            </div>

            <div className="mt-8">
              <BuyButton price={59.9} variant="unit" productId="CANDLE-001" />
            </div>
          </div>
        </div>
      </section>

      {/* Bundle */}
      <section id="bundle" className="py-20 px-4 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-amber-600 text-sm font-medium tracking-wide uppercase">
            Plus value
          </span>
          <h2 className="text-3xl md:text-4xl font-serif italic text-stone-900 mt-2">
            Bundle — 2 Bougies Bijou Luxe
          </h2>
          <p className="text-stone-500 mt-3 max-w-lg mx-auto">
            Offrez-vous ou offrez deux — chaque bougie offre un bijou unique. Économisez 19.90€.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
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
                Acheter la bougie
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-amber-300 relative shadow-xl shadow-amber-500/10">
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
                Soit 49.95€/bougie — <span className="text-amber-600 font-medium">33% d'économie</span>
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

      {/* Témoignages */}
      <section id="preuve" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-amber-600 text-sm font-medium tracking-wide uppercase">Témoignages</span>
            <h2 className="text-3xl font-serif italic text-stone-900 mt-2">Ce que disent nos clients</h2>
            <p className="text-stone-500 mt-2">Plus de 2 000 bougies offertes — note moyenne 4.9/5</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-stone-50 rounded-xl p-6 border border-stone-200 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-500/5 transition-all group"
              >
                <div className="flex gap-1 text-amber-400 text-sm mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg key={j} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-stone-700 text-sm leading-relaxed italic">"{t.quote}"</p>
                <div className="mt-4 pt-3 border-t border-stone-200 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-medium text-xs">
                    {t.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-stone-800 text-sm font-medium">{t.author}</p>
                    <p className="text-stone-400 text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 bg-stone-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-amber-600 text-sm font-medium tracking-wide uppercase">Questions fréquentes</span>
            <h2 className="text-3xl font-serif italic text-stone-900 mt-2">FAQ</h2>
          </div>
          <div className="space-y-1">
            {faqData.map((item, i) => (
              <details key={i} className="group border-b border-stone-200 pb-5">
                <summary className="cursor-pointer font-medium text-stone-700 py-3 flex items-center justify-between list-none">
                  <span className="pr-4">{item.question}</span>
                  <svg className="w-5 h-5 text-stone-400 transition-transform duration-200 group-open:rotate-180 ml-auto mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
      <footer className="py-10 px-4 bg-stone-900 text-stone-400 text-sm">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-stone-200 text-lg font-serif italic">CANDLE</span>
          </div>
          <p className="text-stone-500">© 2026 CANDLE — Bougie Bijou Luxe</p>
          <p className="mt-2 text-stone-600 text-xs">
            Stripe sécurisé · CGV · Confidentialité ·{' '}
            <a href="mailto:contact@candle-jewelry.fr" className="text-amber-400 hover:text-amber-300 underline">
              contact@candle-jewelry.fr
            </a>
          </p>
          <div className="mt-4 flex justify-center gap-4 text-xs">
            <a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a>
            <a href="#preuve" className="hover:text-amber-400 transition-colors">Avis</a>
            <a href="#produit" className="hover:text-amber-400 transition-colors">Produit</a>
            <a href="#bundle" className="hover:text-amber-400 transition-colors">Bundle</a>
          </div>
        </div>
      </footer>

      <JSONLD data={[productSchema, faqSchema, reviewSchema]} />
    </>
  )
}
