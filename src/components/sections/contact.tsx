'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Loader2, Send } from 'lucide-react'

import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) throw new Error('Request failed')

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="container">
        <SectionHeading
          badge="Contact"
          title="Parlons de votre projet"
          description="Décrivez-nous votre besoin, notre équipe vous répond avec un devis personnalisé sous 24h."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass gradient-border relative mx-auto mt-16 max-w-2xl overflow-hidden rounded-3xl border border-white/10 p-8 sm:p-12"
        >
          {status === 'success' ? (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <CheckCircle2 className="text-blue-400" size={48} />
              <h3 className="text-2xl font-bold">Merci pour votre message !</h3>
              <p className="text-muted-foreground">
                Notre équipe revient vers vous très rapidement avec votre devis personnalisé.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom</Label>
                  <Input id="name" name="name" placeholder="Jean Dupont" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Entreprise</Label>
                  <Input id="company" name="company" placeholder="Nom de votre entreprise" />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="vous@entreprise.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+33 6 12 34 56 78" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Décrivez votre projet et vos objectifs..."
                  required
                />
              </div>

              <Button type="submit" size="lg" disabled={status === 'submitting'} className="w-full">
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="animate-spin" size={18} /> Envoi en cours...
                  </>
                ) : (
                  <>
                    Recevoir mon devis <Send size={18} />
                  </>
                )}
              </Button>

              {status === 'error' && (
                <p className="text-center text-sm text-red-400">
                  Une erreur est survenue. Merci de réessayer ou de nous écrire directement à
                  contact@opticode.fr.
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
