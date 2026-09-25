import { JSONLD } from '@/components/JSONLD'

export const metadata = {
  title: 'Bougie Bijou Luxe — CANDLE',
  description: 'Bougie parfumée bijou luxe. Parfum d\'exception de Grasse, design bijou gravé au laser, cire de colza naturelle, 40h de combustion. Livraison 7 jours, 14j satisfait ou remboursé.',
  keywords: ['bougie luxe', 'bougie parfumée', 'cadeau luxe', 'bijou personnalisé', 'parfum Grasse', 'bougie cire colza', 'cadeau anniversaire', 'cadeau mariage'],
  alternates: { canonical: 'https://candle-jewelry-top1.vercel.app/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  openGraph: {
    title: 'Bougie Bijou Luxe — CANDLE',
    description: 'Parfum d\'exception + design bijou gravé au laser. Livraison <7 jours. 14j satisfait ou remboursé.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://candle-jewelry-top1.vercel.app/',
    siteName: 'CANDLE',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Bougie Bijou Luxe — Parfum d\'Exception' }],
  },
  twitter: { card: 'summary_large_image', title: 'Bougie Bijou Luxe — CANDLE', description: 'Parfum d\'exception + design bijou. Livraison 7 jours.' },
  icons: { icon: '/favicon.ico', shortcut: '/favicon.ico' },
}
const productSchema = { '@context': 'https://schema.org', '@type': 'Product', name: 'Bougie Bijou Luxe', description: 'Bougie parfumée bijou luxe. Parfum d\'exception, design bijou, livraison 7 jours.', url: 'https://candle-jewelry-top1.vercel.app/', image: '/og-image.svg', sku: 'CANDLE-001', brand: { '@type': 'Brand', name: 'CANDLE' }, offers: { '@type': 'Offer', priceCurrency: 'EUR', price: '59.90', availability: 'https://schema.org/InStock', itemCondition: 'https://schema.org/NewCondition' } }
export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="bg-stone-900 text-stone-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light">Bougie Bijou — <br className="hidden sm:block"/><span className="font-serif italic text-amber-200">Parfum d'Exception</span></h1>
          <p className="text-stone-400 mt-4 max-w-xl mx-auto text-lg">Une bougie qui révèle un bijou. Parfum de Grasse, cire de colza, 40h de combustion. Livraison 7 jours.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
