'use client'

import { useSearchParams } from 'next/navigation'
import { Check, Loader2 } from 'lucide-react'
import { formatPrice } from '@/lib/utils'

interface CheckoutSuccessClientProps {
  searchParams: Promise<{ session_id?: string; variant?: string; promo?: string }>
}

export default function CheckoutSuccessClient({ searchParams }: CheckoutSuccessClientProps) {
  const params = useSearchParams()
  const sessionId = params.get('session_id') || ''
  const variant = params.get('variant') || 'bougie-unique'
  const promo = params.get('promo') || ''

  const labelMap: Record<string, { label: string; price: number }> = {
    'bougie-unique': { label: 'Bougie Bijou de Grasse', price: 59.90 },
    'bundle': { label: 'Bundle 2 Bougies Bijou de Grasse', price: 99.90 },
  }

  const product = labelMap[variant] || labelMap['bougie-unique']
  const discount = promo ? 30 : 0
  const finalPrice = product.price * (1 - discount / 100)

  return (
    <div className="max-w-lg mx-auto text-center">
      <div className="mb-6">
        <Check className="mx-auto h-12 w-12 text-amber-500" />
        <h2 className="mt-4 text-2xl font-serif text-stone-800">Merci !</h2>
        <p className="mt-2 text-stone-500">
          Votre commande est confirmée. Un email de confirmation a été envoyé.
        </p>
      </div>

      <div className="border-t border-stone-200 pt-6 text-left">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-stone-500">Article</span>
            <span className="font-medium text-stone-800">{product.label}</span>
          </div>
          {promo && (
            <div className="flex justify-between">
              <span className="text-stone-500">Promo appliquée</span>
              <span className="text-amber-600 font-medium">-{discount}%</span>
            </div>
          )}
          <div className="flex justify-between border-t border-stone-200 pt-2 mt-2">
            <span className="font-medium text-stone-800">Total payé</span>
            <span className="font-medium text-stone-800">{formatPrice(finalPrice)}</span>
          </div>
          <div className="flex justify-between text-stone-400 text-xs">
            <span>Session Stripe</span>
            <span className="font-mono truncate max-w-[200px]" title={sessionId}>
              {sessionId || '—'}
            </span>
          </div>
        </div>
      </div>

      <p className="mt-6 text-xs text-stone-400">
        Livraison sous 7 jours · 14j satisfait ou remboursé · Contact : contact@candle-jewelry.fr
      </p>
    </div>
  )
}
