export const metadata = {
  title: 'À Propos — CANDLE',
  description: 'CANDLE : une marque française de bougies parfumées bijou luxe. Parfum d\'exception de Grasse, design bijou gravé au laser, cire naturelle. Fondée avec passion pour la lumière et le luxe accessible.',
}

export default function APropos() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="bg-stone-900 text-stone-100 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light">À Propos</h1>
          <p className="text-stone-400 mt-4 max-w-xl mx-auto text-lg">L'histoire derrière chaque bougie.</p>
        </div>
      </section>
      <section className="py-16 px-4 bg-white max-w-3xl mx-auto">
        <div className="space-y-8 text-stone-600 leading-relaxed">
          <div>
            <h2 className="text-2xl font-serif italic">Notre mission</h2>
            <p className="mt-4">CANDLE naît d'un constat simple : les bougies luxe sont soit inaccessibles, soit dénuées de caractère. Nous voulons offrir l'exception à un prix juste — 59.90€ pour une bougie aux fragrances de Grasse, au bijou gravé au laser, à la cire de colza naturelle.</p>
          </div>
          <div>
            <h2 className="text-2xl font-serif italic">Notre sourcing</h2>
            <p className="mt-4">Le parfum provient d'extracteurs de Grasse (France). La cire de colza est certifiée naturelle. La mèche est en coton bio. Le bijou en acier inoxydable est gravé au laser dans notre atelier. Chaque bougie est expédiée depuis la France métropolitaine.</p>
          </div>
          <div>
            <h2 className="text-2xl font-serif italic">Notre engagement</h2>
            <p className="mt-4">14 jours satisfait ou remboursé. Emballage recyclé. Aucun test sur les animaux. Paiement sécurisé par Stripe. Livraison sous 7 jours.</p>
          </div>
          <div>
            <h2 className="text-2xl font-serif italic">Contact</h2>
            <p className="mt-4">contact@candle-jewelry.fr</p>
          </div>
        </div>
      </section>
      <footer className="py-8 px-4 bg-stone-900 text-stone-400 text-sm text-center"><p>© 2026 CANDLE — Bougie Bijou Luxe</p><p className="mt-2">Stripe sécurisé · CGV · Confidentialité · contact@candle-jewelry.fr</p></footer>
    </main>
  )
}