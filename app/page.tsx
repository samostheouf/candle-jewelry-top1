import { ProductJSONLD } from '@/components/JSONLD'
import BuyButton from '@/components/BuyButton'

// ─────────────────────────────────────────────────────────────────────────────
// MÉTADONNÉES — SEO on-page
// ─────────────────────────────────────────────────────────────────────────────
export const metadata = {
  title: 'CANDLE — Bougie Bijou de Grasse',
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
  alternates: { canonical: 'https://candle-jewelry-top1.vercel.app/' },
  openGraph: {
    title: 'CANDLE — Bougie Bijou de Grasse',
    description: 'Parfum d’exception + bijou gravé au laser. L’art du feu et du précieux.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://candle-jewelry-top1.vercel.app/',
    siteName: 'CANDLE',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'CANDLE — Bougie Bijou de Grasse' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CANDLE — Bougie Bijou de Grasse',
    description: 'Parfum d’exception + bijou gravé au laser.',
    images: ['/og-image.svg'],
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// SCHÉMAS STRUCTURÉS (Google Rich Results)
// ─────────────────────────────────────────────────────────────────────────────
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Bougie Bijou Luxe',
  description:
    'Bougie parfumée d\'exception de Grasse, avec bijou gravé au laser en acier inoxydable. Cire de colza naturelle, 40h de combustion. Livraison 7 jours. 14j satisfait ou remboursé.',
  url: 'https://candle-jewelry-top1.vercel.app/',
  image: '/og-image.svg',
  sku: 'CANDLE-001',
  brand: { '@type': 'Brand', name: 'CANDLE' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'EUR',
    price: '59.90',
    priceValidUntil: '2027-12-31',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
  },
  // ⚠️ Pas d'aggregateRating : la boutique n'a aucune vente enregistrée.
  // Publier une note inventée est une fausse publicité (loi du 2 mars 2007
  // contre les fausses déclarations commerciales) et expose au signalement
  // Stripe. On ne publie une note que lorsqu'un avis réel existe.
  hasMerchantReturnPolicy: {
    '@type': 'MerchantReturnPolicy',
    returnsWithin: 'P14D',
    returnMethod: 'https://schema.org/ReturnByMail',
    returnFees: 'https://schema.org/FreeReturn',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Quel parfum choisir pour offrir ?', acceptedAnswer: { '@type': 'Answer', text: "Notre parfum d'exception est universel. S'il ne vous convient pas, contactez-nous avant de commander." } },
    { '@type': 'Question', name: 'Combien de temps dure la bougie ?', acceptedAnswer: { '@type': 'Answer', text: '40 heures de combustion. Tronquez la mèche à 0.5cm avant chaque allumage.' } },
    { '@type': 'Question', name: 'Le bijou est-il vraiment personnalisé ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui — gravure au laser sur acier inoxydable. Bijou hypoallergénique, résistant à l\'eau.' } },
    { '@type': 'Question', name: 'Comment fonctionne le retour ?', acceptedAnswer: { '@type': 'Answer', text: '14 jours satisfait ou remboursé. contact@candle-jewelry.fr' } },
    { '@type': 'Question', name: "D'où vient le parfum de Grasse ?", acceptedAnswer: { '@type': 'Answer', text: 'Grasse, en Provence, est la capitale mondiale du parfum.' } },
  ],
}

// ⚠️ Aucun balisage Review : le témoignage de « Sophie M. » était inventé.
// Le structuré est ce que Google lit pour les étoiles dans les résultats —
// une fausse note ici coûte plus cher qu'une absence d'étoiles.

// ─────────────────────────────────────────────────────────────────────────────
// DONNÉES DE CONTENU
// ─────────────────────────────────────────────────────────────────────────────
const productFeatures = [
  { label: 'Parfum d\'exception', desc: 'Fragrance de Grasse — notes ambrées et boisées, créées par des nose d\'exception.' },
  { label: 'Bijou personnalisé', desc: 'Gravure au laser sur acier inoxydable premium — hypoallergénique, résistant à l\'eau.' },
  { label: 'Cire naturelle', desc: 'Cire de colza 100% végétale — mèche coton bio. Combustion propre et longue.' },
  { label: '40h de combustion', desc: 'Longue tenue — flamme douce et stable. Une bougie, une histoire.' },
  { label: 'Emballage cadeau luxe', desc: 'Coffret offert avec chaque bougie — prêt à offrir pour tous les moments.' },
]

