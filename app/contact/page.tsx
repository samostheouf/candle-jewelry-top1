import ContactForm from './ContactForm'

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
        <ContactForm />
      </section>
    </main>
  )
}