import type { Jersey, Ligue } from '@/components/maillots/types'

export const LIGUES: Ligue[] = [
  'Premier League',
  'La Liga',
  'Bundesliga',
  'Serie A',
  'Ligue 1',
  'Sélections Nationales',
]

const CDM = 'Coupe du Monde 2026'

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

  { id: 25, equipe: 'France', ligue: 'Sélections Nationales', saison: CDM, type: 'Domicile', prix: PRIX, image: '/maillots/france-domicile.jpeg' },
  { id: 26, equipe: 'France', ligue: 'Sélections Nationales', saison: CDM, type: 'Extérieur', prix: PRIX, image: '/maillots/france-exterieur.jpeg' },
  { id: 27, equipe: 'Brésil', ligue: 'Sélections Nationales', saison: CDM, type: 'Domicile', prix: PRIX, image: '/maillots/bresil-domicile.jpeg' },
  { id: 28, equipe: 'Brésil', ligue: 'Sélections Nationales', saison: CDM, type: 'Extérieur', prix: PRIX, image: '/maillots/bresil-exterieur.jpeg' },
  { id: 29, equipe: 'Espagne', ligue: 'Sélections Nationales', saison: CDM, type: 'Domicile', prix: PRIX, image: '/maillots/espagne-domicile.jpeg' },
  { id: 30, equipe: 'Espagne', ligue: 'Sélections Nationales', saison: CDM, type: 'Extérieur', prix: PRIX, image: '/maillots/espagne-exterieur.jpeg' },
  { id: 31, equipe: 'Allemagne', ligue: 'Sélections Nationales', saison: CDM, type: 'Domicile', prix: PRIX, image: '/maillots/allemagne-domicile.jpeg' },
  { id: 32, equipe: 'Allemagne', ligue: 'Sélections Nationales', saison: CDM, type: 'Extérieur', prix: PRIX, image: '/maillots/allemagne-exterieur.jpeg' },
  { id: 33, equipe: 'Argentine', ligue: 'Sélections Nationales', saison: CDM, type: 'Domicile', prix: PRIX, image: '/maillots/argentine-domicile.jpeg' },
  { id: 34, equipe: 'Argentine', ligue: 'Sélections Nationales', saison: CDM, type: 'Extérieur', prix: PRIX, image: '/maillots/argentine-exterieur.jpeg' },
  { id: 35, equipe: 'Portugal', ligue: 'Sélections Nationales', saison: CDM, type: 'Domicile', prix: PRIX, image: '/maillots/portugal-domicile.jpeg' },
  { id: 36, equipe: 'Portugal', ligue: 'Sélections Nationales', saison: CDM, type: 'Extérieur', prix: PRIX, image: '/maillots/portugal-exterieur.jpeg' },
  { id: 37, equipe: 'Angleterre', ligue: 'Sélections Nationales', saison: CDM, type: 'Domicile', prix: PRIX, image: '/maillots/angleterre-domicile.jpeg' },
  { id: 38, equipe: 'Angleterre', ligue: 'Sélections Nationales', saison: CDM, type: 'Extérieur', prix: PRIX, image: '/maillots/angleterre-exterieur.jpeg' },
  { id: 39, equipe: 'Italie', ligue: 'Sélections Nationales', saison: CDM, type: 'Domicile', prix: PRIX, image: '/maillots/italie-domicile.jpeg' },
  { id: 40, equipe: 'Italie', ligue: 'Sélections Nationales', saison: CDM, type: 'Extérieur', prix: PRIX, image: '/maillots/italie-exterieur.jpeg' },
  { id: 41, equipe: 'Pays-Bas', ligue: 'Sélections Nationales', saison: CDM, type: 'Domicile', prix: PRIX, image: '/maillots/pays-bas-domicile.jpeg' },
  { id: 42, equipe: 'Pays-Bas', ligue: 'Sélections Nationales', saison: CDM, type: 'Extérieur', prix: PRIX, image: '/maillots/pays-bas-exterieur.jpeg' },
  { id: 43, equipe: 'Belgique', ligue: 'Sélections Nationales', saison: CDM, type: 'Domicile', prix: PRIX, image: '/maillots/belgique-domicile.jpeg' },
  { id: 44, equipe: 'Belgique', ligue: 'Sélections Nationales', saison: CDM, type: 'Extérieur', prix: PRIX, image: '/maillots/belgique-exterieur.jpeg' },
  { id: 45, equipe: 'Maroc', ligue: 'Sélections Nationales', saison: CDM, type: 'Domicile', prix: PRIX, image: '/maillots/maroc-domicile.jpeg' },
  { id: 46, equipe: 'Maroc', ligue: 'Sélections Nationales', saison: CDM, type: 'Extérieur', prix: PRIX, image: '/maillots/maroc-exterieur.jpeg' },
  { id: 47, equipe: 'Japon', ligue: 'Sélections Nationales', saison: CDM, type: 'Domicile', prix: PRIX, image: '/maillots/japon-domicile.jpeg' },
  { id: 48, equipe: 'Japon', ligue: 'Sélections Nationales', saison: CDM, type: 'Extérieur', prix: PRIX, image: '/maillots/japon-exterieur.jpeg' },
  { id: 49, equipe: 'Corée du Sud', ligue: 'Sélections Nationales', saison: CDM, type: 'Domicile', prix: PRIX, image: '/maillots/coree-du-sud-domicile.jpeg' },
  { id: 50, equipe: 'Corée du Sud', ligue: 'Sélections Nationales', saison: CDM, type: 'Extérieur', prix: PRIX, image: '/maillots/coree-du-sud-exterieur.jpeg' },
  { id: 51, equipe: 'États-Unis', ligue: 'Sélections Nationales', saison: CDM, type: 'Domicile', prix: PRIX, image: '/maillots/etats-unis-domicile.jpeg' },
  { id: 52, equipe: 'États-Unis', ligue: 'Sélections Nationales', saison: CDM, type: 'Extérieur', prix: PRIX, image: '/maillots/etats-unis-exterieur.jpeg' },
  { id: 53, equipe: 'Mexique', ligue: 'Sélections Nationales', saison: CDM, type: 'Domicile', prix: PRIX, image: '/maillots/mexique-domicile.jpeg' },
  { id: 54, equipe: 'Mexique', ligue: 'Sélections Nationales', saison: CDM, type: 'Extérieur', prix: PRIX, image: '/maillots/mexique-exterieur.jpeg' },
  { id: 55, equipe: 'Croatie', ligue: 'Sélections Nationales', saison: CDM, type: 'Domicile', prix: PRIX, image: '/maillots/croatie-domicile.jpeg' },
  { id: 56, equipe: 'Uruguay', ligue: 'Sélections Nationales', saison: CDM, type: 'Domicile', prix: PRIX, image: '/maillots/uruguay-domicile.jpeg' },
  { id: 57, equipe: 'Uruguay', ligue: 'Sélections Nationales', saison: CDM, type: 'Extérieur', prix: PRIX, image: '/maillots/uruguay-exterieur.jpeg' },
  { id: 58, equipe: 'Colombie', ligue: 'Sélections Nationales', saison: CDM, type: 'Domicile', prix: PRIX, image: '/maillots/colombie-domicile.jpeg' },
  { id: 59, equipe: 'Colombie', ligue: 'Sélections Nationales', saison: CDM, type: 'Extérieur', prix: PRIX, image: '/maillots/colombie-exterieur.jpeg' },
  { id: 60, equipe: 'Suisse', ligue: 'Sélections Nationales', saison: CDM, type: 'Domicile', prix: PRIX, image: '/maillots/suisse-domicile.jpeg' },
  { id: 61, equipe: 'Suisse', ligue: 'Sélections Nationales', saison: CDM, type: 'Extérieur', prix: PRIX, image: '/maillots/suisse-exterieur.jpeg' },
  { id: 62, equipe: 'Sénégal', ligue: 'Sélections Nationales', saison: CDM, type: 'Domicile', prix: PRIX, image: '/maillots/senegal-domicile.jpeg' },
  { id: 63, equipe: 'Sénégal', ligue: 'Sélections Nationales', saison: CDM, type: 'Extérieur', prix: PRIX, image: '/maillots/senegal-exterieur.jpeg' },
  { id: 64, equipe: 'Algérie', ligue: 'Sélections Nationales', saison: CDM, type: 'Domicile', prix: PRIX, image: '/maillots/algerie-domicile.jpeg' },
  { id: 65, equipe: 'Algérie', ligue: 'Sélections Nationales', saison: CDM, type: 'Extérieur', prix: PRIX, image: '/maillots/algerie-exterieur.jpeg' },
]