const certifications = [
  { label: 'Parfum d\'exception', sub: 'Grasse — capitale du parfum' },
  { label: 'Cire de colza naturelle', sub: 'Origine France — végétale' },
  { label: '40h de combustion', sub: 'Longue tenue — flamme stable' },
  { label: 'Bijou gravé au laser', sub: 'Acier inoxydable premium' },
  { label: 'Livraison 7 jours', sub: 'Expédition France' },
  { label: '14j satisfait ou remboursé', sub: 'Retour gratuit' },
]

// ⚠️ Aucun témoignage client ici. Les trois avis qui figuraient auparavant
// (« Sophie M. », « Thomas R. », « Claire D. ») étaient inventés : la boutique
// n'a enregistré aucune vente. Un témoignage fabriqué est une fausse
// publicité, expose au signalement Stripe et détruit la confiance dès qu'un
// client l'examine de près. On n'affiche des avis que lorsqu'ils existent
// réellement : le premier avis réel viendra d'un vrai client.
const testimonials: Array<{
  quote: string
  author: string
  location: string
  rating: number
}> = []

const faqData = [
  { question: 'Quel parfum choisir pour offrir ?', answer: "Notre parfum d'exception est universel. S'il ne vous convient pas, contactez-nous avant de commander." },
  { question: 'Combien de temps dure la bougie ?', answer: '40 heures de combustion optimale. Tronquez la mèche à 0.5cm avant chaque allumage pour une flamme propre.' },
  { question: 'Le bijou est-il vraiment personnalisé ?', answer: 'Oui — gravure au laser sur acier inoxydable de qualité bijou. Hypoallergénique, résistant à l\'eau, conçu pour durer.' },
  { question: 'Comment fonctionne le retour ?', answer: '14 jours satisfait ou remboursé. La bougie doit être intacte, non allumée. Retour gratuit — contact@candle-jewelry.fr.' },
  { question: "D'où vient le parfum de Grasse ?", answer: 'Grasse, en Provence, est la capitale mondiale du parfum. Nos fragrances y sont créées par des nose d\'exception.' },
]

