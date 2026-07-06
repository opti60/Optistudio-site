import { NextResponse } from 'next/server'

interface ContactPayload {
  name?: string
  company?: string
  email?: string
  phone?: string
  message?: string
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

  // TODO: brancher un fournisseur d'emailing (ex. Resend) pour transmettre la demande
  // à l'équipe Opticode et en accuser réception auprès du prospect.
  console.log('Nouvelle demande de devis reçue :', {
    name: body.name,
    company: body.company,
    email: body.email,
    phone: body.phone,
    message: body.message,
  })

  return NextResponse.json({ success: true })
}
