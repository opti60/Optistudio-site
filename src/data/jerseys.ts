import type { Jersey, Ligue } from '@/components/maillots/types'

export const LIGUES: Ligue[] = [
  'Premier League',
  'La Liga',
  'Bundesliga',
  'Serie A',
  'Ligue 1',
]

const PRIX = 20

/**
 * Photos réelles récupérées depuis bomandi.x.yupoo.com / qiuhuangty.x.yupoo.com
 * et servies depuis /public/maillots (le CDN Yupoo bloque le hotlinking direct
 * hors de son propre domaine, d'où la copie locale).
 */
export const maillots: Jersey[] = [
  { id: 1, equipe: 'Manchester City', ligue: 'Premier League', saison: '2026-27', type: 'Domicile', prix: PRIX, image: '/maillots/manchester-city-domicile.jpeg' },
  { id: 2, equipe: 'Manchester City', ligue: 'Premier League', saison: '2026-27', type: 'Extérieur', prix: PRIX, image: '/maillots/manchester-city-exterieur.jpeg' },
  { id: 3, equipe: 'Manchester United', ligue: 'Premier League', saison: '2026-27', type: 'Domicile', prix: PRIX, image: '/maillots/manchester-united-domicile.jpeg' },
  { id: 4, equipe: 'Liverpool', ligue: 'Premier League', saison: '2026-27', type: 'Domicile', prix: PRIX, image: '/maillots/liverpool-domicile.jpeg' },
  { id: 5, equipe: 'Arsenal', ligue: 'Premier League', saison: '2026-27', type: 'Domicile', prix: PRIX, image: '/maillots/arsenal-domicile.jpeg' },
  { id: 6, equipe: 'Chelsea', ligue: 'Premier League', saison: '2026-27', type: 'Domicile', prix: PRIX, image: '/maillots/chelsea-domicile.jpeg' },
  { id: 7, equipe: 'Tottenham Hotspur', ligue: 'Premier League', saison: '2025-26', type: 'Domicile', prix: PRIX, image: '/maillots/tottenham-domicile.jpeg' },
  { id: 8, equipe: 'Real Madrid', ligue: 'La Liga', saison: '2026-27', type: 'Domicile', prix: PRIX, image: '/maillots/real-madrid-domicile.jpeg' },
  { id: 9, equipe: 'Real Madrid', ligue: 'La Liga', saison: '2026-27', type: 'Extérieur', prix: PRIX, image: '/maillots/real-madrid-exterieur.jpeg' },
  { id: 10, equipe: 'FC Barcelone', ligue: 'La Liga', saison: '2026-27', type: 'Domicile', prix: PRIX, image: '/maillots/barcelone-domicile.jpeg' },
  { id: 11, equipe: 'FC Barcelone', ligue: 'La Liga', saison: '2026-27', type: 'Extérieur', prix: PRIX, image: '/maillots/barcelone-exterieur.jpeg' },
  { id: 12, equipe: 'Atlético Madrid', ligue: 'La Liga', saison: '2025-26', type: 'Domicile', prix: PRIX, image: '/maillots/atletico-madrid-domicile.jpeg' },
  { id: 13, equipe: 'Bayern Munich', ligue: 'Bundesliga', saison: '2026-27', type: 'Domicile', prix: PRIX, image: '/maillots/bayern-munich-domicile.jpeg' },
  { id: 14, equipe: 'Bayern Munich', ligue: 'Bundesliga', saison: '2025-26', type: 'Extérieur', prix: PRIX, image: '/maillots/bayern-munich-exterieur.jpeg' },
  { id: 15, equipe: 'Borussia Dortmund', ligue: 'Bundesliga', saison: '2026-27', type: 'Domicile', prix: PRIX, image: '/maillots/dortmund-domicile.jpeg' },
  { id: 16, equipe: 'Juventus', ligue: 'Serie A', saison: '2025-26', type: 'Domicile', prix: PRIX, image: '/maillots/juventus-domicile.jpeg' },
  { id: 17, equipe: 'AC Milan', ligue: 'Serie A', saison: '2026-27', type: 'Domicile', prix: PRIX, image: '/maillots/ac-milan-domicile.jpeg' },
  { id: 18, equipe: 'Inter Milan', ligue: 'Serie A', saison: '2026-27', type: 'Domicile', prix: PRIX, image: '/maillots/inter-milan-domicile.jpeg' },
  { id: 19, equipe: 'SSC Napoli', ligue: 'Serie A', saison: '2025-26', type: 'Domicile', prix: PRIX, image: '/maillots/napoli-domicile.jpeg' },
  { id: 20, equipe: 'Paris Saint-Germain', ligue: 'Ligue 1', saison: '2026-27', type: 'Domicile', prix: PRIX, image: '/maillots/psg-domicile.jpeg' },
  { id: 21, equipe: 'Paris Saint-Germain', ligue: 'Ligue 1', saison: '2025-26', type: 'Extérieur', prix: PRIX, image: '/maillots/psg-exterieur.jpeg' },
  { id: 22, equipe: 'Olympique de Marseille', ligue: 'Ligue 1', saison: '2025-26', type: 'Domicile', prix: PRIX, image: '/maillots/marseille-domicile.jpeg' },
  { id: 23, equipe: 'Olympique Lyonnais', ligue: 'Ligue 1', saison: '2025-26', type: 'Domicile', prix: PRIX, image: '/maillots/lyon-domicile.jpeg' },
  { id: 24, equipe: 'AS Monaco', ligue: 'Ligue 1', saison: '2025-26', type: 'Extérieur', prix: PRIX, image: '/maillots/monaco-exterieur.jpeg' },
]
