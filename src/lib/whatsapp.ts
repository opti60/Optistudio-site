import { formatFlocage, type CartItem } from '@/components/maillots/types'

export const VENDEUR_WHATSAPP = '33602800611'

export function buildWhatsAppMessage(cart: CartItem[]): string {
  const total = cart.reduce((sum, item) => sum + item.prix * item.quantite, 0)

  const lignes = cart.map((item) => {
    const parts = [
      `🏃 ${item.equipe}${item.quantite > 1 ? ` x${item.quantite}` : ''}`,
      `  Flocage: ${formatFlocage(item.flocage)}`,
      `  Taille: ${item.taille}`,
      `  Prix: ${item.prix * item.quantite}€`,
    ]
    if (item.image) {
      parts.push(`  📷 Photo: ${item.image}`)
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

export function buildWhatsAppLink(cart: CartItem[]): string {
  const message = buildWhatsAppMessage(cart)
  return `https://wa.me/${VENDEUR_WHATSAPP}?text=${encodeURIComponent(message)}`
}
