import {
  Mail,
  FileText,
  CalendarCheck,
  Filter,
  UserCog,
  Sparkles,
  LineChart,
  BrainCircuit,
  type LucideIcon,
} from 'lucide-react'

export interface AutomationFeature {
  icon: LucideIcon
  title: string
  description: string
}

export const automationFeatures: AutomationFeature[] = [
  {
    icon: Mail,
    title: 'Réponse automatique aux emails',
    description: 'Vos emails sont triés, compris et répondus automatiquement, sans effort.',
  },
  {
    icon: FileText,
    title: 'Devis automatiques',
    description: 'Générez et envoyez des devis personnalisés en quelques secondes.',
  },
  {
    icon: CalendarCheck,
    title: 'Prise de rendez-vous',
    description: "Votre agenda se remplit seul grâce à un agent IA disponible en permanence.",
  },
  {
    icon: Filter,
    title: 'Qualification des prospects',
    description: 'Chaque prospect est analysé et qualifié avant même votre premier contact.',
  },
  {
    icon: UserCog,
    title: 'Gestion des clients',
    description: 'Suivi automatisé de vos clients, de la prise de contact à la fidélisation.',
  },
  {
    icon: Sparkles,
    title: 'Création de contenus',
    description: "Articles, posts et réponses générés par l'IA en cohérence avec votre marque.",
  },
  {
    icon: LineChart,
    title: 'Suivi commercial',
    description: 'Un pilotage précis de vos opportunités et de votre pipeline de vente.',
  },
  {
    icon: BrainCircuit,
    title: 'CRM intelligent',
    description: 'Toutes vos données clients centralisées et exploitées automatiquement.',
  },
]
