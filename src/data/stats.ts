import { Clock, TrendingDown, Smile, Gauge, type LucideIcon } from 'lucide-react'

export interface Stat {
  icon: LucideIcon
  value: string
  label: string
}

export const stats: Stat[] = [
  { icon: Clock, value: '+20h', label: 'Temps gagné par semaine' },
  { icon: TrendingDown, value: '-70%', label: 'Réduction des tâches répétitives' },
  { icon: Smile, value: '98%', label: 'Satisfaction client' },
  { icon: Gauge, value: '99+', label: 'Score de performance' },
]
