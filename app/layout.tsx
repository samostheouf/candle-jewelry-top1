import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: { default: 'Bougie Bijou Luxe — CANDLE', template: '%s | CANDLE' },
  description: 'Bougie parfumée bijou luxe. Parfum d\'exception, design bijou, livraison 7 jours.',
  keywords: ['bougie luxe', 'bougie parfumée', 'cadeau luxe', 'bijou personnalisé', 'parfum Grasse', 'bougie cire colza', 'cadeau anniversaire', 'cadeau mariage'],
  authors: [{ name: 'CANDLE', url: 'https://candle-jewelry-top1.vercel.app/a-propos' }],
  creator: 'CANDLE',
  openGraph: { title: 'Bougie Bijou Luxe — CANDLE', description: 'Parfum d\'exception + design bijou. Livraison <7 jours.', type: 'website', locale: 'fr_FR', url: 'https://candle-jewelry-top1.vercel.app/', siteName: 'CANDLE', images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Bougie Bijou Luxe' }] },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/favicon.ico' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://candle-jewelry-top1.vercel.app/' },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr"><body>{children}</body></html>
}
