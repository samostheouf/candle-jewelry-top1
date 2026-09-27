'use client'

import { useState, useEffect } from 'react'
import { ShoppingCart, Loader2, Gift, Users, Shield, CreditCard, RotateCcw, Check, Sparkles } from 'lucide-react'
import { formatPrice } from '@/lib/utils'

interface BuyButtonProps {
  productId: string
  productName: string
  price: number
  bundlePrice?: number
  discountPrice?: number
}

const PROMO_CODE = 'LANCEMENT30'
const PROMO_RATE = 0.7

export default function BuyButton({
  productId,
  productName,
  price,
  bundlePrice,
  discountPrice: explicitDiscountPrice,
}: BuyButtonProps) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showPromo, setShowPromo] = useState(false)
  const [promoCode, setPromoCode] = useState('')
  const [appliedPromo, setAppliedPromo] = useState(false)
  const [referralCode, setReferralCode] = useState('')
  const [affiliateCode, setAffiliateCode] = useState('')

  const discountedPrice = explicitDiscountPrice ?? Math.round(price * PROMO_RATE * 100) / 100

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  // Auto-applique les codes depuis l'URL (?promo=, ?ref=, ?aff=)
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
    if (!email || !validateEmail(email)) {
      setError('Veuillez saisir un email valide.')
      return
    }
    setError(null)
    setLoading(true)

    const activePromo = appliedPromo ? PROMO_CODE : undefined

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId,
          productName,
          price,
          email,
          promoCode: activePromo,
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
        setError(data.error || 'Erreur lors de la création de la commande.')
        setLoading(false)
      }
    } catch (e: any) {
      setError(e.message || 'Erreur de connexion. Réessayez.')
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      {/* Bannière promo de lancement */}
      {price > 0 && !appliedPromo && (
        <div className="flex items-center justify-between rounded-lg border border-amber-300 bg-amber-50 px-4 py-2.5">
          <span className="text-sm font-semibold text-amber-800">
            <Sparkles className="inline mr-1 h-3 w-3" />
            Offre de lancement -30%
          </span>
          <button
            type="button"
            onClick={() => setShowPromo(!showPromo)}
            className="text-sm text-amber-900 hover:underline"
          >
            {showPromo ? 'Masquer' : 'Appliquer'}
          </button>
        </div>
      )}

      {/* Version promo appliquée */}
      {appliedPromo && (
        <div className="flex items-center justify-between rounded-lg border border-green-300 bg-green-50 px-4 py-2">
          <span className="text-sm font-semibold text-green-800">✅ Promo -30% appliquée</span>
          <button
            type="button"
            onClick={() => setAppliedPromo(false)}
            className="text-sm text-green-700 hover:underline"
          >
            Retirer
          </button>
        </div>
      )}

      {/* Champs promo</span> */}
      {showPromo && (
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
            placeholder="Code promo"
            className="flex-1 rounded-lg border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && promoCode.toUpperCase() === PROMO_CODE) {
                setAppliedPromo(true)
                setShowPromo(false)
              }
            }}
          />
          <button
            type="button"
            onClick={() => {
              if (promoCode.toUpperCase() === PROMO_CODE) {
                setAppliedPromo(true)
                setShowPromo(false)
              }
            }}
            className="px-3 py-2 bg-amber-500 hover:bg-amber-600 text-stone-900 text-sm font-medium rounded-lg transition-colors"
          >
            Appliquer
          </button>
        </div>
      )}

      {/* Referral / Affiliate code */}
      {!referralCode && !affiliateCode && (
        <button
          type="button"
          onClick={() => {
            // Simuler l'affichage du champ code
          }}
          className="text-xs text-stone-400 hover:text-amber-600 transition-colors flex items-center gap-1 mx-auto"
        >
          <Gift className="w-3 h-3" />
          Vous avez un code ?
        </button>
      )}

      {referralCode && (
        <div className="flex items-center gap-1.5 text-xs text-green-600">
          <Users className="w-3 h-3" />
          Code referral appliqué
        </div>
      )}

      {affiliateCode && (
        <div className="flex items-center gap-1.5 text-xs text-green-600">
          <Users className="w-3 h-3" />
          Code affiliation appliqué
        </div>
      )}

      {/* Email input */}
      <input
        type="email"
        placeholder="votre@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label="Email pour la commande"
        className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
      />

      {/* Error message */}
      {error && (
        <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-3">
          <p className="text-sm text-red-400">{error}</p>
        </div>
      )}

      {/* Prix */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-light text-stone-900">{formatPrice(price)}</span>
        {bundlePrice && price !== bundlePrice && (
          <span className="text-stone-400 text-sm">
            ou <span className="text-amber-600 font-medium">{formatPrice(bundlePrice)}</span> pour le bundle
          </span>
        )}
      </div>

      {/* Bouton achat */}
      <button
        onClick={handleCheckout}
        disabled={loading || !email || success}
        aria-label={`Acheter ${productName} pour ${formatPrice(price)}`}
        className={`relative flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 overflow-hidden ${
          success
            ? 'bg-green-500 shadow-lg shadow-green-500/25 cursor-default'
            : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0'
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
            <ShoppingCart className="h-4 w-4 transition-transform duration-200" />
            <span>Acheter maintenant — {formatPrice(price)}</span>
          </>
        )}
        {!success && !loading && (
          <span className="absolute inset-0 bg-white/10 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
        )}
      </button>

      {/* Trust badges */}
      <div className="flex items-center justify-center gap-4 pt-1 text-xs text-stone-400">
        <span className="flex items-center gap-1">
          <Shield className="w-3 h-3 text-green-500" />
          Stripe sécurisé
        </span>
        <span className="flex items-center gap-1">
          <CreditCard className="w-3 h-3 text-green-500" />
          Paiement encrypté
        </span>
        <span className="flex items-center gap-1">
          <RotateCcw className="w-3 h-3 text-green-500" />
          14j satisfait ou remboursé
        </span>
      </div>

      {/* Offre de lancement */}
      <div className="flex items-center justify-center gap-2 pt-1 text-xs text-amber-600">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
        <span>Offre de lancement limitée — Derniers stocks</span>
      </div>
    </div>
  )
}
