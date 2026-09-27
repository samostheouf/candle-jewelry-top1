import type { Metadata } from 'next'
import { JSONLD } from '@/components/JSONLD'

export const metadata: Metadata = {
  title: {
    default: 'Bougie Bijou Luxe — CANDLE',
    template: '%s | CANDLE',
  },
  description:
    'Bougie parfumée bijou luxe. Parfum d\'exception de Grasse, design bijou gravé au laser, cire de colza naturelle, 40h de combustion. Livraison 7 jours, 14j satisfait ou remboursé.',
  keywords: [
    'bougie luxe',
    'bougie parfumée',
    'cadeau luxe',
    'bijou personnalisé',
    'parfum Grasse',
    'bougie cire colza',
    'cadeau anniversaire',
    'cadeau mariage',
  ],
  authors: [
    {
      name: 'CANDLE',
      url: 'https://candle-jewelry-top1.vercel.app/a-propos',
    },
  ],
  creator: 'CANDLE',
  openGraph: {
    title: 'Bougie Bijou Luxe — CANDLE',
    description: 'Parfum d\'exception + design bijou. Livraison <7 jours.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://candle-jewelry-top1.vercel.app/',
    siteName: 'CANDLE',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Bougie Bijou Luxe — Parfum d\'Exception',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bougie Bijou Luxe — CANDLE',
    description: 'Parfum d\'exception + design bijou. Livraison 7 jours.',
    images: ['/og-image.svg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
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
  alternates: {
    canonical: 'https://candle-jewelry-top1.vercel.app/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        {/* Préchargement ressources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap"
        />
        {/* JSON-LD enrichi (injection via ProductJSONLD dans layout) */}
        <meta name="theme-color" content="#1c1917" />
      </head>
      <body className="min-h-screen bg-stone-50 text-stone-800 font-['Inter'] font-light antialiased">
        {/* ── HEADER LUXE ── */}
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-stone-200/60 bg-stone-50/90 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            {/* Logo CANDLE */}
            <a
              href="/"
              className="flex items-center gap-2 group"
              aria-label="Accueil CANDLE"
            >
              <span className="flex items-center">
                <svg
                  viewBox="0 0 40 40"
                  className="w-8 h-8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-amber-600"
                  />
                  <path
                    d="M20 8 C14 12, 14 18, 20 22 C26 18, 26 12, 20 8Z"
                    fill="currentColor"
                    className="text-amber-600/20"
                  />
                  <path
                    d="M20 28 L20 34"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className="text-amber-600"
                  />
                  <text
                    x="20"
                    y="22"
                    textAnchor="middle"
                    fontSize="10"
                    fontFamily="serif"
                    fontStyle="italic"
                    fill="currentColor"
                    className="text-amber-700"
                  >
                    C
                  </text>
                </svg>
              </span>
              <span className="font-serif italic text-lg text-stone-700 group-hover:text-amber-700 transition-colors tracking-tight">
                CANDLE
              </span>
            </a>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
              {[
                { href: '/produits', label: 'Produits' },
                { href: '/a-propos', label: 'Notre histoire' },
                { href: '/faq', label: 'FAQ' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-stone-500 hover:text-amber-700 transition-colors tracking-wide uppercase"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA achat */}
            <a
              href="/#produit"
              className="hidden sm:flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-stone-50 font-medium text-sm px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:shadow-amber-500/20"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              Acheter
            </a>
          </div>

          {/* Nav mobile */}
          <div className="md:hidden border-t border-stone-200/60">
            <div className="flex flex-wrap gap-1 px-4 py-2">
              {[
                { href: '/produits', label: 'Produits' },
                { href: '/a-propos', label: 'Histoire' },
                { href: '/faq', label: 'FAQ' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs text-stone-500 hover:text-amber-700 px-2 py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/#produit"
                className="text-xs bg-amber-600 text-stone-50 px-2 py-1 rounded-md w-full text-center mt-1"
              >
                Acheter — 59.90€
              </a>
            </div>
          </div>
        </header>

        {/* ── CONTENU ── */}
        <main id="main-content" className="pt-16">
          {children}
        </main>

        {/* ── FOOTER LUXE ── */}
        <footer className="border-t border-stone-200 bg-stone-900 text-stone-400">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="col-span-2 md:col-span-1">
                <a href="/" className="inline-flex items-center gap-2 mb-4">
                  <svg
                    viewBox="0 0 40 40"
                    className="w-6 h-6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" className="text-amber-500" />
                    <path d="M20 8 C14 12, 14 18, 20 22 C26 18, 26 12, 20 8Z" fill="currentColor" className="text-amber-500/20" />
                    <path d="M20 28 L20 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-amber-500" />
                  </svg>
                  <span className="font-serif italic text-stone-300 text-base">CANDLE</span>
                </a>
                <p className="text-xs leading-relaxed text-stone-500 max-w-xs">
                  Bougie parfumée bijou — Parfum d'exception de Grasse, design gravé au laser.
                </p>
              </div>

              {/* Liens */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-stone-500 mb-4">Boutique</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/produits" className="hover:text-amber-400 transition-colors">Bougie Bijou Luxe</a></li>
                  <li><a href="/#bundle" className="hover:text-amber-400 transition-colors">Bundle 2 bougies</a></li>
                  <li><a href="/a-propos" className="hover:text-amber-400 transition-colors">Notre histoire</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest text-stone-500 mb-4">Aide</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/faq" className="hover:text-amber-400 transition-colors">FAQ</a></li>
                  <li><a href="/contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
                  <li><a href="/#faq" className="hover:text-amber-400 transition-colors">Retours & satisfait ou remboursé</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest text-stone-500 mb-4">Légal</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="/ CGV" className="hover:text-amber-400 transition-colors">CGV</a>
                  </li>
                  <li>
                    <a href="/confidentialite" className="hover:text-amber-400 transition-colors">Confidentialité</a>
                  </li>
                  <li>
                    <a href="mailto:contact@candle-jewelry.fr" className="hover:text-amber-400 transition-colors">contact@candle-jewelry.fr</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bas de footer */}
            <div className="mt-8 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
              <p>© 2026 CANDLE — Bougie Bijou Luxe. Tous droits réservés.</p>
              <p className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-amber-600/60" />
                Paiement sécurisé par Stripe
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
