'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

import { testimonials } from '@/data/testimonials'
import { SectionHeading } from '@/components/section-heading'

export function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="container">
        <SectionHeading
          badge="Témoignages"
          title="Ils nous font confiance"
          description="Des dirigeants qui ont transformé leur activité grâce à Opticode."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass flex flex-col rounded-2xl border border-white/10 p-6"
            >
              <div className="mb-4 flex gap-1 text-blue-300">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-white/90">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-sm font-bold text-white">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
