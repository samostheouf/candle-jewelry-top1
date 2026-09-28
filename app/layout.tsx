import type { Metadata } from 'next'
import { ProductJSONLD } from '@/components/JSONLD'

export const metadata: Metadata = {
  title: {
    default: 'CANDLE — Bougie Bijou de Grasse',
    template: '%s — CANDLE',
  },
  description:
    'Une bougie qui révèle un bijou. Parfum d’exception de Grasse, cire de colza naturelle, 40h de combustion. Bijou gravé au laser. Livraison 7 jours. 14j satisfait ou remboursé.',
  keywords: [
    'bougie luxe',
    'bougie parfumée Grasse',
    'cadeau luxe',
    'bijou gravé laser',
    'parfum Provence',
    'cire colza naturelle',
    'cadeau mariage',
    'cadeau anniversaire',
    'objet d art',
  ],
  authors: [{ name: 'CANDLE', url: 'https://candle-jewelry-top1.vercel.app/a-propos' }],
  creator: 'CANDLE',
  openGraph: {
    title: 'CANDLE — Bougie Bijou de Grasse',
    description:
      'Parfum d’exception + bijou gravé au laser. L’art du feu et du précieux.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://candle-jewelry-top1.vercel.app/',
    siteName: 'CANDLE',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'CANDLE — Bougie Bijou de Grasse',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CANDLE — Bougie Bijou de Grasse',
    description: 'Parfum d’exception + bijou gravé au laser. L’art du feu et du précieux.',
    images: ['/og-image.svg'],
  },
  icons: { icon: '/favicon.ico', shortcut: '/favicon.ico' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: { canonical: 'https://candle-jewelry-top1.vercel.app/' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@200;300;400;500&display=swap"
        />
        <meta name="theme-color" content="#0c0a09" />
        {/* Séparateur typographique luxe */}
        <style>{`
          @keyframes reveal-up {
            0% { opacity: 0; transform: translateY(24px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          @keyframes fade-in {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          .animate-reveal-up {
            animation: reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .animate-shimmer {
            background: linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.08) 50%, transparent 100%);
            background-size: 200% 100%;
            animation: shimmer 4s ease-in-out infinite;
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-fade-in {
            animation: fade-in 1.2s ease-out forwards;
          }
          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-500 { animation-delay: 0.5s; }
          .delay-700 { animation-delay: 0.7s; }
          .delay-1000 { animation-delay: 1.0s; }
          .opacity-0 { opacity: 0; }
        `}</style>
      </head>
      <body className="min-h-screen bg-stone-50 text-stone-800 font-['Inter'] font-light antialiased selection:bg-amber-500/20 selection:text-amber-900">
        {/* ═══════════════════════════════════════════ HEADER LUXE ═══════════════════════════════════════════ */}
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-stone-200/40 bg-stone-50/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between">
            {/* Logo CANDLE */}
            <a
              href="/"
              className="flex items-center gap-3 group"
              aria-label="Accueil CANDLE"
            >
              <svg
                viewBox="0 0 48 48"
                className="w-8 h-8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Ellipse extérieure — halo */}
                <ellipse
                  cx="24"
                  cy="24"
                  rx="22"
                  ry="22"
                  stroke="currentColor"
                  strokeWidth="0.75"
                  className="text-stone-400"
                />
                {/* Flamme stylisée */}
                <path
                  d="M24 10 C16 16, 16 22, 24 30 C32 22, 32 16, 24 10Z"
                  fill="currentColor"
                  className="text-amber-600/30"
                />
                <path
                  d="M24 30 L24 38"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  className="text-amber-700"
                />
                {/* Initiale C serif */}
                <text
                  x="24"
                  y="24"
                  textAnchor="middle"
                  fontSize="13"
                  fontFamily="serif"
                  fontStyle="italic"
                  fill="currentColor"
                  className="text-amber-800"
                >
                  C
                </text>
              </svg>
              <span className="font-serif italic text-xl text-stone-700 group-hover:text-amber-800 transition-colors tracking-tight">
                Candle
              </span>
            </a>

            {/* Navigation principale */}
            <nav className="hidden lg:flex items-center gap-10" aria-label="Navigation">
              {[
                { href: '/produits', label: 'Boutique' },
                { href: '/a-propos', label: 'Notre histoire' },
                { href: '/faq', label: 'Savoir-faire' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.2em] text-stone-500 hover:text-amber-700 transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA achat — bouton luxe minimaliste */}
            <a
              href="/#produit"
              className="hidden sm:flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-stone-100 px-5 py-2.5 rounded-sm transition-all hover:shadow-lg hover:shadow-stone-900/20 group"
            >
              <span className="text-xs uppercase tracking-widest text-stone-400 group-hover:text-stone-300">
                Acheter
              </span>
              <span className="text-sm font-medium">59.90€</span>
            </a>
            <a
              href="/#produit"
              className="sm:hidden text-xs bg-stone-900 text-stone-100 px-4 py-2 rounded-sm w-full text-center mt-2"
            >
              Acheter — 59.90€
            </a>
          </div>

          {/* Ligne d'ombre fine */}
          <div className="h-px bg-gradient-to-r from-transparent via-amber-500/10 to-transparent" />
        </header>

        {/* ═══════════════════════════════════════════ MAIN ═══════════════════════════════════════════ */}
        <main id="main-content" className="pt-20">
          {children}
        </main>

        {/* ═══════════════════════════════════════════ FOOTER LUXE ═══════════════════════════════════════════ */}
        <footer className="border-t border-stone-200/60 bg-stone-900 text-stone-400">
          <div className="max-w-7xl mx-auto px-5 py-16">
            {/* Top row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {/* Brand column */}
              <div className="md:col-span-1">
                <a
                  href="/"
                  className="inline-flex items-center gap-2.5 mb-5 group"
                >
                  <svg
                    viewBox="0 0 48 48"
                    className="w-7 h-7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse cx="24" cy="24" rx="22" ry="22" stroke="currentColor" strokeWidth="0.75" className="text-amber-600/60" />
                    <path d="M24 10 C16 16, 16 22, 24 30 C32 22, 32 16, 24 10Z" fill="currentColor" className="text-amber-600/20" />
                    <path d="M24 30 L24 38" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="text-amber-600/80" />
                  </svg>
                  <span className="font-serif italic text-stone-200 text-base tracking-tight">
                    Candle
                  </span>
                </a>
                <p className="text-xs leading-relaxed text-stone-500 max-w-xs">
                  Bougie parfumée bijou — Parfum d'exception de Grasse, design gravé au laser.
                </p>
              </div>

              {/* Boutique */}
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.25em] text-stone-500 mb-5 font-medium">
                  Boutique
                </h3>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <a href="/#produit" className="hover:text-amber-400 transition-colors">
                      Bougie Bijou Luxe
                    </a>
                  </li>
                  <li>
                    <a href="/#bundle" className="hover:text-amber-400 transition-colors">
                      Bundle — 2 Bougies
                    </a>
                  </li>
                  <li>
                    <a href="/a-propos" className="hover:text-amber-400 transition-colors">
                      Notre histoire
                    </a>
                  </li>
                </ul>
              </div>

              {/* Savoir-faire */}
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.25em] text-stone-500 mb-5 font-medium">
                  Savoir-faire
                </h3>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <a href="/faq" className="hover:text-amber-400 transition-colors">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:text-amber-400 transition-colors">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="/faq" className="hover:text-amber-400 transition-colors">
                      Questions fréquentes
                    </a>
                  </li>
                </ul>
              </div>

              {/* Légal */}
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.25em] text-stone-500 mb-5 font-medium">
                  Légal
                </h3>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <a href="/cgv" className="hover:text-amber-400 transition-colors">
                      CGV
                    </a>
                  </li>
                  <li>
                    <a href="/confidentialite" className="hover:text-amber-400 transition-colors">
                      Confidentialité
                    </a>
                  </li>
                  <li>
                    <a href="/mentions-legales" className="hover:text-amber-400 transition-colors">
                      Mentions légales
                    </a>
                  </li>
                  <li>
                    <a href="mailto:contact@candle-jewelry.fr" className="hover:text-amber-400 transition-colors">
                      contact@candle-jewelry.fr
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Séparateur */}
            <div className="my-10 h-px bg-gradient-to-r from-transparent via-stone-700/40 to-transparent" />

            {/* Bottom row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
              <p className="tracking-wide">
                © 2026 Candle — Bougie Bijou de Grasse. Tous droits réservés.
              </p>
              <div className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-amber-600/40" />
                <span className="text-stone-500">Paiement sécurisé par Stripe</span>
                <span className="w-1 h-1 rounded-full bg-amber-600/40" />
                <span className="text-stone-500">14j satisfait ou remboursé</span>
              </div>
            </div>
          </div>
        </footer>

        {/* JSON-LD enrichi */}
        <ProductJSONLD />
      </body>
    </html>
  )
}
