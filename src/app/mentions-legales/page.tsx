import type { Metadata } from 'next'

import { LegalLayout } from '@/components/legal-layout'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site Opticode.',
}

export default function MentionsLegalesPage() {
  return (
    <LegalLayout title="Mentions légales">
      <div>
        <h2>Éditeur du site</h2>
        <p>
          Le site Opticode est édité par [Raison sociale de la société], [forme juridique],
          immatriculée sous le numéro SIRET [numéro SIRET], dont le siège social est situé à
          [adresse complète]. Directeur de la publication : [nom du responsable].
        </p>
      </div>

      <div>
        <h2>Hébergement</h2>
        <p>
          Le site est hébergé par [nom de l&apos;hébergeur], [adresse de l&apos;hébergeur].
        </p>
      </div>

      <div>
        <h2>Contact</h2>
        <p>
          Pour toute question relative au site, vous pouvez nous contacter à l&apos;adresse
          contact@opticode.fr.
        </p>
      </div>

      <div>
        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des contenus présents sur ce site (textes, images, logos, identité
          visuelle) est la propriété exclusive d&apos;Opticode, sauf mention contraire, et ne
          peut être reproduit sans autorisation préalable.
        </p>
      </div>
    </LegalLayout>
  )
}
