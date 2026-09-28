'use client'

import { useState, useEffect } from 'react'
import { ShoppingCart, Loader2, Check, Shield, CreditCard, RotateCcw, ChevronDown } from 'lucide-react'
import { formatPrice } from '@/lib/utils'

interface BuyButtonProps {
  price: number
  productId?: string
  productName?: string
  variant?: 'unit' | 'bundle'
  previewUrl?: string
}



export default function BuyButton({
  price,
  productId = 'CANDLE-001',
  productName = 'Bougie Bijou Luxe',
  variant = 'unit',
  previewUrl,
}: BuyButtonProps) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const discountedPrice = Math.round(price * 0.75)

  // Lecture des paramètres d'URL (ref, aff, promo)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      void params.get('ref')
      void params.get('aff')
      void params.get('promo')
    }
  }, [])

  const handleCheckout = async () => {
    if (!email) return
    setLoading(true)
    setError(null)

    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        variant,
        email,
      }),
    })

    const data = await res.json()
    if (data.url) {
      setSuccess(true)
      // Animation élégante avant redirection
      await new Promise((r) => setTimeout(r, 1200))
      window.location.href = data.url
    } else {
      setError(data.error || 'Une erreur est survenue')
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      {/* ── Badge prix promo — presenté comme un etiqueté luxe ── */}
      {price > 0 && (
        <div className="flex items-center justify-between rounded-sm border border-amber-200/50 bg-amber-50/40 px-4 py-3">
          <span className="text-xs uppercase tracking-[0.2em] text-amber-800 font-medium">
            Tarif
          </span>
          <span className="text-sm text-amber-900">
            <s className="mr-2 text-stone-400">{formatPrice(price)}</s>
            <strong className="text-amber-900">{formatPrice(discountedPrice)}</strong>
          </span>
        </div>
      )}

      {/* ── Champ email — minimaliste ── */}
      <input
        type="email"
        placeholder="votre@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label="Email pour la commande"
        className="w-full rounded-sm border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all"
      />

      {/* Message d'erreur */}
      {error && (
        <div className="rounded-sm bg-red-500/5 border border-red-500/10 px-4 py-2.5" role="alert">
          <p className="text-xs text-red-400">{error}</p>
        </div>
      )}

      {/* ── Bouton d'achat — style luxe sombre ── */}
      <button
        onClick={handleCheckout}
        disabled={loading || !email || success}
        className={`relative flex w-full items-center justify-center gap-2.5 rounded-sm px-5 py-3.5 text-sm font-medium text-white transition-all duration-200 overflow-hidden ${
          success
            ? 'bg-stone-700 shadow-md cursor-default'
            : 'bg-stone-900 hover:bg-stone-800 hover:shadow-xl hover:shadow-stone-900/20 active:scale-[0.98]'
        } disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {success ? (
          <>
            <Check className="h-4 w-4" />
            <span>Commande confirmée — redirection...</span>
          </>
        ) : loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Préparation de votre commande...</span>
          </>
        ) : (
          <>
            <ShoppingCart className="h-4 w-4" />
            <span>Acheter — {formatPrice(price)}</span>
          </>
        )}
        {!success && !loading && (
          <span className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
        )}
      </button>

      {/* Informations bundle */}
      {variant === 'bundle' && (
        <div className="text-center text-xs text-stone-500 border-t border-stone-100 pt-3">
          Bundle — 2 Bougies Bijou Luxe · Économisez 19.90€
        </div>
      )}

      {/* ── Aperçu produit — élégant, survol ── */}
      <div className="relative">
        <button
          type="button"
          onMouseEnter={() => setShowPreview(true)}
          onMouseLeave={() => setShowPreview(false)}
          onClick={() => setShowPreview(!showPreview)}
          className="flex items-center justify-center gap-1 text-xs text-stone-400 hover:text-stone-600 transition-colors w-full py-1"
        >
          <ChevronDown className="w-3 h-3 transition-transform duration-200" style={{ transform: showPreview ? 'rotate(180deg)' : 'rotate(0)' }} />
          {showPreview ? 'Masquer' : 'Découvrir le produit'}
        </button>
        {showPreview && (
          <div className="absolute left-1/2 -translate-x-1/2 bottom-10 z-10 w-72 rounded-sm border border-stone-200 bg-white shadow-2xl p-1 animate-fade-in">
            <img
              src={previewUrl || '/og-image.svg'}
              alt={productName}
              width={288}
              height={162}
              className="w-full rounded-sm object-cover"
            />
          </div>
        )}
      </div>

      {/* Badges de confiance — subtils */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-1 text-xs text-stone-400">
        <span className="flex items-center gap-1.5">
          <Shield className="w-3 h-3 text-stone-400" />
          Stripe sécurisé
        </span>
        <span className="flex items-center gap-1.5">
          <CreditCard className="w-3 h-3 text-stone-400" />
          Paiement crypté
        </span>
        <span className="flex items-center gap-1.5">
          <RotateCcw className="w-3 h-3 text-stone-400" />
          14j satisfait ou remboursé
        </span>
      </div>

      {/* Indicateur exclusivité — subtil */}
      {variant === 'unit' && (
        <div className="flex items-center justify-center gap-2 pt-0.5 text-xs text-stone-400">
          <span className="w-1 h-1 rounded-full bg-stone-300" />
          <span>Édition 2026</span>
        </div>
      )}
    </div>
  )
}