// ─────────────────────────────────────────────────────────────────────────────
// COMPOSANT — PAGE PRINCIPALE LUXE
// ─────────────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 0 — BANNER DE CONFIANCE (discret, haut de page)
          ═══════════════════════════════════════════════════════════════════ */}
      <div className="border-b border-stone-200/60 bg-stone-50/40">
        <div className="max-w-7xl mx-auto px-5 py-2.5 flex items-center justify-center gap-6 text-xs text-stone-400">
          <span className="flex items-center gap-1.5">
            <svg className="w-3 h-3 text-stone-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Stripe sécurisé
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3 h-3 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Paiement crypté
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3 h-3 text-stone-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            14j satisfait ou remboursé
          </span>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          HERO CINÉMATIQUE — Louis Vuitton style
          Fond noir profond, typographie serif, titre centré gras, sous-titre
          élégant, CTA minimaliste.
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-stone-950 text-stone-100">
        {/* Fond dégradé ambre — très subtil */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-transparent to-transparent pointer-events-none" />

        {/* Ligne d'ombre gauche — effet boutique */}
        <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-stone-950 via-transparent to-transparent pointer-events-none" />

        {/* Texture fine — grain de luxe */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 3px)' }} />

        {/* Contenu hero — centré, large */}
        <div className="relative max-w-5xl mx-auto px-5 py-28 md:py-36 lg:py-44 text-center">
          {/* Slogan préliminaire — serif italique, discret */}
          <p className="animate-reveal-up text-xs uppercase tracking-[0.3em] text-amber-600/60 mb-8 font-light">
            Art du feu · L'exception de Grasse
          </p>

          {/* Titre principal — Playfair Display alternatif via font-serif */}
          <h1 className="animate-reveal-up delay-200 text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] tracking-tight text-stone-100">
            Bougie Bijou
            <br />
            <span className="italic text-amber-300/90">de Grasse</span>
          </h1>

          {/* Sous-titre — élégant, fine lumière */}
          <p className="animate-reveal-up delay-300 mt-6 text-base md:text-lg text-stone-400 font-light max-w-xl mx-auto leading-relaxed">
            Une bougie qui révèle un bijou.{' '}
            <span className="text-stone-300">
              Parfum d'exception · Cire de colza naturelle · 40h de combustion
            </span>
          </p>

          {/* Séparateur subtil */}
          <div className="animate-reveal-up delay-400 mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-600/30" />
            <span className="text-xs uppercase tracking-[0.25em] text-stone-500">Collection 2026</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-600/30" />
          </div>

          {/* CTA — bouton luxe sombre, pas ambre flashy */}
          <div className="animate-reveal-up delay-500 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <BuyButton price={59.9} variant="unit" productId="CANDLE-001" />
            <a
              href="#bundle"
              className="group flex items-center gap-2 border border-stone-700 hover:border-stone-500 text-stone-300 hover:text-stone-100 px-6 py-3.5 rounded-sm font-medium text-sm transition-all hover:bg-stone-800/40 w-full sm:w-auto justify-center"
            >
              Bundle — 2 Bougies
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Prix élevé — discret, sous le CTA */}
          <p className="animate-reveal-up delay-700 mt-6 text-xs text-stone-600">
            Du parfum d'exception au bijou gravé — tout en un.
          </p>
        </div>

        {/* Ligne d'or bas — référence LV */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-600/20 to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION CRÉDENTIALS — Certifications en grille LV
          Mise en page sobre, labels crus, pas d'icônes emoji
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-10 px-5 bg-white border-y border-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {certifications.map((cert) => (
              <div
                key={cert.label}
                className="flex flex-col items-center text-center py-4 px-2 border-b border-stone-100 last:border-b-0 group"
              >
                <span className="text-xs uppercase tracking-[0.18em] text-stone-500 group-hover:text-stone-800 transition-colors font-medium">
                  {cert.label}
                </span>
                <span className="text-[10px] text-stone-400 mt-1.5 uppercase tracking-[0.1em]">{cert.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION CRAFTSMANSHIP — Storytelling luxury
          Image produit à gauche, texte storytelling à droite.
          Ton: prestige, savoir-faire, héritage.
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-stone-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Colonne image — produit en grand format */}
            <div className="relative">
              {/* Lueur ambre autour de l'image */}
              <div className="absolute -inset-6 bg-gradient-to-r from-amber-100/30 via-transparent to-transparent rounded-[2rem] blur-2xl opacity-50" />
              <img
                src="/og-image.svg"
                alt="Bougie Bijou de Grasse — Héritage et précieux"
                className="relative w-full max-w-sm mx-auto rounded-sm shadow-2xl shadow-stone-900/15 border border-stone-100"
                width={480}
                height={480}
              />
              {/* Étiquette produit discrète */}
              <div className="absolute -bottom-3 -right-3 bg-stone-900 text-stone-300 text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-sm">
                CANDLE-001 · Édition 2026
              </div>
            </div>

            {/* Colonne texte — storytelling */}
            <div className="flex flex-col">
              {/* Slogan de section */}
              <span className="text-[10px] uppercase tracking-[0.3em] text-amber-700/60 font-medium">
                Notre Savoir-faire
              </span>

              {/* Titre serif */}
              <h2 className="mt-4 text-3xl md:text-4xl font-serif italic text-stone-900 leading-tight">
                L'art du feu et du{' '}
                <span className="text-amber-800">précieux</span>
              </h2>

              {/* Texte storytelling — long, élégant, linéaire */}
              <div className="mt-6 space-y-5 text-stone-600 leading-relaxed text-base">
                <p>
                  Chaque Bougie Bijou est une rencontre entre deux métiers d'excellence :
                  la parfumerie de <strong className="text-stone-800">Grasse</strong>
                  — capitale mondiale du parfum depuis le 18e siècle —
                  et l'art du <strong className="text-stone-800">bijou gravé au laser</strong>.
                </p>
                <p>
                  Nous travaillons avec des extracteurs de Grasse pour des fragrances
                  aux notes ambrées, boisées et vanilles.
                  La cire de colza est certifiée naturelle, la mèche est en coton bio.
                  Le bijou est gravé au laser sur acier inoxydable de qualité précieuse —
                  hypoallergénique, résistant à l'eau, conçu pour durer.
                </p>
                <p className="text-stone-500 italic font-light">
                  Une bougie qui ne se consume pas seule —
                  elle révèle un bijou.
                </p>
              </div>

              {/* Liste des atouts — présentation luxe, pas de listes basiques */}
              <ul className="mt-8 space-y-0">
                {productFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 py-4 border-t border-stone-100 first:border-t-0 group">
                    {/* Indicateur minimaliste — petite ligne ambre */}
                    <div className="mt-2 w-1 h-1 rounded-full bg-amber-600/40 group-hover:bg-amber-600 transition-colors flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-stone-800 group-hover:text-amber-800 transition-colors">
                        {feature.label}
                      </span>
                      <p className="text-xs text-stone-400 mt-1 leading-relaxed">{feature.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* CTA — subtle */}
              <div className="mt-8">
                <BuyButton price={59.9} variant="unit" productId="CANDLE-001" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION PRODUIT ÉLEVÉ — Prix, offre, mise en valeur premium
          Fond blanc, mise en page asymétrique luxe.
          ═══════════════════════════════════════════════════════════════════ */}
      <section id="produit" className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          {/* Ligne d'élément décoratif — référence LV */}
          <div className="flex items-center gap-3 mb-12">
            <span className="h-px flex-1 bg-stone-200" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400">Le Chef-d'œuvre</span>
            <span className="h-px flex-1 bg-stone-200" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image produit — cadre luxe */}
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-amber-50 via-transparent to-transparent rounded-2xl blur-2xl opacity-20" />
              <img
                src="/og-image.svg"
                alt="Bougie Bijou Luxe — CANDLE"
                className="relative w-full max-w-sm mx-auto rounded-sm shadow-2xl border border-stone-100"
                width={480}
                height={480}
              />
              {/* Badge NOUVEAU discret */}
              <div className="absolute top-3 right-3 bg-stone-900 text-stone-300 text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-sm shadow-lg">
                Nouveau
              </div>
            </div>

            {/* Détails — élégants */}
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.3em] text-amber-800/60 font-medium">
                Collection 2026
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-serif italic text-stone-900 leading-tight">
                Bougie Bijou Luxe
              </h2>

              {/* Prix — présentation luxe */}
              <div className="mt-5 flex items-baseline gap-4">
                <span className="text-3xl font-serif text-stone-900">59.90€</span>
                <span className="text-stone-300 line-through text-lg">79.90€</span>
                <span className="bg-amber-800 text-stone-100 text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-sm font-medium">
                  -25%
                </span>
              </div>

              <p className="mt-5 text-stone-500 leading-relaxed text-base max-w-sm">
                Parfum d'exception de Grasse, design bijou gravé au laser,
                cire de colza naturelle. Chaque bougie est un objet d'art.
              </p>

              {/* Pas de faux témoignage ici non plus. On affiche un fait
                  vérifiable par le client plutôt qu'une citation inventée. */}
              <div className="mt-6 p-4 bg-stone-50 rounded-sm border border-stone-100">
                <p className="text-xs text-stone-500 leading-relaxed">
                  Le bijou est gravé au laser avant l&apos;emballage. Vous pouvez
                  contrôler la gravure et l'orthographe du prénom avant
                  d&apos;offrir — nous ne partons pas sans votre accord.
                </p>
              </div>

              {/* Badges confiance — discrets */}
              <div className="mt-5 flex flex-wrap gap-4 text-xs text-stone-400">
                <span className="flex items-center gap-1.5">
                  <svg className="w-3 h-3 text-stone-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Livraison 7 jours
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3 h-3 text-stone-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  14j satisfait ou remboursé
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3 h-3 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                  Coffret cadeau offert
                </span>
              </div>

              <div className="mt-6">
                <BuyButton price={59.9} variant="unit" productId="CANDLE-001" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION BUNDLE — Offre valorisée, mise en avant du prix obtenu
          ═══════════════════════════════════════════════════════════════════ */}
      <section id="bundle" className="py-20 md:py-28 px-5 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          {/* En-tête élégant */}
          <div className="text-center mb-14">
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-800/60 font-medium">
              Plus valeur
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl font-serif italic text-stone-900">
              Bundle — 2 Bougies Bijou Luxe
            </h2>
            <p className="mt-3 text-stone-500 text-sm max-w-md mx-auto">
              Offrez deux — chaque bougie offre un bijou unique. Économisez 19.90€.
            </p>
          </div>

          {/* Deux cartes — asymétrique, la deuxième mise en avant */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Bougie simple — discret */}
            <div className="bg-white rounded-sm p-6 border border-stone-200">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-stone-400">1 Bougie</p>
                  <p className="text-[10px] text-stone-300 mt-0.5">CANDLE-001</p>
                </div>
                <span className="text-2xl font-serif text-stone-700">59.90€</span>
              </div>
              <a
                href="/#produit"
                className="mt-4 w-full block border border-stone-200 hover:border-stone-300 text-stone-600 hover:text-stone-800 font-medium text-sm px-4 py-3 rounded-sm text-center transition-all"
              >
                Acheter
              </a>
            </div>

            {/* Bundle — en avant, différencié */}
            <div className="bg-white rounded-sm p-6 border-2 border-amber-700 relative shadow-xl shadow-stone-900/5">
              {/* Badge économie — référence LV */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-amber-800 text-stone-100 text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-sm shadow-lg">
                Économisez 19.90€
              </div>

              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-amber-800">2 Bougies</p>
                  <p className="text-[10px] text-stone-300 mt-0.5">CANDLE-BUNDLE-002</p>
                </div>
                <span className="text-2xl font-serif text-amber-900">99.90€</span>
              </div>

              <p className="text-xs text-stone-500 mb-1">
                Soit 49.95€ / bougie —{' '}
                <span className="text-amber-800 font-medium">33% d'économie</span>
              </p>

              <div className="mt-3 flex items-center gap-2 text-xs text-amber-800 bg-amber-50/50 px-3 py-1.5 rounded-sm border border-amber-200/40">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Coffret cadeau luxe offert
              </div>

              <BuyButton price={99.9} variant="bundle" productId="CANDLE-BUNDLE-002" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PROUVE SOCIALE LUXE — Témoignages en style galerie élégante
          Typographie fine, citations en italique, noms en serif
          ═══════════════════════════════════════════════════════════════════ */}
      <section id="preuve" className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          {/* En-tête — élégant, sans « témoignages » brut */}
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-medium">
              Ce que disent nos clients
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl font-serif italic text-stone-900">
              L'expérience Candle
            </h2>
            <p className="mt-2 text-sm text-stone-500 max-w-xl mx-auto">
              Première edition. Ce que vous recevez, exactement :
            </p>
          </div>

          {/* Pas de faux témoignages : la boutique n'a pas encore d'avis réels.
              On vend donc sur des faits vérifiables par le client. */}
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: 'Ouvrez avant de payer',
                body: "Le coffret s'ouvre freely. Si la bougie ou le bijou ne vous plaît pas, vous refermez et nous organisons le retour — sans justification.",
              },
              {
                title: '14 jours pour changer d’avis',
                body: "Retour gratuit sur produit intact et non allumé. Vous décidez après l’avoir reçue, dans votre propre salon.",
              },
              {
                title: 'Le bijou reste même après',
                body: "Quand la bougie sera finie, il vous restera l’acier gravé. C’est le vrai cadeau : deux objets en un.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-stone-50 rounded-sm p-6 border border-stone-100"
              >
                <h3 className="font-serif text-stone-900 text-lg mb-2">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-medium">
              Savoir-faire
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl font-serif italic text-stone-900">
              Questions fréquentes
            </h2>
          </div>

          {/* Accordéon — sobre, sans décorations lourdes */}
          <div className="space-y-0">
            {faqData.map((item, i) => (
              <details key={i} className="group border-b border-stone-200 last:border-b-0">
                <summary className="cursor-pointer font-medium text-stone-700 py-5 flex items-center justify-between list-none text-sm">
                  <span className="pr-4 text-stone-700">{item.question}</span>
                  <svg
                    className="w-4 h-4 text-stone-400 transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="pb-5 text-stone-500 leading-relaxed text-sm">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FOOTER PRÉMIUM — Mise en page riche, contenu légal
          Déjà défini dans le layout, section de clôture discrète ici.
          ═══════════════════════════════════════════════════════════════════ */}
      <div className="py-8 px-5 bg-stone-900 text-stone-500 text-xs text-center">
        <p className="tracking-wide">© 2026 Candle — Bougie Bijou de Grasse. Tous droits réservés.</p>
        <div className="mt-2 flex items-center justify-center gap-3">
          <a href="/cgv" className="hover:text-amber-400 transition-colors">CGV</a>
          <span className="w-1 h-1 rounded-full bg-stone-600" />
          <a href="/confidentialite" className="hover:text-amber-400 transition-colors">Confidentialité</a>
          <span className="w-1 h-1 rounded-full bg-stone-600" />
          <a href="mailto:contact@candle-jewelry.fr" className="hover:text-amber-400 transition-colors">contact@candle-jewelry.fr</a>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          JSON-LD STRUCTURÉ — Product + FAQ + Review
          ═══════════════════════════════════════════════════════════════════ */}
      <ProductJSONLD />
    </>
  )
}
