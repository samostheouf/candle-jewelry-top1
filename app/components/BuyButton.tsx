'use client'

import { useState, useEffect } from 'react'
import { ShoppingCart, Loader2, Gift, Users, Shield, CreditCard, RotateCcw, Check, Eye } from 'lucide-react'
import { formatPrice } from '@/lib/utils'

interface BuyButtonProps {
  price: number
  productId?: string
  productName?: string
  variant?: 'unit' | 'bundle'
  previewUrl?: string
}

const PROMO_CODE = 'LANCEMENT30'

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
  const [referralCode, setReferralCode] = useState('')
  const [affiliateCode, setAffiliateCode] = useState('')
  const [showReferral, setShowReferral] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const discountedPrice = Math.round(price * 0.7)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const ref = params.get('ref')
      const aff = params.get('aff')
      const promo = params.get('promo')
      if (ref) setReferralCode(ref)
      if (aff) setAffiliateCode(aff)
      void promo
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
        promoCode: PROMO_CODE,
        referralCode: referralCode || undefined,
        affiliateCode: affiliateCode || undefined,
      }),
    })

    const data = await res.json()
    if (data.url) {
      setSuccess(true)
      setTimeout(() => {
        window.location.href = data.url
      }, 800)
    } else {
      setError(data.error || 'Une erreur est survenue')
      setLoading(false)
    }
  }

  return (
    <div className="space-y-3">
      {/* Bannière promo lancement -30% */}
      {price > 0 && (
        <div className="flex items-center justify-between rounded-lg border border-amber-300 bg-amber-50 px-4 py-2.5">
          <span className="text-sm font-semibold text-amber-800">
            🎉 Offre de lancement -30%
          </span>
          <span className="text-sm text-amber-900">
            <s className="mr-1.5 opacity-60">{formatPrice(price)}</s>
            <strong>{formatPrice(discountedPrice)}</strong>
          </span>
        </div>
      )}

      <input
        type="email"
        placeholder="votre@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label="Email for billing"
        className="w-full rounded-lg border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
      />

      {error && (
        <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-3 animate-shake" role="alert">
          <p className="text-sm text-red-400">{error}</p>
        </div>
      )}

      <button
        onClick={handleCheckout}
        disabled={loading || !email || success}
        className={`relative flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-semibold text-white transition-all duration-200 overflow-hidden ${
          success
            ? 'bg-green-500 shadow-lg shadow-green-500/25 cursor-default'
            : 'bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0'
        } disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {success ? (
          <>
            <Check className="h-5 w-5 animate-bounce" />
            <span>Redirection vers Stripe...</span>
          </>
        ) : loading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Création de la commande...</span>
          </>
        ) : (
          <>
            <ShoppingCart className="h-4 w-4" />
            <span>Acheter — {formatPrice(price)}</span>
          </>
        )}
        {!success && !loading && (
          <span className="absolute inset-0 bg-white/10 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
        )}
      </button>

      {/* Informations produit */}
      {variant === 'bundle' && (
        <div className="text-center text-xs text-amber-700 bg-amber-50 rounded-lg py-2 px-3 border border-amber-200">
          🎁 Bundle : 2 Bougies Bijou Luxe — Économisez 19.90€
        </div>
      )}

      {/* Aperçu produit */}
      <div className="relative">
        <button
          type="button"
          onMouseEnter={() => setShowPreview(true)}
          onMouseLeave={() => setShowPreview(false)}
          onClick={() => setShowPreview(!showPreview)}
          className="w-full text-xs text-stone-500 hover:text-amber-700 transition-colors flex items-center justify-center gap-1"
        >
          <Eye className="w-3 h-3" />
          Voir le produit
        </button>
        {showPreview && (
          <div className="absolute left-1/2 -translate-x-1/2 bottom-8 z-10 w-80 rounded-xl border border-stone-200 bg-white shadow-2xl p-2 animate-fade-in">
            <img
              src={previewUrl || '/og-image.svg'}
              alt={productName}
              width={320}
              height={180}
              className="w-full rounded-lg object-cover"
            />
          </div>
        )}
      </div>

      {/* Code promo / affiliation */}
      {!referralCode && !affiliateCode && (
        <button
          type="button"
          onClick={() => setShowReferral(!showReferral)}
          className="text-xs text-stone-400 hover:text-amber-700 transition-colors flex items-center gap-1 mx-auto"
        >
          <Gift className="w-3 h-3" />
          {showReferral ? 'Masquer' : 'Vous avez un code ?'}
        </button>
      )}

      {showReferral && (
        <input
          type="text"
          placeholder="Code promo ou de parrainage"
          value={referralCode || affiliateCode}
          onChange={(e) => {
            const v = e.target.value
            if (v.startsWith('aff_')) {
              setAffiliateCode(v)
              setReferralCode('')
            } else {
              setReferralCode(v)
              setAffiliateCode('')
            }
          }}
          className="w-full rounded-lg border border-stone-200 bg-white px-4 py-2 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
        />
      )}

      {referralCode && (
        <div className="flex items-center gap-1.5 text-xs text-green-600" role="status">
          <Users className="w-3 h-3" />
          Code appliqué
        </div>
      )}

      {/* Badges de confiance */}
      <div className="flex items-center justify-center gap-4 pt-2 text-xs text-stone-400">
        <span className="flex items-center gap-1">
          <Shield className="w-3 h-3 text-green-500" />
          Stripe sécurisé
        </span>
        <span className="flex items-center gap-1">
          <CreditCard className="w-3 h-3 text-green-500" />
          Paiement crypté
        </span>
        <span className="flex items-center gap-1">
          <RotateCcw className="w-3 h-3 text-green-500" />
          14j satisfait ou remboursé
        </span>
      </div>

      {/* Indicateur dernières unités */}
      {variant === 'unit' && (
        <div className="flex items-center justify-center gap-2 pt-1 text-xs text-amber-600">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span>Offre de lancement limitée — Derniers stocks</span>
        </div>
      )}
    </div>
  )
}
