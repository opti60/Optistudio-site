'use client'

import type { Ligue } from '@/components/maillots/types'

export function LeagueFilter({
  ligues,
  active,
  onSelect,
}: {
  ligues: Ligue[]
  active: Ligue | 'Toutes'
  onSelect: (ligue: Ligue | 'Toutes') => void
}) {
  const options: (Ligue | 'Toutes')[] = ['Toutes', ...ligues]

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onSelect(option)}
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
            active === option
              ? 'border-sky-500 bg-sky-500 text-white'
              : 'border-slate-200 bg-white text-slate-600 hover:border-sky-300'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
