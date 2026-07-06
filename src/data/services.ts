import {
  Globe,
  ShoppingCart,
  AppWindow,
  Bot,
  Workflow,
  Users,
  MessageSquare,
  Wrench,
  Search,
  Server,
  type LucideIcon,
} from 'lucide-react'

export interface Service {
  icon: LucideIcon
  title: string
  description: string
}

export const services: Service[] = [
  {
    icon: Globe,
    title: 'Sites vitrines',
    description:
      'Des sites élégants et ultra-rapides qui reflètent le positionnement premium de votre marque.',
  },
  {
    icon: ShoppingCart,
    title: 'Sites e-commerce',
    description:
      'Des boutiques en ligne performantes, pensées pour convertir et fidéliser vos clients.',
  },
  {
    icon: AppWindow,
    title: 'Applications web',
    description:
      'Des plateformes sur mesure, robustes et évolutives, adaptées à vos process métier.',
  },
  {
    icon: Bot,
    title: 'Agents IA',
    description:
      'Des assistants intelligents qui travaillent pour vous 24/7 sur vos tâches répétitives.',
  },
  {
    icon: Workflow,
    title: "Automatisation d'entreprise",
    description:
      'Nous connectons vos outils et automatisons vos flux pour éliminer les tâches manuelles.',
  },
  {
    icon: Users,
    title: 'CRM',
    description:
      'Un CRM intelligent pour centraliser vos prospects, clients et opportunités commerciales.',
  },
  {
    icon: MessageSquare,
    title: 'Chatbots IA',
    description:
      'Des chatbots capables de répondre, qualifier et convertir vos visiteurs en clients.',
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    description:
      'Un suivi technique continu pour garantir sécurité, stabilité et disponibilité.',
  },
  {
    icon: Search,
    title: 'SEO',
    description:
      'Une stratégie de référencement pensée pour vous positionner durablement sur Google.',
  },
  {
    icon: Server,
    title: 'Hébergement',
    description:
      'Une infrastructure fiable et sécurisée, optimisée pour la vitesse et la disponibilité.',
  },
]
