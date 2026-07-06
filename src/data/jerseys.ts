import type { Jersey, Ligue } from '@/components/maillots/types'

export const LIGUES: Ligue[] = [
  'Premier League',
  'La Liga',
  'Bundesliga',
  'Serie A',
  'Ligue 1',
]

const SAISON = '2024-25'
const PRIX = 20

/**
 * `image: null` = pas encore de vraie photo Yupoo renseignée.
 * Remplace par l'URL directe (bomandi.x.yupoo.com / qiuhuangty.x.yupoo.com)
 * dès qu'elle est disponible — le reste du catalogue s'adapte automatiquement.
 */
export const maillots: Jersey[] = [
  { id: 1, equipe: 'Manchester City', ligue: 'Premier League', saison: SAISON, type: 'Domicile', prix: PRIX, image: null },
  { id: 2, equipe: 'Manchester City', ligue: 'Premier League', saison: SAISON, type: 'Extérieur', prix: PRIX, image: null },
  { id: 3, equipe: 'Manchester United', ligue: 'Premier League', saison: SAISON, type: 'Domicile', prix: PRIX, image: null },
  { id: 4, equipe: 'Liverpool', ligue: 'Premier League', saison: SAISON, type: 'Domicile', prix: PRIX, image: null },
  { id: 5, equipe: 'Arsenal', ligue: 'Premier League', saison: SAISON, type: 'Domicile', prix: PRIX, image: null },
  { id: 6, equipe: 'Chelsea', ligue: 'Premier League', saison: SAISON, type: 'Domicile', prix: PRIX, image: null },
  { id: 7, equipe: 'Tottenham Hotspur', ligue: 'Premier League', saison: SAISON, type: 'Domicile', prix: PRIX, image: null },
  { id: 8, equipe: 'Real Madrid', ligue: 'La Liga', saison: SAISON, type: 'Domicile', prix: PRIX, image: null },
  { id: 9, equipe: 'Real Madrid', ligue: 'La Liga', saison: SAISON, type: 'Extérieur', prix: PRIX, image: null },
  { id: 10, equipe: 'FC Barcelone', ligue: 'La Liga', saison: SAISON, type: 'Domicile', prix: PRIX, image: null },
  { id: 11, equipe: 'FC Barcelone', ligue: 'La Liga', saison: SAISON, type: 'Extérieur', prix: PRIX, image: null },
  { id: 12, equipe: 'Atlético Madrid', ligue: 'La Liga', saison: SAISON, type: 'Domicile', prix: PRIX, image: null },
  { id: 13, equipe: 'Bayern Munich', ligue: 'Bundesliga', saison: SAISON, type: 'Domicile', prix: PRIX, image: null },
  { id: 14, equipe: 'Bayern Munich', ligue: 'Bundesliga', saison: SAISON, type: 'Extérieur', prix: PRIX, image: null },
  { id: 15, equipe: 'Borussia Dortmund', ligue: 'Bundesliga', saison: SAISON, type: 'Domicile', prix: PRIX, image: null },
  { id: 16, equipe: 'Juventus', ligue: 'Serie A', saison: SAISON, type: 'Domicile', prix: PRIX, image: null },
  { id: 17, equipe: 'AC Milan', ligue: 'Serie A', saison: SAISON, type: 'Domicile', prix: PRIX, image: null },
  { id: 18, equipe: 'Inter Milan', ligue: 'Serie A', saison: SAISON, type: 'Domicile', prix: PRIX, image: null },
  { id: 19, equipe: 'SSC Napoli', ligue: 'Serie A', saison: SAISON, type: 'Domicile', prix: PRIX, image: null },
  { id: 20, equipe: 'Paris Saint-Germain', ligue: 'Ligue 1', saison: SAISON, type: 'Domicile', prix: PRIX, image: null },
  { id: 21, equipe: 'Paris Saint-Germain', ligue: 'Ligue 1', saison: SAISON, type: 'Extérieur', prix: PRIX, image: null },
  { id: 22, equipe: 'Olympique de Marseille', ligue: 'Ligue 1', saison: SAISON, type: 'Domicile', prix: PRIX, image: null },
  { id: 23, equipe: 'Olympique Lyonnais', ligue: 'Ligue 1', saison: SAISON, type: 'Domicile', prix: PRIX, image: null },
  { id: 24, equipe: 'AS Monaco', ligue: 'Ligue 1', saison: SAISON, type: 'Domicile', prix: PRIX, image: null },
]