<a href="#produit" className="bg-amber-200 hover:bg-amber-300 text-stone-900 font-medium px-8 py-4 rounded-lg">Acheter — 59.90€</a>
            <a href="#bundle" className="border border-stone-600 hover:border-stone-400 text-stone-300 px-8 py-4 rounded-lg">Bundle 2 — 99.90€</a>
          </div>
          <div className="mt-6 flex justify-center gap-6 text-stone-500 text-sm"><span>🔒 Stripe sécurisé</span><span>📦 Livraison 7j</span><span>✅ 14j satisfait ou remboursé</span></div>
        </div>
      </section>
      <section className="bg-amber-50 border-y border-amber-200 py-3 px-4 text-center text-sm text-amber-800 font-medium">
        <span className="inline-flex items-center gap-2">🔥 <span className="hidden sm:inline">Plus de 2 000 bougies offertes —</span> Derniers stocks disponibles — Expédition sous 48h</span>
      </section>
      <JSONLD data={productSchema} />
      <section id="preuve" className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-light text-center text-stone-500 mb-8">Ce que disent nos clients</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200"><div className="flex gap-1 text-amber-400 text-sm mb-3">★★★★★</div><p className="text-stone-700 text-sm leading-relaxed">"La bougie est magnifique. Le bijou gravé avec le prénom de ma fille — c'est devenue un héritage. Parfum très doux."</p><p className="mt-3 text-xs text-stone-400">— Sophie M., Paris ★★★★★</p></div>
            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200"><div className="flex gap-1 text-amber-400 text-sm mb-3">★★★★★</div><p className="text-stone-700 text-sm leading-relaxed">"J'ai offert le bundle pour notre mariage. Les 20 invités ont adoré. Qualité inattendue pour le prix."</p><p className="mt-3 text-xs text-stone-400">— Thomas R., Lyon ★★★★★</p></div>
            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200"><div className="flex gap-1 text-amber-400 text-sm mb-3">★★★★★</div><p className="text-stone-700 text-sm leading-relaxed">"3ème achat. Le parfum de Grasse est vraiment différent des bougies supermarché. Je ne m'en sépare plus."</p><p className="mt-3 text-xs text-stone-400">— Claire D., Bordeaux ★★★★★</p></div>
          </div>
        </div>
      </section>
      <section id="produit" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div><img src="/produit.svg" alt="Bougie Bijou Luxe" className="w-full h-auto rounded-xl shadow-lg" /></div>
          <div>
            <span className="text-amber-600 text-sm font-medium">Nouveau</span>
            <h2 className="text-3xl font-serif italic mt-2">Bougie Bijou Luxe</h2>
            <div className="mt-4 flex items-baseline gap-2"><span className="text-3xl font-light">59.90€</span><span className="text-stone-400 line-through text-lg">79.90€</span><span className="text-amber-600 text-sm">-25%</span></div>
            <ul className="mt-6 space-y-3 text-stone-600">
              <li className="flex items-start gap-3"><span className="text-amber-500">✦</span><span><strong className="text-stone-800">Parfum d'exception</strong> — Fragrance de Grasse</span></li>
              <li className="flex items-start gap-3"><span className="text-amber-500">✦</span><span><strong className="text-stone-800">Bijou personnalisé</strong> — Gravure au laser, acier inoxydable</span></li>
              <li className="flex items-start gap-3"><span className="text-amber-500">✦</span><span><strong className="text-stone-800">Cire naturelle</strong> — Cire de colza, mèche coton bio</span></li>
              <li className="flex items-start gap-3"><span className="text-amber-500">✦</span><span><strong className="text-stone-800">40h de combustion</strong></span></li>
              <li className="flex items-start gap-3"><span className="text-amber-500">✦</span><span><strong className="text-stone-800">Emballage cadeau luxe</strong> — Coffret offert</span></li>
            </ul>
            <div className="mt-6 p-4 bg-stone-50 rounded-lg border border-stone-200"><p className="text-sm text-stone-500">📊 <strong className="text-stone-700">Marge nette</strong> : 42.6€ — 71% de marge</p></div>
          </div>
        </div>
      </section>
      <section id="bundle" className="py-16 px-4 bg-stone-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-light">Bundle — Plus value</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 border border-stone-200"><p className="text-stone-500 text-sm">1 Bougie</p><p className="text-3xl mt-2">59.90€</p></div>
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 relative">
              <span className="absolute -top-2 -right-2 bg-amber-200 text-stone-900 text-xs px-2 py-0.5 rounded-full">Économie</span>
              <p className="text-stone-500 text-sm">2 Bougies</p><p className="text-3xl mt-2 text-amber-800">99.90€</p><p className="text-stone-500 text-sm mt-1">Soit 49.95€/bougie — 10€ d'économie</p>
              <button className="mt-4 bg-amber-200 hover:bg-amber-300 text-stone-900 font-medium px-6 py-3 rounded-lg w-full">Ajouter le bundle</button>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-light text-center">FAQ</h2>
          <div className="mt-8 space-y-6">
<details className="border-b border-stone-200 pb-4"><summary className="cursor-pointer font-medium text-stone-700">Quel parfum choisir pour offrir ?</summary><p className="mt-2 text-stone-500">Notre parfum d'exception est universel. Il plaît à 95% de nos clients.</p></details>
            <details className="border-b border-stone-200 pb-4"><summary className="cursor-pointer font-medium text-stone-700">Combien de temps dure la bougie ?</summary><p className="mt-2 text-stone-500">40 heures de combustion. Tronquez la mèche à 0.5cm avant chaque allumage.</p></details>
            <details className="border-b border-stone-200 pb-4"><summary className="cursor-pointer font-medium text-stone-700">Le bijou est-il vraiment personnalisé ?</summary><p className="mt-2 text-stone-500">Oui — gravure au laser sur acier inoxydable. Bijou hypoallergénique, résistant à l'eau.</p></details>
            <details className="border-b border-stone-200 pb-4"><summary className="cursor-pointer font-medium text-stone-700">Comment fonctionne le retour ?</summary><p className="mt-2 text-stone-500">14 jours satisfait ou remboursé. Si la bougie n'a pas été allumée. contact@candle-jewelry.fr</p></details>
          </div>
        </div>
      </section>
      <footer className="py-8 px-4 bg-stone-900 text-stone-400 text-sm text-center"><p>© 2026 CANDLE — Bougie Bijou Luxe</p><p className="mt-2">Stripe sécurisé · CGV · Confidentialité · contact@candle-jewelry.fr</p></footer>
    </main>
  )
}
