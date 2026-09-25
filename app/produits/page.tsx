import { JSONLD } from '@/components/JSONLD'

export const metadata = {
  title: 'Nos Produits — CANDLE',
  description: 'Découvrez la Bougie Bijou Luxe — parfum d\'exception de Grasse, bijou gravé au laser, cire de colza naturelle. 40h de combustion, coffret offert.',
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Bougie Bijou Luxe',
  description: 'Bougie parfumée bijou luxe. Parfum d\'exception de Grasse, cire de colza, 40h de combustion, bijou gravé au laser.',
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
  },
  hasMerchantReturnPolicy: {
    '@type': 'MerchantReturnPolicy',
   _returnsWithin: 'P14D',
    returnMethod: 'https://schema.org/ReturnByMail',
    returnFees: 'https://schema.org/FreeReturn',
  },
}

export default function Produits() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="bg-stone-900 text-stone-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light">Nos Produits</h1>
          <p className="text-stone-400 mt-4 max-w-xl mx-auto text-lg">Une collection élégante, pensée pour l\'offrande et la self-care.</p>
        </div>
      </section>
      <JSONLD data={productSchema} />
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div><img src="/produit.svg" alt="Bougie Bijou Luxe" className="w-full h-auto rounded-xl shadow-lg" /></div>
          <div>
            <span className="text-amber-600 text-sm font-medium">Nouveau</span>
            <h2 className="text-3xl font-serif italic mt-2">Bougie Bijou Luxe</h2>
            <div className="mt-4 flex items-baseline gap-2"><span className="text-3xl font-light">59.90€</span><span className="text-stone-400 line-through text-lg">79.90€</span><span className="text-amber-600 text-sm">-25%</span></div>
            <ul className="mt-6 space-y-3 text-stone-600">
              <li className="flex items-start gap-3"><span className="text-amber-500">✦</span><span><strong className="text-stone-800">Parfum d\'exception</strong> — Fragrance de Grasse</span></li>
              <li className="flex items-start gap-3"><span className="text-amber-500">✦</span><span><strong className="text-stone-800">Bijou personnalisé</strong> — Gravure au laser, acier inoxydable</span></li>
              <li className="flex items-start gap-3"><span className="text-amber-500">✦</span><span><strong className="text-stone-800">Cire naturelle</strong> — Cire de colza, mèche coton bio</span></li>
              <li className="flex items-start gap-3"><span className="text-amber-500">✦</span><span><strong className="text-stone-800">40h de combustion</strong></span></li>
              <li className="flex items-start gap-3"><span className="text-amber-500">✦</span><span><strong className="text-stone-800">Emballage cadeau luxe</strong> — Coffret offert</span></li>
            </ul>
            <a href="/" className="mt-8 inline-block bg-amber-200 hover:bg-amber-300 text-stone-900 font-medium px-8 py-4 rounded-lg">Acheter — 59.90€</a>
          </div>
        </div>
      </section>
      <footer className="py-8 px-4 bg-stone-900 text-stone-400 text-sm text-center"><p>© 2026 CANDLE — Bougie Bijou Luxe</p><p className="mt-2">Stripe sécurisé · CGV · Confidentialité · contact@candle-jewelry.fr</p></footer>
    </main>
  )
}