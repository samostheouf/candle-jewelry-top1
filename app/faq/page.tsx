import { ProductJSONLD } from '@/components/JSONLD'

export const metadata = {
  title: 'FAQ — CANDLE',
  description:
    'FAQ CANDLE — tout savoir sur la Bougie Bijou Luxe : parfum, durée de combustion, personnalisation du bijou, retours, livraison.',
}

const QUESTIONS = [
  {
    q: 'Quel parfum choisir pour offrir ?',
    a: "Notre parfum d'exception est universel : notes ambrées et boisées de Grasse. Si vous cherchez autre chose, contactez-nous avant de commander.",
  },
  {
    q: 'Combien de temps dure la bougie ?',
    a: '40 heures de combustion. Tronquez la mèche à 0,5 cm avant chaque allumage pour une flamme propre.',
  },
  {
    q: 'Le bijou est-il vraiment personnalisé ?',
    a: "Oui — gravure au laser sur acier inoxydable. Bijou hypoallergénique, résistant à l'eau. Vous validez l'orthographe avant la gravure.",
  },
  {
    q: 'Comment fonctionne le retour ?',
    a: "14 jours satisfait ou remboursé, si la bougie n'a pas été allumée. Retour gratuit — contact@candle-jewelry.fr.",
  },
  {
    q: 'La livraison est-elle offerte ?',
    a: "Oui, dès une bougie achetée. Expédition sous 48 h, livraison sous 7 jours en France métropolitaine.",
  },
  {
    q: 'Le parfum est-il naturel ?',
    a: "Fragrance de Grasse, cire de colza naturelle, mèche en coton bio. Aucun produit chimique nocif.",
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: QUESTIONS.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="bg-stone-900 text-stone-100 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light">FAQ</h1>
          <p className="text-stone-400 mt-4 text-lg">Tout savoir sur la Bougie Bijou Luxe.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white max-w-3xl mx-auto">
        <div className="space-y-1">
          {QUESTIONS.map((item) => (
            <details key={item.q} className="border-b border-stone-200 pb-4">
              <summary className="cursor-pointer font-medium text-stone-700">
                {item.q}
              </summary>
              <p className="mt-2 text-stone-500">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="py-8 px-4 bg-stone-900 text-stone-400 text-sm text-center">
        <p>© 2026 CANDLE — Bougie Bijou Luxe</p>
        <p className="mt-2">Stripe sécurisé · CGV · Confidentialité · contact@candle-jewelry.fr</p>
      </footer>

      <ProductJSONLD />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  )
}
