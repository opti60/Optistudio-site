export interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Camille Rousseau',
    role: 'Fondatrice',
    company: 'Aurea Finance',
    quote:
      "Opticode a transformé notre présence en ligne et automatisé une grande partie de notre relation client. Un vrai gain de temps chaque semaine.",
    initials: 'CR',
  },
  {
    name: 'Julien Fabre',
    role: 'Directeur Général',
    company: 'Nova Immobilier',
    quote:
      "L'agent IA qualifie nos prospects avant même que notre équipe intervienne. Notre taux de conversion a nettement progressé.",
    initials: 'JF',
  },
  {
    name: 'Léa Moreau',
    role: 'Responsable Marketing',
    company: 'Atelier Nord',
    quote:
      'Un site magnifique, livré rapidement, et une automatisation des devis qui nous fait gagner un temps précieux.',
    initials: 'LM',
  },
  {
    name: 'Thomas Girard',
    role: 'CEO',
    company: 'Cabinet Vertex',
    quote:
      "Le niveau de finition est impressionnant. On sent une vraie expertise, aussi bien sur le design que sur la technique.",
    initials: 'TG',
  },
]
