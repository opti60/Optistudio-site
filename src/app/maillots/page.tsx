import type { Metadata } from 'next'

import { MaillotsApp } from '@/components/maillots/maillots-app'

export const metadata: Metadata = {
  title: 'Catalogue Maillots',
  description:
    'Catalogue de maillots de football avec flocage et taille au choix, commande directe via WhatsApp.',
}

export default function MaillotsPage() {
  return <MaillotsApp />
}
