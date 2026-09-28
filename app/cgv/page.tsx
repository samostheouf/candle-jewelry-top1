export const metadata = {
  title: 'CGV — CANDLE',
  description: 'Conditions Générales de Vente de CANDLE — Bougie Bijou de Grasse. Modalités d\'achat, livraison, retours et garanties.',
}

export default function CGV() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="bg-stone-900 text-stone-100 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light">Conditions Générales de Vente</h1>
          <p className="text-stone-400 mt-4 max-w-xl mx-auto text-lg">
            Les conditions applicables à l\'achat de vos bougies bijou CANDLE.
          </p>
        </div>
      </section>

      {/* Corps */}
      <section className="py-16 px-4 bg-white max-w-3xl mx-auto">
        <article className="space-y-10 text-stone-600 leading-relaxed">

          {/* Art. 1 — Objet */}
          <section>
            <h2 className="text-xl font-serif italic text-stone-800">Article 1 — Objet des présentes CGV</h2>
            <p className="mt-3">
              Les présentes Conditions Générales de Vente (CGV) définissent les modalités contractuelles de vente de produits par la société CANDLE, au sens de l\'article L. 212-1 du Code de la consommation, à l\'ensemble de ses clients, qu\'ils soient particuliers ou professionnels.
            </p>
            <p className="mt-3">
              Elles s\'appliquent à toute commande passée sur le site internet <strong>candle-jewelry-top1.vercel.app</strong> (le « Site »), par voie électronique ou tout autre canal de commande. En passant commande, le client accepte sans réserve les présentes CGV.
            </p>
          </section>

          {/* Art. 2 — Produits */}
          <section>
            <h2 className="text-xl font-serif italic text-stone-800">Article 2 — Produits vendus</h2>
            <p className="mt-3">
              La vente porte sur des bougies parfumées bijou, composées d\'une bougie parfumée (cire de colza naturelle, fragrance d\'exception de Grasse, mèche en coton bio) et d\'un bijou en acier inoxydable gravé au laser. Les caractéristiques des produits sont indiquées sur les fiches produits du Site.
            </p>
            <p className="mt-3">
              Les photographies et descriptions sont données à titre indicatif. CANDLE s\'efforce de les rendre aussi fidèles que possible, mais ne saurait être tenée pour responsable de différences de couleur ou de texture dues aux paramètres d\'affichage de chaque appareil.
            </p>
          </section>

          {/* Art. 3 — Prix */}
          <section>
            <h2 className="text-xl font-serif italic text-stone-800">Article 3 — Prix</h2>
            <p className="mt-3">
              Les prix sont indiqués en euros, taxes incluses (TTC), et sont susceptibles d\'évolution sans préavis. Ils sont fixés en fonction du produit et des options choisies (personnalisation du bijou, bundle).
            </p>
            <p className="mt-3">
              À l\'exception des cas où un promo code valide est appliqué, le prix affiché à l\'issue du processus de commande est définitif. Toute erreur de prix constatée après validation de la commande pourra donner lieu à l\'annulation de la commande, CANDLE remboursant alors l\'intégralité des sommes versées.
            </p>
          </section>

          {/* Art. 4 — Commande */}
          <section>
            <h2 className="text-xl font-serif italic text-stone-800">Article 4 — Passation de commande</h2>
            <p className="mt-3">
              La commande est passée en ligne via le Site. Le client doit renseigner ses coordonnées, son adresse de livraison et ses informations de paiement. Il doit également accepter les présentes CGV et la politique de confidentialité au moment de la validation.
            </p>
            <p className="mt-3">
              La commande n\'est confirmée que lorsque le client reçoit un e-mail de confirmation d\'achat. Jusqu\'à cette confirmation, CANDLE n\'est pas contractuellement engagée. En cas d\'indisponibilité du produit, CANDLE se réserve le droit d\'annuler la commande et de rembourser l\'intégralité du montant.
            </p>
          </section>

          {/* Art. 5 — Paiement */}
          <section>
            <h2 className="text-xl font-serif italic text-stone-800">Article 5 — Paiement</h2>
            <p className="mt-3">
              Le paiement s\'effectue de manière sécurisée par Stripe, système de paiement certifié PCI-DSS. Les modalités de paiement acceptées sont indiquées à l\'écran au moment de la commande.
            </p>
            <p className="mt-3">
              CANDLE ne stocke aucune donnée de carte bancaire. Toutes les transactions sont traitées et sécurisées par Stripe, dont la politique de confidentialité est disponible à l\'adresse https://stripe.com/privacy.
            </p>
            <p className="mt-3">
              La commande est émise sous réserve de validation bancaire. En cas de refus de paiement, CANDLE se réserve le droit d\'annuler la commande sans obligation de livraison.
            </p>
          </section>

          {/* Art. 6 — Livraison */}
          <section>
            <h2 className="text-xl font-serif italic text-stone-800">Article 6 — Livraison</h2>
            <p className="mt-3">
              Les produits sont expédiés depuis la France métropolitaine. Sauf mention contraire au moment de l\'achat, la livraison est offerte dès 59,90 € d\'achat.
            </p>
            <p className="mt-3">
              Le délai de livraison estimé est de 7 jours ouvrés à compter de la validation de la commande. Ce délai est indicatif et peut être allongé en période de forte demande, de jours fériés ou de force majeure.
            </p>
            <p className="mt-3">
              Le client est prévenu par e-mail dès que son colis est expédié, avec les informations de suivi. En cas de livraison impossible (adresse incorrecte, réceptionnaire absent, etc.), des frais de reprise pourront être facturés au client.
            </p>
          </section>

          {/* Art. 7 — Retours et droits de rétractation */}
          <section>
            <h2 className="text-xl font-serif italic text-stone-800">Article 7 — Droits de rétractation et retours</h2>
            <p className="mt-3">
              Conformément aux articles L. 221-18 et suivants du Code de la consommation, le client qui achète à distance bénéficie d\'un droit de rétractation de 14 jours calendaires à compter de la réception du produit (ou de la preuve de livraison, selon le plus tardif des deux). Aucune justification n\'est requise pour exercer ce droit.
            </p>
            <p className="mt-3">
              Pour exercer son droit de rétractation, le client doit :
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Contacter CANDLE à l\'adresse contact@candle-jewelry.fr en précisant son numéro de commande ;</li>
              <li>Renvoyer le produit dans son emballage d\'origine, intact et non allumé.</li>
            </ul>
            <p className="mt-3">
              Le remboursement est effectué sous 14 jours à compter de la réception du produit retourné et de sa vérification. Les frais de retour sont à la charge du client, sauf si CANDLE accepte de les prendre en charge.
            </p>
            <p className="mt-3">
              <strong>Exceptions :</strong> le droit de rétractation ne s\'applique pas aux produits personnalisés (gravure du bijou) dès lors qu\'ils ont été réalisés sur mesure, ni aux produits ayant été allumés ou détériorés.
            </p>
          </section>

          {/* Art. 8 — Garantie */}
          <section>
            <h2 className="text-xl font-serif italic text-stone-800">Article 8 — Garantie et conformité</h2>
            <p className="mt-3">
              CANDLE garantit que les produits vendus sont conformes aux descriptions données sur le Site. En cas de vice caché, le client peut se prévaloir des garanties légales prévues par les articles 1641 et suivants du Code civil.
            </p>
            <p className="mt-3">
              La garantie commerciale de CANDLE est de 2 ans à compter de la livraison pour tout défaut de fabrication. Pour bénéficier de cette garantie, le client doit contacter le service client avec la preuve d\'achat (e-mail de confirmation ou facture).
            </p>
          </section>

          {/* Art. 9 — Responsabilité */}
          <section>
            <h2 className="text-xl font-serif italic text-stone-800">Article 9 — Responsabilité</h2>
            <p className="mt-3">
              CANDLE ne saurait être tenue responsable des dommages direct ou indirect résultant d\'une panne ou d\'une indisponibilité du Site, d\'un virus, d\'une cyberattaque ou de toute autre cause indépendante de sa volonté.
            </p>
            <p className="mt-3">
              CANDLE s\'engage à mettre en œuvre tous les moyens raisonables pour assurer la sécurité des transactions et la confidentialité des données clients.
            </p>
          </section>

          {/* Art. 10 — Litiges */}
          <section>
            <h2 className="text-xl font-serif italic text-stone-800">Article 10 — Litiges</h2>
            <p className="mt-3">
              Tout litige relatif à l\'interprétation, l\'exécution ou la résolution des présentes CGV sera soumis au droit français. En cas de différend, les parties s\'engagent à rechercher une solution amiable avant tout recours judiciaire.
            </p>
            <p className="mt-3">
              À défaut d\'accord amiable, les tribunaux compétents seront ceux du siège social de CANDLE.
            </p>
          </section>

          {/* Art. 11 — Modification */}
          <section>
            <h2 className="text-xl font-serif italic text-stone-800">Article 11 — Modification des CGV</h2>
            <p className="mt-3">
              CANDLE se réserve le droit de modifier les présentes CGV à tout moment pour les adapter aux évolutions légales, techniques ou commerciales. Les modifications sont publiées sur le Site. En continuant à utiliser le Site après modification, le client accepte les CGV mises à jour.
            </p>
          </section>

          {/* Contact */}
          <section className="border-t border-stone-200 pt-8">
            <h2 className="text-xl font-serif italic text-stone-800">Contact</h2>
            <p className="mt-3">
              Pour toute question relative à ces CGV ou à vos commandes :{' '}
              <a href="mailto:contact@candle-jewelry.fr" className="text-amber-700 hover:text-amber-600 underline underline-offset-2">
                contact@candle-jewelry.fr
              </a>
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
