import { formatFlocage, type CartItem } from '@/components/maillots/types'

export const VENDEUR_WHATSAPP = '33767380793'

export function buildWhatsAppMessage(cart: CartItem[], origin = ''): string {
  const total = cart.reduce((sum, item) => sum + item.prix * item.quantite, 0)

  const lignes = cart.map((item) => {
    const parts = [
      `🏃 ${item.equipe}${item.quantite > 1 ? ` x${item.quantite}` : ''}`,
      `  Flocage: ${formatFlocage(item.flocage)}`,
      `  Taille: ${item.taille}`,
      `  Prix: ${item.prix * item.quantite}€`,
    ]
    if (item.image) {
      const photoUrl = item.image.startsWith('/') ? `${origin}${item.image}` : item.image
      parts.push(`  📷 Photo: ${photoUrl}`)
    }
    return parts.join('\n')
  })

  const message = [
    'Bonjour! 🛍️',
    '',
    'Je voudrais commander:',
    '',
    lignes.join('\n\n'),
    '',
    '━━━━━━━━━━━━━━━━━━━━━━',
    `💰 TOTAL: ${total}€`,
    '━━━━━━━━━━━━━━━━━━━━━━',
    '',
    'Merci!',
  ].join('\n')

  return message
}

export function buildWhatsAppLink(cart: CartItem[], origin = ''): string {
  const message = buildWhatsAppMessage(cart, origin)
  return `https://wa.me/${VENDEUR_WHATSAPP}?text=${encodeURIComponent(message)}`
}
