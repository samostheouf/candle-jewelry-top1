'use client'

export default function ContactForm() {
  return (
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
  )
}
