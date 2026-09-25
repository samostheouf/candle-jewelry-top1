'use client'

export const metadata = {
  title: 'Contact — CANDLE',
  description: 'Contactez CANDLE pour toute question sur nos bougies bijou luxe. contact@candle-jewelry.fr — réponse sous 24h.',
}

export default function Contact() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="bg-stone-900 text-stone-100 py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light">Contact</h1>
          <p className="text-stone-400 mt-4 text-lg">Une question ? Écrivez-nous.</p>
        </div>
      </section>
      <section className="py-16 px-4 bg-white max-w-xl mx-auto">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Nom</label>
            <input type="text" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Votre nom" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
            <input type="email" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="votre@email.com" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Message</label>
            <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Votre message..." required />
          </div>
          <button type="submit" className="w-full bg-amber-200 hover:bg-amber-300 text-stone-900 font-medium px-6 py-3 rounded-lg">Envoyer</button>
          <p className="text-center text-stone-400 text-sm">ou écrivez directement à <a href="mailto:contact@candle-jewelry.fr" className="text-amber-600">contact@candle-jewelry.fr</a></p>
        </form>
      </section>
    </main>
  )
}