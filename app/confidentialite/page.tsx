export const metadata = {
  title: 'Confidentialité — CANDLE',
  description: 'Politique de confidentialité de CANDLE — Bougie Bijou de Grasse. Vos données personnelles, droit à l\'oubli, cookies et RGPD.',
}

export default function Confidentialite() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="bg-stone-900 text-stone-100 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light">Politique de Confidentialité</h1>
          <p className="text-stone-400 mt-4 max-w-xl mx-auto text-lg">
            Ce que nous faisons de vos données personnelles, et comment les protéger.
          </p>
        </div>
      </section>

      {/* Corps */}
      <section className="py-16 px-4 bg-white max-w-3xl mx-auto">
        <article className="space-y-10 text-stone-600 leading-relaxed">

          {/* Introduction */}
          <section>
            <h2 className="text-xl font-serif italic text-stone-800">Nos engagements</h2>
            <p className="mt-3">
              La société CANDLE est soucieuse de la confidentialité de vos données personnelles. La présente politique de confidentialité explique comment nous collectons, utilisons, stockons et partageons vos informations, en conformité avec le Règlement Général sur la Protection des Données (RGPD — UE 2016/679) et la loi Informatique et Libertés modifiée du 6 janvier 1978.
            </p>
          </section>

          {/* Collecte */}
          <section>
            <h2 className="text-xl font-serif italic text-stone-800">1. Données que nous collectons</h2>
            <p className="mt-3">
              Lors de votre navigation sur le Site ou lors d\'une commande, nous pouvons collecter :
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li><strong>Données d\'identification :</strong> nom, prénom, adresse e-mail, numéro de téléphone (uniquement si vous le fournissez).</li>
              <li><strong>Données de livraison :</strong> adresse postale complète, code postal, ville, pays.</li>
              <li><strong>Données de transaction :</strong> montant de la commande, produits commandés, mode de paiement (sans stockage des données bancaires), date d\'achat.</li>
              <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées, temps passé, origine des visites (via cookies et outils analytiques).</li>
            </ul>
          </section>

          {/* Finalité */}
          <section>
            <h2 className="text-xl font-serif italic text-stone-800">2. Pourquoi nous les collectons</h2>
            <p className="mt-3">
              Vos données sont utilisées pour les finalités suivantes :
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Traitement et exécution de votre commande (livraison, facturation).</li>
              <li>Gestion de votre compte client et de vos préférences (gravure du bijou).</li>
              <li>Réponse à vos demandes de service client et prévention de la fraude.</li>
              <li>Amélioration du Site et analyse de l\'audience (Google Analytics, cookies).</li>
              <li>Envoi d\'e-mails de confirmation, de suivi de commande ou de newsletters (si consentement exprès obtenu).</li>
            </ul>
          </section>

          {/* Base légale */}
          <section>
            <h2 className="text-xl font-serif italic text-stone-800">3. Base légale du traitement</h2>
            <p className="mt-3">
              Le traitement de vos données repose sur :
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li><strong>Exécution d\'une mission d\'intérêt public ou exécution d\'un contrat</strong> (article 6.1.b du RGPD) — pour le traitement de commandes.</li>
              <li><strong>Intérêt légitime</strong> (article 6.1.f du RGPD) — pour l\'analyse de l\'audience et l\'amélioration du Site.</li>
              <li><strong>Consentement</strong> (article 6.1.a du RGPD) — pour l\'envoi de newsletters et la personnalisation du contenu.</li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-xl font-serif italic text-stone-800">4. Cookies et traceurs</h2>
            <p className="mt-3">
              Le Site peut utiliser des cookies (fichiers déposés sur votre terminal) pour assurer son fonctionnement, mesurer l\'audience ou personnaliser le contenu.
            </p>
            <p className="mt-3">
              Conformément à la loi Informatique et Libertés, nous nous engageons à obtenir votre consentement préalable avant de déposer des cookies non strictement nécessaires. Vous pouvez à tout moment modifier vos préférences via le bandeau de gestion des cookies présent sur le Site.
            </p>
            <p className="mt-3">
              Les cookies utilisés sont notamment :
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li><strong>Cookies strictement nécessaires</strong> : session, panier, CSRF (dépôts sans consentement).</li>
              <li><strong>Cookies analytiques :</strong> Google Analytics (mesure d\'audience, anonymisation de l\'adresse IP).</li>
              <li><strong>Cookies de personnalisation :</strong> préférences de langue, thème.</li>
            </ul>
            <p className="mt-3">
              Vous pouvez configurer votre navigateur pour refuser les cookies. Notez que certaines fonctionnalités du Site peuvent être affectées.
            </p>
          </section>

          {/* Conservation */}
          <section>
            <h2 className="text-xl font-serif italic text-stone-800">5. Durée de conservation</h2>
            <p className="mt-3">
              Vos données sont conservées pour une durée nécessaire à la finalité pour laquelle elles ont été collectées :
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Données de commande : 5 ans (obligation légale comptable et fiscale — article L. 123-22 du Code de commerce).</li>
              <li>Données de newsletter : tant que votre consentement est valide, avec possibilité de désabonnement à tout moment.</li>
              <li>Données de navigation (analytics) : 14 mois maximum (paramètre par défaut de Google Analytics).</li>
              <li>Données de compte : tant que votre compte est actif, avec suppression sur demande.</li>
            </ul>
          </section>

          {/* Partage */}
          <section>
            <h2 className="text-xl font-serif italic text-stone-800">6. Partage et transmission de données</h2>
            <p className="mt-3">
              Vos données ne sont pas vendues ni partagées avec des tiers à des fins commerciales. Elles peuvent être transmises à nos sous-traitants Techniques (hébergeur Vercel, prestataire Stripe pour le paiement, prestataire de livraison) qui s\'engagent à les utiliser uniquement pour les services commandés par CANDLE, conformément à des contrats de traitement de données (DPA).
            </p>
            <p className="mt-3">
              En cas de transfert de données hors de l\'EEE, des garanties appropriées (clauses contractuelles types, accord européen) sont mises en place.
            </p>
          </section>

          {/* Droits */}
          <section>
            <h2 className="text-xl font-serif italic text-stone-800">7. Vos droits</h2>
            <p className="mt-3">
              Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li><strong>Droit d\'accès</strong> : obtenir confirmation que vos données sont traitées et recevoir une copie.</li>
              <li><strong>Droit de rectification</strong> : corriger des données inexactes ou incomplètes.</li>
              <li><strong>Droit à l\'effacement (« droit à l\'oubli »)</strong> : demander la suppression de vos données, sous réserve des obligations légales de conservation.</li>
              <li><strong>Droit à la limitation du traitement</strong> : restreindre le traitement dans certains cas.</li>
              <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré et lisible, et les transmettre à un tiers.</li>
              <li><strong>Droit d\'opposition</strong> : s\'opposer au traitement, notamment pour motif légitime.</li>
              <li><strong>Droit de retirer votre consentement</strong> à tout moment, pour les traitements fondés sur ce consentement.</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, écrivez-nous à{' '}
              <a href="mailto:contact@candle-jewelry.fr" className="text-amber-700 hover:text-amber-600 underline underline-offset-2">
                contact@candle-jewelry.fr
              </a>. Nous répondrons sous un délai de 30 jours.
            </p>
            <p className="mt-3">
              Vous avez également le droit de déposer une réclamation auprès de la Commission Nationale de l\'Informatique et des Libertés (CNIL) — <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-600 underline underline-offset-2">cnil.fr</a>.
            </p>
          </section>

          {/* Sécurité */}
          <section>
            <h2 className="text-xl font-serif italic text-stone-800">8. Sécurité des données</h2>
            <p className="mt-3">
              CANDLE met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre l\'accès non autorisé, la perte, la distorsion ou la divulgation (chiffrement HTTPS, mots de passe, contrôle d\'accès, sauvegardes régulières).
            </p>
            <p className="mt-3">
              Cependant, aucun système n\'est immunisé contre les risques. En cas de violation de données susceptible d\'engendrer un risque pour vos droits, nous vous informerons dans les meilleurs délais, conformément à l\'article 34 du RGPD.
            </p>
          </section>

          {/* Contact DPO / responsable */}
          <section className="border-t border-stone-200 pt-8">
            <h2 className="text-xl font-serif italic text-stone-800">9. Contact du responsable de traitement</h2>
            <p className="mt-3">
              Société CANDLE — Responsable de traitement des données personnelles.
            </p>
            <p className="mt-3">
              Adresse e-mail :{' '}
              <a href="mailto:contact@candle-jewelry.fr" className="text-amber-700 hover:text-amber-600 underline underline-offset-2">
                contact@candle-jewelry.fr
              </a>
            </p>
            <p className="mt-3">
              Dernière mise à jour de la présente politique : septembre 2026.
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
