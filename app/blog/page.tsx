import { JSONLD } from '@/components/JSONLD'

export const metadata = {
  title: 'Blog — CANDLE',
  description: 'Articles sur les bougies parfumées, le parfum de Grasse, les idées cadeaux luxe et nos derniers lancements.',
}

export default function Blog() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="bg-stone-900 text-stone-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light">Le Blog CANDLE</h1>
          <p className="text-stone-400 mt-4 max-w-xl mx-auto text-lg">Conseils, histoires et inspiration autour de la bougie parfumée.</p>
        </div>
      </section>
      <section className="py-16 px-4 bg-white max-w-4xl mx-auto">
        <article className="mb-10 p-6 bg-stone-50 rounded-xl border border-stone-200">
          <time className="text-amber-600 text-sm">20 septembre 2026</time>
          <h2 className="text-2xl font-serif italic mt-2">Pourquoi le parfum de Grasse fait la différence</h2>
          <p className="mt-4 text-stone-600 leading-relaxed">La ville de Grasse, perchée sur le plateau de l'Arctique niçois, est depuis des siècles le cœur mondial de la parfumerie. Son microclimat unique, ses jardins de roses, de jasmin et d'oranger en fait le terroir des plus belles fragrances. Chez CANDLE, nous travaillons directement avec des extracteurs de Grasse pourCapturez l'essence de ce terroir dans chaque bougie.</p>
        </article>
        <article className="mb-10 p-6 bg-stone-50 rounded-xl border border-stone-200">
          <time className="text-amber-600 text-sm">15 septembre 2026</time>
          <h2 className="text-2xl font-serif italic mt-2">Comment choisir le parfum parfait pour un cadeau</h2>
          <p className="mt-4 text-stone-600 leading-relaxed">Offrir une bougie parfumée, c'est offrir un moment. Mais comment choisir le parfum juste ? 95% de nos clients adorent notre parfum d'exception, mais nous vous conseillons aussi de considérer les goûts de la personne : floral pour une femme, boisé pour un homme, citrus pour un amateur de fraîcheur.</p>
        </article>
        <article className="mb-10 p-6 bg-stone-50 rounded-xl border border-stone-200">
          <time className="text-amber-600 text-sm">10 septembre 2026</time>
          <h2 className="text-2xl font-serif italic mt-2">Nouveau : le Bundle Mariage — 99.90€ pour 2 bougies</h2>
          <p className="mt-4 text-stone-600 leading-relaxed">Pour les jeunes mariés qui veulent une touche de luxe accessible, le bundle CANDLE offre 2 bougies bijou personnalisées à 49.95€ pièce — soit 10€ d'économie. L'emballage coffret est offert. Parfait pour la table des fiancés ou en cadeau de mariage.</p>
        </article>
        <footer className="py-8 text-center text-stone-400 text-sm"><p>Retrouvez plus d'articles prochainement. Retour à l'accueil → <a href="/" className="text-amber-600">Accueil</a></p></footer>
      </section>
    </main>
  )
}