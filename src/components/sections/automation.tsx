'use client'

import { motion } from 'framer-motion'
import { Bot, Zap } from 'lucide-react'

import { automationFeatures } from '@/data/automation'
import { SectionHeading } from '@/components/section-heading'

export function Automation() {
  return (
    <section id="automatisation" className="relative py-28">
      <div className="container">
        <SectionHeading
          badge="Automatisation IA"
          title="Des agents IA qui travaillent pour vous"
          description="Nous concevons des agents intelligents capables de gérer vos tâches répétitives, pour que votre équipe se concentre sur l'essentiel."
        />

        <div className="mx-auto mt-16 grid max-w-2xl gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {automationFeatures.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl border border-white/10 p-6 transition-colors hover:border-primary/30"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-300">
                  <Icon size={22} />
                </div>
                <h3 className="mb-2 text-base font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass gradient-border relative mt-16 overflow-hidden rounded-3xl border border-white/10 p-10 sm:p-14"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500">
                <Bot className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold sm:text-3xl">
                Un agent IA, disponible pour votre entreprise 24h/24
              </h3>
              <p className="mt-4 text-muted-foreground">
                Fini les tâches répétitives : nos agents IA s&apos;intègrent à vos outils pour
                gérer devis, emails, rendez-vous et relation client, en continu, sans jamais
                perdre en qualité.
              </p>
            </div>

            <div className="relative flex flex-col gap-3">
              {['Nouvelle demande client reçue', 'Analyse et qualification par l’IA', 'Devis généré et envoyé automatiquement'].map(
                (step, idx) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="glass flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3"
                  >
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-blue-300">
                      <Zap size={16} />
                    </span>
                    <span className="text-sm text-white/90">{step}</span>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
