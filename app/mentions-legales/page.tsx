export const metadata = {
  title: 'Mentions Légales — CANDLE',
  description: 'Mentions légales de CANDLE — Bougie Bijou de Grasse : dirigeant, SIRET, contact, hébergeur, propriété intellectuelle et droit applicable.',
}

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="bg-stone-900 text-stone-100 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light">Mentions Légales</h1>
          <p className="text-stone-400 mt-4 max-w-xl mx-auto text-lg">
            Informations légales obligatoires relatives au Site et à la société CANDLE.
          </p>
        </div>
      </section>

      {/* Corps */}
      <section className="py-16 px-4 bg-white max-w-3xl mx-auto">
        <article className="space-y-10 text-stone-600 leading-relaxed">

          {/* Identité */}
          <section>
            <h2 className="text-xl font-serif italic text-stone-800">1. Éditeur du Site</h2>
            <p className="mt-3">
              <strong>Société :</strong> CANDLE — Bougie Bijou de Grasse
            </p>
            <p className="mt-3">
              <strong>Forme juridique :</strong> Société par actions simplifiée (SAS)
            </p>
            <p className="mt-3">
              <strong>Capital social :</strong> 1 000 €
            </p>
            <p className="mt-3">
              <strong>SIRET :</strong> 123 456 789 00012
            </p>
            <p className="mt-3">
              <strong>SIREN :</strong> 123 456 789
            </p>
            <p className="mt-3">
              <strong>Adresse du siège social :</strong> 12 Avenue des Oliviers, 13006 Marseille, France
            </p>
            <p className="mt-3">
              <strong>Dirigeant(e) :</strong> Madame Marie Dupont, Présidente
            </p>
          </section>

          {/* ICANN */}
          <section>
            <h2 className="text-xl font-serif italic text-stone-800">2. Identité de l\'hébergeur</h2>
            <p className="mt-3">
              Le Site est hébergé par :
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li><strong>Vercel, Inc.</strong> — 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis — <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-600 underline underline-offset-2">vercel.com</a></li>
            </ul>
            <p className="mt-3">
              L\'hébergeur est le fournisseur technique permettant la publication du Site sur Internet. Il n\'est pas responsable du contenu du Site et agit uniquement en tant qu\'intermédiaire technique, dans les limites de ses obligations légales.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-serif italic text-stone-800">3. Contact</h2>
            <p className="mt-3">
              Pour toute question relative au Site ou à ses mentions légales :
            </p>
            <p className="mt-3">
              <strong>E-mail :</strong>{' '}
              <a href="mailto:contact@candle-jewelry.fr" className="text-amber-700 hover:text-amber-600 underline underline-offset-2">
                contact@candle-jewelry.fr
              </a>
            </p>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-xl font-serif italic text-stone-800">4. Propriété intellectuelle</h2>
            <p className="mt-3">
              Le Site, dont la conception, le contenu, la structure, les graphismes et l\'ensemble des éléments qui le composent, est la propriété exclusive de CANDLE.
            </p>
            <p className="mt-3">
              Toute reproduction, représentation, adaptation, translation, modification ou copie, même partielle, du Site ou de son contenu est interdite sans l\'autorisation écrite et préalable de CANDLE, au sens de l\'article L. 122-4 du Code de la propriété intellectuelle.
            </p>
            <p className="mt-3">
              Les marques, logos et noms commerciaux affichés sur le Site sont des marques déposées. Toute utilisation desdites marques sans autorisation préalable est strictement prohibée.
            </p>
          </section>

          {/* Responsabilités */}
          <section>
            <h2 className="text-xl font-serif italic text-stone-800">5. Responsabilités</h2>
            <p className="mt-3">
              CANDLE s\'engage à rendre le Site accessible et fonctionnel en permanence. Cependant, le Site est fourni « tel quel », sans garantie d\'absence de bugs, interruptions, dysfonctionnements ou atteintes aux données.
            </p>
            <p className="mt-3">
              CANDLE ne saurait être tenue responsable des dommages résultant :
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>D\'une indisponibilité du Site, y compris en cas de panne ou d\'intervention technique ;</li>
              <li>D\'une infection par un virus, un malware ou toute autre intrusion informatique ;</li>
              <li>De l\'utilisation des informations contenues dans le Site, à moins que CANDLE n\'en ait eu conscience et pu y remédier.</li>
            </ul>
          </section>

          {/* Liens hypertextes */}
          <section>
            <h2 className="text-xl font-serif italic text-stone-800">6. Liens hypertextes</h2>
            <p className="mt-3">
              Le Site contient des liens vers des sites tiers (Stripe, Vercel, CNIL, etc.). CANDLE ne peut être tenue responsable du contenu ou des pratiques de ces sites.
            </p>
            <p className="mt-3">
              Toute création d\'un lien hypertexte vers le Site est soumise à l\'accord préalable et écrit de CANDLE, sauf en cas de liens automatiques (référencement naturel).
            </p>
          </section>

          {/* Droit applicable */}
          <section>
            <h2 className="text-xl font-serif italic text-stone-800">7. Droit applicable et juridiction compétente</h2>
            <p className="mt-3">
              Le Site et l\'ensemble des relations entre CANDLE et ses utilisateurs sont régis par le droit français.
            </p>
            <p className="mt-3">
              À défaut de résolution amiable d\'un litige, les tribunaux compétents seront ceux du tribunal judiciaire du siège social de CANDLE (Marseille, France).
            </p>
          </section>

          {/* CGV */}
          <section>
            <h2 className="text-xl font-serif italic text-stone-800">8. Conditions Générales de Vente</h2>
            <p className="mt-3">
              L\'utilisation du Site pour passer commande est soumise aux Conditions Générales de Vente (CGV) de CANDLE, disponibles à l\'adresse{' '}
              <a href="/cgv" className="text-amber-700 hover:text-amber-600 underline underline-offset-2">/cgv</a>.
            </p>
            <p className="mt-3">
              Les présentes mentions légales ne remplacent pas les CGV. En cas de contradiction entre les deux documents, les CGV prévaudront pour tout achat sur le Site.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-xl font-serif italic text-stone-800">9. Cookies</h2>
            <p className="mt-3">
              Le Site utilise des cookies. Pour plus d\'informations sur les cookies utilisés, leur finalité et les modalités de gestion, veuillez consulter notre politique de confidentialité, disponible à l\'adresse{' '}
              <a href="/confidentialite" className="text-amber-700 hover:text-amber-600 underline underline-offset-2">/confidentialite</a>.
            </p>
          </section>

        </article>
      </section>

      {/* Footer de la page */}
      <footer className="py-8 px-4 bg-stone-900 text-stone-400 text-sm text-center">
        <p>© 2026 CANDLE — Bougie Bijou de Grasse</p>
        <p className="mt-2">Stripe sécurisé · CGV · Confidentialité · Mentions légales · contact@candle-jewelry.fr</p>
      </footer>
    </main>
  )
}
