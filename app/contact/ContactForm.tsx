'use client'

import { useState, FormEvent } from 'react'

interface ContactState {
  loading: boolean
  success: boolean | null
  error: string | null
}

export default function ContactForm() {
  const [state, setState] = useState<ContactState>({
    loading: false,
    success: null,
    error: null,
  })

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setState({ loading: true, success: null, error: null })

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      const data = (await res.json()) as { success?: boolean; error?: string }

      if (res.ok && data.success) {
        setState({ loading: false, success: true, error: null })
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setState({
          loading: false,
          success: null,
          error: data.error || 'Erreur lors de l\'envoi.',
        })
      }
    } catch {
      setState({
        loading: false,
        success: null,
        error: 'Impossible de joindre le serveur. Réessayez.',
      })
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {state.success && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg px-5 py-4 text-center">
          ✓ Message envoyé avec succès. Merci de nous avoir contactés !
        </div>
      )}

      {state.error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-5 py-4 text-center">
          ✕ {state.error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1">Nom</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
          placeholder="Votre nom"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
          placeholder="votre@email.com"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1">Message</label>
        <textarea
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
          placeholder="Votre message..."
          required
        />
      </div>

      <button
        type="submit"
        disabled={state.loading}
        className={`w-full font-medium px-6 py-3 rounded-lg text-stone-900 transition-colors ${
          state.loading
            ? 'bg-stone-300 cursor-not-allowed'
            : 'bg-amber-200 hover:bg-amber-300'
        }`}
      >
        {state.loading ? 'Envoi en cours…' : 'Envoyer'}
      </button>

      <p className="text-center text-stone-400 text-sm">
        ou écrivez directement à{' '}
        <a href="mailto:contact@candle-jewelry.fr" className="text-amber-600">
          contact@candle-jewelry.fr
        </a>
      </p>
    </form>
  )
}
