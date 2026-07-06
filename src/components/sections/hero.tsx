'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { AnimatedBackground } from '@/components/animated-background'

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20">
      <AnimatedBackground />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted-foreground"
        >
          <Sparkles size={14} className="text-blue-400" />
          Agence IA &amp; développement web haut de gamme
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-4xl text-balance text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl"
        >
          Votre entreprise mérite{' '}
          <span className="gradient-text">une intelligence artificielle</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl"
        >
          Sites web modernes, automatisations intelligentes et solutions IA conçues pour faire
          gagner du temps et développer votre activité.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button asChild size="lg">
            <a href="#contact">
              Obtenir un devis <ArrowRight size={18} />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#services">Découvrir nos services</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
