import { NextResponse } from 'next/server'
import { Resend } from 'resend'

interface ContactPayload {
  name?: string
  company?: string
  email?: string
  phone?: string
  message?: string
}

const QUOTE_RECIPIENT = 'opticode6@gmail.com'

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json(
      { error: 'Les champs nom, email et message sont requis.' },
      { status: 400 }
    )
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(body.email)) {
    return NextResponse.json({ error: 'Adresse email invalide.' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    console.warn(
      'RESEND_API_KEY manquant : la demande de devis n\'a pas été envoyée par email.',
      body
    )
    return NextResponse.json({ success: true })
  }

  const resend = new Resend(apiKey)

  const { name, company, email, phone, message } = body

  try {
    await resend.emails.send({
      from: 'Opticode <onboarding@resend.dev>',
      to: QUOTE_RECIPIENT,
      replyTo: email,
      subject: `Nouvelle demande de devis — ${name}`,
      html: `
        <h2>Nouvelle demande de devis</h2>
        <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
        <p><strong>Entreprise :</strong> ${escapeHtml(company || 'Non renseignée')}</p>
        <p><strong>Email :</strong> ${escapeHtml(email)}</p>
        <p><strong>Téléphone :</strong> ${escapeHtml(phone || 'Non renseigné')}</p>
        <p><strong>Message :</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `,
    })
  } catch (error) {
    console.error('Échec de l\'envoi de la demande de devis par email :', error)
    return NextResponse.json(
      { error: 'Impossible d\'envoyer votre demande pour le moment.' },
      { status: 502 }
    )
  }

  return NextResponse.json({ success: true })
}
