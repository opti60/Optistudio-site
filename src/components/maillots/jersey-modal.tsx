'use client'

import { useEffect, useMemo, useState } from 'react'
import { Shirt, X } from 'lucide-react'

import type { Flocage, Jersey, Taille } from '@/components/maillots/types'

const TAILLES: Taille[] = ['S', 'M', 'L', 'XL', 'XXL']

type FlocageType = Flocage['type']

export function JerseyModal({
  jersey,
  onClose,
  onAddToCart,
}: {
  jersey: Jersey
  onClose: () => void
  onAddToCart: (flocage: Flocage, taille: Taille) => void
}) {
  const [flocageType, setFlocageType] = useState<FlocageType>('aucun')
  const [nom, setNom] = useState('')
  const [numero, setNumero] = useState('')
  const [taille, setTaille] = useState<Taille>('M')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const flocage: Flocage = useMemo(() => {
    if (flocageType === 'aucun') return { type: 'aucun' }
    if (flocageType === 'numero') return { type: 'numero', numero }
    return { type: 'nom_numero', nom, numero }
  }, [flocageType, nom, numero])

  function handleSubmit() {
    if (flocageType === 'numero' && !numero.trim()) {
      setError('Merci de renseigner un numéro (1-99).')
      return
    }
    if (flocageType === 'nom_numero' && (!nom.trim() || !numero.trim())) {
      setError('Merci de renseigner un nom et un numéro.')
      return
    }
    setError(null)
    onAddToCart(flocage, taille)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-lg flex-col overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-1.5 text-slate-600 shadow hover:bg-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="aspect-square w-full bg-slate-100">
          {jersey.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={jersey.image}
              alt={`Maillot ${jersey.equipe} ${jersey.saison}`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-sky-500 to-blue-700 text-white">
              <Shirt className="h-20 w-20 opacity-90" strokeWidth={1.5} />
              <span className="text-sm font-medium opacity-90">Photo à venir</span>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-5 p-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-sky-600">
              {jersey.ligue} · {jersey.saison} · {jersey.type}
            </span>
            <h2 className="text-xl font-bold text-slate-900">{jersey.equipe}</h2>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold text-slate-700">Flocage (gratuit)</p>
            <div className="grid grid-cols-3 gap-2">
              {(
                [
                  { value: 'aucun', label: 'Sans flocage' },
                  { value: 'numero', label: 'Numéro seul' },
                  { value: 'nom_numero', label: 'Nom + Numéro' },
                ] as { value: FlocageType; label: string }[]
              ).map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFlocageType(option.value)}
                  className={`rounded-xl border px-2 py-2.5 text-xs font-semibold transition-colors ${
                    flocageType === option.value
                      ? 'border-sky-500 bg-sky-500 text-white'
                      : 'border-slate-200 text-slate-600 hover:border-sky-300'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {flocageType !== 'aucun' && (
              <div className="mt-3 flex gap-3">
                {flocageType === 'nom_numero' && (
                  <input
                    type="text"
                    maxLength={20}
                    placeholder="Nom (20 caractères max)"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    className="h-11 flex-1 rounded-xl border border-slate-200 px-3 text-sm focus:border-sky-400 focus:outline-none"
                  />
                )}
                <input
                  type="number"
                  min={1}
                  max={99}
                  placeholder="N°"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                  className="h-11 w-24 rounded-xl border border-slate-200 px-3 text-sm focus:border-sky-400 focus:outline-none"
                />
              </div>
            )}
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold text-slate-700">Taille (gratuit)</p>
            <div className="flex flex-wrap gap-2">
              {TAILLES.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTaille(t)}
                  className={`h-11 w-14 rounded-xl border text-sm font-semibold transition-colors ${
                    taille === t
                      ? 'border-sky-500 bg-sky-500 text-white'
                      : 'border-slate-200 text-slate-600 hover:border-sky-300'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {error && <p className="text-sm font-medium text-red-500">{error}</p>}

          <button
            type="button"
            onClick={handleSubmit}
            className="h-13 rounded-full bg-sky-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-500/30 transition-colors hover:bg-sky-600"
          >
            Ajouter au panier — {jersey.prix}€
          </button>
        </div>
      </div>
    </div>
  )
}
