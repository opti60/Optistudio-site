'use client'

import { Shirt } from 'lucide-react'

import type { Jersey } from '@/components/maillots/types'

const LIGUE_GRADIENTS: Record<Jersey['ligue'], string> = {
  'Premier League': 'from-purple-500 to-fuchsia-500',
  'La Liga': 'from-red-500 to-orange-500',
  Bundesliga: 'from-red-600 to-neutral-800',
  'Serie A': 'from-emerald-500 to-blue-600',
  'Ligue 1': 'from-sky-500 to-blue-700',
  'Sélections Nationales': 'from-amber-500 to-red-600',
  Autres: 'from-slate-500 to-slate-700',
  Rétro: 'from-yellow-600 to-amber-800',
}

export function JerseyCard({
  jersey,
  onSelect,
}: {
  jersey: Jersey
  onSelect: (jersey: Jersey) => void
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(jersey)}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-200/60"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
        {jersey.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={jersey.image}
            alt={`Maillot ${jersey.equipe} ${jersey.saison}`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div
            className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br ${LIGUE_GRADIENTS[jersey.ligue]} text-white`}
          >
            <Shirt className="h-14 w-14 opacity-90" strokeWidth={1.5} />
            <span className="text-xs font-medium opacity-90">Photo à venir</span>
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-slate-700 shadow-sm">
          {jersey.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-1 p-4">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-sky-600">
          {jersey.ligue} · {jersey.saison}
        </span>
        <h3 className="text-base font-bold leading-snug text-slate-900">
          {jersey.equipe}
        </h3>
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-lg font-extrabold text-slate-900">
            {jersey.prix}€
          </span>
          <span className="rounded-full bg-sky-500 px-3 py-1.5 text-xs font-semibold text-white transition-colors group-hover:bg-sky-600">
            Ajouter au panier
          </span>
        </div>
      </div>
    </button>
  )
}
