import type { Metadata } from 'next'

import { LegalLayout } from '@/components/legal-layout'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité et protection des données du site Opticode.',
}

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalLayout title="Politique de confidentialité">
      <div>
        <h2>Données collectées</h2>
        <p>
          Lorsque vous utilisez notre formulaire de contact, nous collectons votre nom, votre
          entreprise, votre email, votre téléphone et le contenu de votre message, dans le seul
          but de répondre à votre demande de devis.
        </p>
      </div>

      <div>
        <h2>Utilisation des données</h2>
        <p>
          Ces données sont utilisées exclusivement pour vous recontacter et établir un devis
          personnalisé. Elles ne sont ni vendues ni transmises à des tiers à des fins
          commerciales.
        </p>
      </div>

      <div>
        <h2>Conservation</h2>
        <p>
          Vos données sont conservées pendant la durée nécessaire au traitement de votre
          demande, puis supprimées ou archivées conformément à la réglementation en vigueur.
        </p>
      </div>

      <div>
        <h2>Vos droits</h2>
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez
          d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Pour
          exercer ce droit, contactez-nous à contact@opticode.fr.
        </p>
      </div>

      <div>
        <h2>Cookies</h2>
        <p>
          Ce site peut utiliser des cookies strictement nécessaires à son fonctionnement ainsi
          que des cookies de mesure d&apos;audience, sous réserve de votre consentement.
        </p>
      </div>
    </LegalLayout>
  )
}
