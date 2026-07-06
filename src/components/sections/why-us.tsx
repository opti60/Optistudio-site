'use client'

import { motion } from 'framer-motion'

import { stats } from '@/data/stats'
import { SectionHeading } from '@/components/section-heading'

export function WhyUs() {
  return (
    <section id="pourquoi" className="relative py-28">
      <div className="container">
        <SectionHeading
          badge="Pourquoi Opticode"
          title="Des résultats concrets, pas des promesses"
          description="Chaque projet est développé sur mesure : nous n'appliquons jamais de template générique, mais construisons une solution pensée pour votre activité et vos objectifs."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass rounded-2xl border border-white/10 p-8 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-300">
                  <Icon size={24} />
                </div>
                <div className="gradient-text text-4xl font-bold">{stat.value}</div>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass gradient-border relative mt-10 overflow-hidden rounded-2xl border border-white/10 p-10 text-center"
        >
          <h3 className="text-2xl font-bold">Chaque projet, une exigence sur mesure</h3>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Nous ne livrons pas de solution générique. Chaque site, chaque agent IA et chaque
            automatisation sont conçus spécifiquement pour votre activité, vos clients et vos
            objectifs de croissance.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
