import Link from 'next/link'

export const metadata = {
  title: 'Paiement confirmé — CANDLE',
  description: 'Votre commande de Bougie Bijou Luxe a été confirmée. Merci pour votre confiance.',
}

export default function CheckoutSuccessPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="bg-stone-900 text-stone-100 py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif italic text-amber-200 mb-4">Paiement confirmé</h1>
          <p className="text-stone-300 text-lg mb-8">Merci pour votre confiance. Votre Bougie Bijou Luxe est en préparation.</p>
          <div className="bg-stone-800 rounded-xl p-6 border border-stone-700 mb-8">
            <p className="text-stone-400 text-sm mb-2">Votre commande</p>
            <p className="text-stone-100 text-xl font-serif italic">Bougie Bijou Luxe</p>
            <p className="text-amber-300 text-2xl mt-2">59.90€</p>
            <p className="text-stone-500 text-sm mt-4">Livraison sous 7 jours — Suivi par email</p>
          </div>
          <Link href="/" className="inline-block bg-amber-200 hover:bg-amber-300 text-stone-900 font-medium px-8 py-4 rounded-lg transition-colors">
            Retour à l'accueil
          </Link>
        </div>
      </section>
    </main>
  )
}