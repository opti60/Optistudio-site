'use client'

import { motion } from 'framer-motion'

import { services } from '@/data/services'
import { SectionHeading } from '@/components/section-heading'

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="container">
        <SectionHeading
          badge="Nos services"
          title="Une suite complète pour votre croissance"
          description="De la conception de votre site à l'automatisation de votre activité, nous couvrons chaque étape de votre transformation digitale."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
                whileHover={{ y: -6 }}
                className="group glass gradient-border relative overflow-hidden rounded-2xl border border-white/10 p-7 transition-colors hover:border-primary/30"
              >
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-300 transition-transform duration-300 group-hover:scale-110"
                >
                  <Icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-bold">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
