'use client'

import { Minus, Plus, Shirt, Trash2, X } from 'lucide-react'

import { formatFlocage, type CartItem } from '@/components/maillots/types'

export function CartPanel({
  cart,
  onClose,
  onUpdateQuantite,
  onRemove,
  onValidate,
}: {
  cart: CartItem[]
  onClose: () => void
  onUpdateQuantite: (cartId: string, quantite: number) => void
  onRemove: (cartId: string) => void
  onValidate: () => void
}) {
  const total = cart.reduce((sum, item) => sum + item.prix * item.quantite, 0)

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/60 backdrop-blur-sm" onClick={onClose}>
      <div
        className="flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-100 p-5">
          <h2 className="text-lg font-bold text-slate-900">Mon panier</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="rounded-full p-1.5 text-slate-500 hover:bg-slate-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {cart.length === 0 ? (
            <p className="mt-10 text-center text-sm text-slate-500">
              Ton panier est vide. Ajoute un maillot pour commencer !
            </p>
          ) : (
            <ul className="flex flex-col gap-4">
              {cart.map((item) => (
                <li
                  key={item.cartId}
                  className="flex gap-3 rounded-xl border border-slate-100 p-3"
                >
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                    {item.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={item.image} alt={item.equipe} className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sky-500 to-blue-700 text-white">
                        <Shirt className="h-7 w-7" strokeWidth={1.5} />
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col gap-0.5">
                    <p className="text-sm font-bold text-slate-900">{item.equipe}</p>
                    <p className="text-xs text-slate-500">{formatFlocage(item.flocage)}</p>
                    <p className="text-xs text-slate-500">Taille: {item.taille}</p>

                    <div className="mt-1 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantite(item.cartId, item.quantite - 1)}
                          className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-4 text-center text-sm font-semibold">{item.quantite}</span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantite(item.cartId, item.quantite + 1)}
                          className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="text-sm font-bold text-slate-900">
                        {item.prix * item.quantite}€
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onRemove(item.cartId)}
                    aria-label="Supprimer"
                    className="h-fit rounded-full p-1.5 text-slate-400 hover:bg-red-50 hover:text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-slate-100 p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-600">Total</span>
            <span className="text-xl font-extrabold text-slate-900">{total}€</span>
          </div>
          <button
            type="button"
            disabled={cart.length === 0}
            onClick={onValidate}
            className="w-full rounded-full bg-emerald-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/30 transition-colors hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Valider le panier via WhatsApp
          </button>
        </div>
      </div>
    </div>
  )
}
