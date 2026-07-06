'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Globe } from 'lucide-react'

import { portfolioProjects } from '@/data/portfolio'
import { SectionHeading } from '@/components/section-heading'

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28">
      <div className="container">
        <SectionHeading
          badge="Réalisations"
          title="Des projets pensés pour marquer"
          description="Un aperçu de ce que nous concevons pour nos clients : des expériences digitales premium, taillées pour convertir."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass group overflow-hidden rounded-2xl border border-white/10 transition-colors hover:border-primary/30"
            >
              <div
                className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient} bg-black/40`}
              >
                <div className="absolute inset-3 rounded-lg border border-white/10 bg-black/30">
                  <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                  </div>
                  <div className="flex h-full items-center justify-center">
                    <Globe className="text-white/30" size={40} />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                  {project.category}
                </span>
                <h3 className="mt-2 text-xl font-bold">{project.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-300 transition-colors hover:text-blue-200"
                >
                  Voir le projet <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
