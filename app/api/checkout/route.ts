import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { createHash } from 'crypto'

export const dynamic = 'force-dynamic'

const PRODUCT_NAME = 'Bougie Bijou Luxe'
const PRODUCT_DESCRIPTION =
  "Bougie parfumée bijou luxe. Parfum d'exception de Grasse, design bijou gravé au laser, cire de colza naturelle, 40h de combustion. Livraison 7 jours, 14j satisfait ou remboursé."
const CURRENCY = 'eur'
const COUNTRIES = [
  'FR', 'DE', 'IT', 'ES', 'GB', 'US', 'JP', 'CH',
  'BE', 'NL', 'CA', 'AU', 'SG', 'AE', 'HK', 'KR',
] as const

const PRICES: Record<string, number> = {
  unit: 5990,
  bundle: 9990,
}

const PROMO_CODES: Record<string, { discount: number; description: string }> = {
  LANCEMENT30: { discount: 0.30, description: 'Offre de lancement -30%' },
  LAUNCH30:   { discount: 0.30, description: 'Launch discount -30%' },
  BIENVENUE20: { discount: 0.20, description: 'Bienvenue -20%' },
}

function resolvePrice(body: Record<string, unknown>): { label: string; amount: number } {
  const variant = (body.variant as string) ?? (body.bundle as string) ?? 'unit'
  if (variant === 'bundle' || body.bundle === true) {
    return { label: 'Bundle 2 Bougies', amount: PRICES.bundle }
  }
  return { label: 'Bougie unique', amount: PRICES.unit }
}

function applyPromo(amount: number, promoCode?: string): { finalAmount: number; discountDescription: string | null } {
  if (!promoCode) return { finalAmount: amount, discountDescription: null }
  const promo = PROMO_CODES[promoCode.toUpperCase()]
  if (!promo) return { finalAmount: amount, discountDescription: null }
  const finalAmount = Math.round(amount * (1 - promo.discount))
  return { finalAmount, discountDescription: promo.description }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json().catch(() => ({}))) as Record<string, unknown>
    const email = (body.email as string) || (body.customer_email as string) || ''

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Email valide requis' }, { status: 400 })
    }

    const { label, amount } = resolvePrice(body)
    const promoCode = (body.promoCode as string) || (body.promo as string) || undefined
    const { finalAmount, discountDescription } = applyPromo(amount, promoCode)
    const referralCode = (body.referralCode as string) || (body.ref as string) || undefined
    const affiliateCode = (body.affiliateCode as string) || (body.aff as string) || undefined

    const appUrl =
      (process.env.NEXT_PUBLIC_APP_URL as string) ||
      'https://candle-jewelry-top1.vercel.app'

    const idempotencyKey = createHash('sha256')
      .update(`${email}:candle:${Math.floor(Date.now() / 3600000)}`)
      .digest('hex')

    const session = await stripe.checkout.sessions.create(
      {
        payment_method_types: ['card'],
        customer_email: email,
        mode: 'payment',
        line_items: [
          {
            price_data: {
              currency: CURRENCY,
              product_data: {
                name: PRODUCT_NAME,
                description: PRODUCT_DESCRIPTION,
                metadata: {
                  variant: label.toLowerCase().replace(/\s+/g, '-'),
                  promoCode: promoCode || '',
                  discountDescription: discountDescription || '',
                },
              },
              unit_amount: finalAmount,
            },
            quantity: 1,
          },
        ],
        success_url: `${appUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}&variant=${label.toLowerCase().replace(/\s+/g, '-')}&promo=${promoCode || ''}`,
        cancel_url: `${appUrl}/checkout?cancel=1`,
        metadata: {
          product: PRODUCT_NAME,
          variant: label,
          price: finalAmount.toString(),
          originalPrice: amount.toString(),
          promoCode: promoCode || '',
          discountDescription: discountDescription || '',
          referralCode: referralCode || '',
          affiliateCode: affiliateCode || '',
          source: 'candle-checkout-api',
          email,
        } as any,
        shipping_address_collection: { allowed_countries: COUNTRIES as any },
        allow_promotion_codes: false,
      },
      { idempotencyKey }
    )

    return NextResponse.json({
      success: true,
      url: session.url,
      sessionId: session.id,
      variant: label,
      price: finalAmount / 100,
      originalPrice: amount / 100,
      currency: 'EUR',
      promoCode: promoCode || undefined,
      discountDescription: discountDescription || undefined,
      discountApplied: discountDescription ? true : false,
    })
  } catch (e: any) {
    console.error('candle checkout error', e)
    return NextResponse.json(
      { error: e.message || 'Erreur checkout' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    product: PRODUCT_NAME,
    description: PRODUCT_DESCRIPTION,
    prices: {
      unit: { label: 'Bougie unique', amount: PRICES.unit / 100, currency: 'EUR' },
      bundle: { label: 'Bundle 2 Bougies', amount: PRICES.bundle / 100, currency: 'EUR' },
    },
    promoCodes: Object.keys(PROMO_CODES),
    checkout: 'POST /api/checkout { email, variant?: "unit" | "bundle", promoCode?, referralCode?, affiliateCode? }',
    countries: COUNTRIES,
  })
}
