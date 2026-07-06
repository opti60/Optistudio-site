'use client'

import { motion } from 'framer-motion'

import { processSteps } from '@/data/process'
import { SectionHeading } from '@/components/section-heading'

export function Process() {
  return (
    <section id="methode" className="relative py-28">
      <div className="container">
        <SectionHeading
          badge="Notre méthode"
          title="De l'idée au résultat, sans friction"
          description="Un processus clair et éprouvé pour garantir un projet livré dans les temps, sans surprise."
        />

        <div className="relative mx-auto mt-20 max-w-3xl">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-blue-500/60 via-violet-500/30 to-transparent sm:block" />

          <div className="space-y-10">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex gap-6 sm:pl-2"
              >
                <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-gradient-to-br from-blue-500/20 to-violet-500/20">
                  <span className="gradient-text text-xl font-bold">{step.number}</span>
                </div>
                <div className="glass flex-1 rounded-2xl border border-white/10 p-6">
                  <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
