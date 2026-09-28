import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  console.warn('STRIPE_SECRET_KEY non défini — le checkout Stripe sera en mode stub')
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
  apiVersion: '2026-08-26.dahlia',
  typescript: true,
})
