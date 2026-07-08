export type Ligue =
  | 'Premier League'
  | 'La Liga'
  | 'Bundesliga'
  | 'Serie A'
  | 'Ligue 1'
  | 'Sélections Nationales'
  | 'Autres'
  | 'Rétro'

export type Taille = 'S' | 'M' | 'L' | 'XL' | 'XXL'

export interface Jersey {
  id: number
  equipe: string
  ligue: Ligue
  saison: string
  type: 'Domicile' | 'Extérieur' | 'Third'
  prix: number
  /** URL directe de la photo (Yupoo). `null` tant qu'aucune vraie photo n'est renseignée. */
  image: string | null
}

export type Flocage =
  | { type: 'aucun' }
  | { type: 'numero'; numero: string }
  | { type: 'nom_numero'; nom: string; numero: string }

export interface CartItem {
  cartId: string
  jerseyId: number
  equipe: string
  image: string | null
  flocage: Flocage
  taille: Taille
  quantite: number
  prix: number
}

export function formatFlocage(flocage: Flocage): string {
  switch (flocage.type) {
    case 'aucun':
      return 'Sans flocage'
    case 'numero':
      return `Numéro ${flocage.numero}`
    case 'nom_numero':
      return `${flocage.nom.toUpperCase()} + ${flocage.numero}`
  }
}
