export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'Combien de temps faut-il pour créer mon site ?',
    answer:
      "Selon la complexité du projet, comptez généralement entre 2 et 6 semaines, de l'analyse initiale au déploiement final.",
  },
  {
    question: 'Comment fonctionnent les agents IA que vous mettez en place ?',
    answer:
      "Nos agents IA sont configurés selon vos processus métier : ils lisent vos emails, qualifient vos prospects, génèrent des devis ou prennent des rendez-vous, en s'intégrant à vos outils existants.",
  },
  {
    question: 'Puis-je faire évoluer mon site après le lancement ?',
    answer:
      'Oui. Chaque projet est pensé pour évoluer, et nous proposons un accompagnement continu pour ajouter de nouvelles fonctionnalités au fil du temps.',
  },
  {
    question: 'Quel est le coût de vos prestations ?',
    answer:
      "Chaque projet étant sur mesure, nous établissons un devis personnalisé après avoir compris vos besoins. Demandez un devis gratuit et sans engagement.",
  },
  {
    question: 'Proposez-vous un support après la mise en ligne ?',
    answer:
      'Oui, nous assurons la maintenance, la sécurité et le suivi de performance de votre site sur le long terme.',
  },
  {
    question: 'Mes données sont-elles sécurisées ?',
    answer:
      'La sécurité est une priorité : hébergement fiable, bonnes pratiques de développement et confidentialité des données de vos clients.',
  },
]
