import { JSONLD } from '@/components/JSONLD'

export const metadata = {
  title: 'FAQ — CANDLE',
  description: 'FAQ CANDLE — tout savoir sur la Bougie Bijou Luxe : parfum, durée de combustion, personnalisation du bijou, retours, livraison.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Quel parfum choisir pour offrir ?', acceptedAnswer: { '@type': 'Answer', text: 'Notre parfum d\'exception est universel. Il plaît à 95% de nos clients. Pour un cadeau, c\'est le choix le plus sûr.' } },
    { '@type': 'Question', name: 'Combien de temps dure la bougie ?', acceptedAnswer: { '@type': 'Answer', text: '40 heures de combustion. Tronquez la mèche à 0.5cm avant chaque allumage.' } },
    { '@type': 'Question', name: 'Le bijou est-il vraiment personnalisé ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui — gravure au laser sur acier inoxydable. Bijou hypoallergénique, résistant à l\'eau.' } },
    { '@type': 'Question', name: 'Comment fonctionne le retour ?', acceptedAnswer: { '@type': 'Answer', text: '14 jours satisfait ou remboursé. Si la bougie n\'a pas été allumée. contact@candle-jewelry.fr' } },
    { '@type': 'Question', name: 'La livraison est-elle offerte ?', acceptedAnswer: { '@type': 'Answer', text: 'La livraison est offerte dès 59.90€ d\'achat. Expédition sous 48h, livraison sous 7 jours.' } },
    { '@type': 'Question', name: 'Le parfum est-il naturel ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui — fragrance de Grasse, cire de colza naturelle, mèche coton bio. Aucun produit chimique nocif.' } },
  ],
}

export default function FAQ() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="bg-stone-900 text-stone-100 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light">FAQ</h1>
          <p className="text-stone-400 mt-4 text-lg">Tout savoir sur la Bougie Bijou Luxe.</p>
        </div>
      </section>
      <JSONLD data={faqSchema} />
      <section className="py-16 px-4 bg-white max-w-3xl mx-auto">
        <div className="space-y-1">
          <details className="border-b border-stone-200 pb-4"><summary className="cursor-pointer font-medium text-stone-700">Quel parfum choisir pour offrir ?</summary><p className="mt-2 text-stone-500">Notre parfum d\'exception est universel. Il plaît à 95% de nos clients.</p></details>
          <details className="border-b border-stone-200 pb-4"><summary className="cursor-pointer font-medium text-stone-700">Combien de temps dure la bougie ?</summary><p className="mt-2 text-stone-500">40 heures de combustion. Tronquez la mèche à 0.5cm avant chaque allumage.</p></details>
          <details className="border-b border-stone-200 pb-4"><summary className="cursor-pointer font-medium text-stone-700">Le bijou est-il vraiment personnalisé ?</summary><p className="mt-2 text-stone-500">Oui — gravure au laser sur acier inoxydable. Bijou hypoallergénique, résistant à l\'eau.</p></details>
          <details className="border-b border-stone-200 pb-4"><summary className="cursor-pointer font-medium text-stone-700">Comment fonctionne le retour ?</summary><p className="mt-2 text-stone-500">14 jours satisfait ou remboursé. Si la bougie n\'a pas été allumée. contact@candle-jewelry.fr</p></details>
          <details className="border-b border-stone-200 pb-4"><summary className="cursor-pointer font-medium text-stone-700">La livraison est-elle offerte ?</summary><p className="mt-2 text-stone-500">La livraison est offerte dès 59.90€ d\'achat. Expédition sous 48h, livraison sous 7 jours.</p></details>
          <details className="border-b border-stone-200 pb-4"><summary className="cursor-pointer font-medium text-stone-700">Le parfum est-il naturel ?</summary><p className="mt-2 text-stone-500">Oui — fragrance de Grasse, cire de colza naturelle, mèche coton bio. Aucun produit chimique nocif.</p></details>
        </div>
      </section>
      <footer className="py-8 px-4 bg-stone-900 text-stone-400 text-sm text-center"><p>© 2026 CANDLE — Bougie Bijou Luxe</p><p className="mt-2">Stripe sécurisé · CGV · Confidentialité · contact@candle-jewelry.fr</p></footer>
    </main>
  )
}