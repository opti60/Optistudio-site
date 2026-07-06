export interface PortfolioProject {
  name: string
  category: string
  description: string
  technologies: string[]
  gradient: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    name: 'Aurea Finance',
    category: 'Application web',
    description:
      'Plateforme de gestion patrimoniale avec tableaux de bord temps réel et automatisation des rapports clients.',
    technologies: ['Next.js', 'TypeScript', 'IA'],
    gradient: 'from-blue-500/30 via-indigo-500/20 to-transparent',
  },
  {
    name: 'Lumière Beauté',
    category: 'E-commerce',
    description:
      'Boutique en ligne premium avec agent IA de recommandation produit et devis automatiques.',
    technologies: ['Next.js', 'Stripe', 'Agents IA'],
    gradient: 'from-violet-500/30 via-fuchsia-500/20 to-transparent',
  },
  {
    name: 'Cabinet Vertex',
    category: 'Site vitrine',
    description:
      'Site institutionnel haut de gamme avec prise de rendez-vous automatisée et CRM intégré.',
    technologies: ['Next.js', 'CRM', 'SEO'],
    gradient: 'from-cyan-500/30 via-blue-500/20 to-transparent',
  },
  {
    name: 'Nova Immobilier',
    category: 'Application web',
    description:
      'Plateforme de gestion de biens avec chatbot IA de qualification des prospects 24/7.',
    technologies: ['React', 'Chatbot IA', 'CRM'],
    gradient: 'from-emerald-500/30 via-teal-500/20 to-transparent',
  },
  {
    name: 'Atelier Nord',
    category: 'Site e-commerce',
    description:
      'Boutique de mobilier design avec automatisation des devis sur mesure et suivi commercial.',
    technologies: ['Next.js', 'Automatisation', 'SEO'],
    gradient: 'from-orange-500/30 via-amber-500/20 to-transparent',
  },
  {
    name: 'Alto Santé',
    category: 'Application web',
    description:
      'Portail patients avec agent IA de prise de rendez-vous et gestion intelligente des dossiers.',
    technologies: ['Next.js', 'Agents IA', 'Sécurité'],
    gradient: 'from-rose-500/30 via-pink-500/20 to-transparent',
  },
]
