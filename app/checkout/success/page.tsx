import { Suspense } from 'react'
import Link from 'next/link'
import CheckoutSuccessClient from './CheckoutSuccessClient'

export const metadata = {
  title: 'Paiement confirmé — CANDLE',
  description: 'Votre commande de Bougie Bijou Luxe a été confirmée. Merci pour votre confiance.',
}

export default function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string; variant?: string; promo?: string }>
}) {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* ── Bandeau top — élégant, ton-over-tone ── */}
      <div className="relative overflow-hidden bg-stone-900 text-stone-100">
        {/* Fond dégradé subtil */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-stone-800/60 to-stone-900 opacity-90" />
        {/* Grain texture subtil */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Détail décoratif — fine ligne dorée animée */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent animate-shimmer" />

        <div className="relative max-w-3xl mx-auto px-5 py-24 md:py-28">
          {/* ── Héro check mark animé ── */}
          <div className="flex flex-col items-center text-center mb-10 gap-4">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full bg-amber-500/10 animate-float" />
              <div className="relative w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center ring-1 ring-amber-400/30">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              {/* Petite étincelle décorative */}
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-amber-300/60 animate-pulse" />
            </div>

            <h1 className="text-3xl md:text-5xl font-serif italic text-amber-200 tracking-tight leading-tight">
              Paiement confirmé
            </h1>
            <p className="text-stone-400 text-base md:text-lg max-w-md">
              Merci de votre confiance — votre Bougie Bijou est en route vers vous.
            </p>
          </div>

          {/* ── Carte résumé commande (serveur, hydratée) ── */}
          <Suspense
            fallback={
              <div className="bg-stone-800/60 backdrop-blur-sm rounded-2xl border border-stone-700/50 p-8 text-center">
                <div className="flex items-center justify-center gap-2 text-stone-400 text-sm">
                  <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                    <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span>Chargement de votre commande...</span>
                </div>
              </div>
            }
          >
            <CheckoutSuccessClient searchParams={searchParams} />
          </Suspense>
        </div>
      </div>

      {/* ── Section actions post-achat ── */}
      <section className="max-w-2xl mx-auto px-5 pb-20 -mt-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Retour accueil */}
          <Link
            href="/"
            className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-stone-200 bg-white/70 backdrop-blur-sm p-6 text-center transition-all hover:bg-stone-50 hover:border-amber-200/50 hover:shadow-lg hover:shadow-stone-900/5"
          >
            <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-amber-50 transition-colors">
              <svg className="w-5 h-5 text-stone-500 group-hover:text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L2.5 11.5M2.5 11.5H13.5" />
              </svg>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-1">Accueil</p>
              <p className="text-sm font-medium text-stone-700 group-hover:text-amber-800 transition-colors">
                Retour à CANDLE
              </p>
            </div>
          </Link>

          {/* Suivi commande */}
          <a
            href="https://dashboard.stripe.com/payments/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-stone-200 bg-white/70 backdrop-blur-sm p-6 text-center transition-all hover:bg-stone-50 hover:border-amber-200/50 hover:shadow-lg hover:shadow-stone-900/5"
          >
            <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
              <svg className="w-5 h-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h4.5m-4.5 0a9 9 0 0 0 9 9h3a9 9 0 0 0 9-9M8.25 18.75H5.25m9-15.75h2.25m-2.25 0a7.5 7.5 0 0 1 7.5 7.5h2.25a7.5 7.5 0 0 1 7.5-7.5" />
              </svg>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-1">Suivi</p>
              <p className="text-sm font-medium text-stone-700 group-hover:text-amber-800 transition-colors">
                Dashboard Stripe
              </p>
            </div>
          </a >

          {/* Contact */}
          <a
            href="/contact"
            className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-stone-200 bg-white/70 backdrop-blur-sm p-6 text-center transition-all hover:bg-stone-50 hover:border-amber-200/50 hover:shadow-lg hover:shadow-stone-900/5"
          >
            <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-amber-50 transition-colors">
              <svg className="w-5 h-5 text-stone-500 group-hover:text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a3 3 0 0 1-3 3m0 0a3 3 0 0 1-3-3m3 3a3 3 0 0 0-3-3m0 0a3 3 0 0 0-3 3m4.5 0v.25c0 .36-.256.746-.656 1.026A48.56 48.56 0 0 1 12 20.25c-2.55 0-4.75-1.3-6.344-2.526A1.5 1.5 0 0 1 2.25 15.75V6.75m0 0a3 3 0 0 1 3-3m-3 3a3 3 0 0 0 3 3m5.25-1.5a3 3 0 0 1 3 3m0 0a3 3 0 0 1-3 3" />
              </svg>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-1">Besoin d'aide</p>
              <p className="text-sm font-medium text-stone-700 group-hover:text-amber-800 transition-colors">
                Nous contacter
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* ── Bandeau bas de page — infos pratiques ── */}
      <div className="bg-stone-100 border-t border-stone-200/60 py-8">
        <div className="max-w-2xl mx-auto px-5 text-center text-xs text-stone-500 leading-relaxed">
          <p className="mb-2">
            <span className="inline-flex items-center gap-1.5">
              <svg className="w-3 h-3 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Confirmation envoyée à votre adresse email
            </span>
          </p>
          <p className="text-stone-400">
            Livraison prévue sous 7 jours · Suivi par email · 14 jours satisfait ou remboursé
          </p>
        </div>
      </div>
    </main>
  )
}
