export interface ProcessStep {
  number: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Analyse',
    description:
      "Nous étudions votre activité, vos objectifs et vos processus pour identifier les leviers de croissance.",
  },
  {
    number: '02',
    title: 'Stratégie',
    description:
      'Nous définissons une feuille de route claire : design, technologies et automatisations adaptées.',
  },
  {
    number: '03',
    title: 'Développement',
    description:
      'Nos experts conçoivent votre site et vos agents IA avec une exigence de qualité irréprochable.',
  },
  {
    number: '04',
    title: 'Déploiement',
    description:
      'Mise en ligne sécurisée, tests approfondis et optimisation des performances avant lancement.',
  },
  {
    number: '05',
    title: 'Suivi',
    description:
      'Un accompagnement continu pour faire évoluer votre site et vos automatisations dans le temps.',
  },
]
