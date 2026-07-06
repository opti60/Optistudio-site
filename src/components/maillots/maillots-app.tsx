'use client'

import { useMemo, useState } from 'react'
import { Search, ShoppingCart } from 'lucide-react'

import { CartPanel } from '@/components/maillots/cart-panel'
import { JerseyCard } from '@/components/maillots/jersey-card'
import { JerseyModal } from '@/components/maillots/jersey-modal'
import { LeagueFilter } from '@/components/maillots/league-filter'
import type { CartItem, Flocage, Jersey, Ligue, Taille } from '@/components/maillots/types'
import { LIGUES, maillots } from '@/data/jerseys'
import { buildWhatsAppLink } from '@/lib/whatsapp'

export function MaillotsApp() {
  const [ligueActive, setLigueActive] = useState<Ligue | 'Toutes'>('Toutes')
  const [recherche, setRecherche] = useState('')
  const [jerseySelectionne, setJerseySelectionne] = useState<Jersey | null>(null)
  const [cart, setCart] = useState<CartItem[]>([])
  const [cartOuvert, setCartOuvert] = useState(false)

  const jerseysFiltres = useMemo(() => {
    return maillots.filter((jersey) => {
      const matchLigue = ligueActive === 'Toutes' || jersey.ligue === ligueActive
      const matchRecherche = jersey.equipe
        .toLowerCase()
        .includes(recherche.trim().toLowerCase())
      return matchLigue && matchRecherche
    })
  }, [ligueActive, recherche])

  const nombreArticles = cart.reduce((sum, item) => sum + item.quantite, 0)

  function handleAddToCart(flocage: Flocage, taille: Taille) {
    if (!jerseySelectionne) return
    const jersey = jerseySelectionne
    setCart((prev) => [
      ...prev,
      {
        cartId: `${jersey.id}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        jerseyId: jersey.id,
        equipe: `${jersey.equipe} (${jersey.saison})`,
        image: jersey.image,
        flocage,
        taille,
        quantite: 1,
        prix: jersey.prix,
      },
    ])
    setJerseySelectionne(null)
  }

  function handleUpdateQuantite(cartId: string, quantite: number) {
    if (quantite < 1) {
      setCart((prev) => prev.filter((item) => item.cartId !== cartId))
      return
    }
    setCart((prev) =>
      prev.map((item) => (item.cartId === cartId ? { ...item, quantite } : item))
    )
  }

  function handleRemove(cartId: string) {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId))
  }

  function handleValidate() {
    const link = buildWhatsAppLink(cart, window.location.origin)
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-sky-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
              ⚽ ZEROBENEFF
            </h1>
            <button
              type="button"
              onClick={() => setCartOuvert(true)}
              className="relative flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-sky-500/30 transition-colors hover:bg-sky-600"
            >
              <ShoppingCart className="h-4 w-4" />
              Panier
              {nombreArticles > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-xs font-bold text-white">
                  {nombreArticles}
                </span>
              )}
            </button>
          </div>

          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
              placeholder="Rechercher une équipe..."
              className="h-11 w-full rounded-full border border-slate-200 bg-white pl-10 pr-4 text-sm focus:border-sky-400 focus:outline-none sm:max-w-xs"
            />
          </div>

          <LeagueFilter ligues={LIGUES} active={ligueActive} onSelect={setLigueActive} />
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        {jerseysFiltres.length === 0 ? (
          <p className="py-16 text-center text-sm text-slate-500">
            Aucun maillot ne correspond à ta recherche.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
            {jerseysFiltres.map((jersey) => (
              <JerseyCard key={jersey.id} jersey={jersey} onSelect={setJerseySelectionne} />
            ))}
          </div>
        )}
      </main>

      {jerseySelectionne && (
        <JerseyModal
          jersey={jerseySelectionne}
          onClose={() => setJerseySelectionne(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {cartOuvert && (
        <CartPanel
          cart={cart}
          onClose={() => setCartOuvert(false)}
          onUpdateQuantite={handleUpdateQuantite}
          onRemove={handleRemove}
          onValidate={handleValidate}
        />
      )}
    </div>
  )
}
