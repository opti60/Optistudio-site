'use client'

import { motion } from 'framer-motion'

import { Badge } from '@/components/ui/badge'

export function SectionHeading({
  badge,
  title,
  description,
}: {
  badge: string
  title: string
  description?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-2xl text-center"
    >
      <Badge className="mb-4">{badge}</Badge>
      <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-lg text-muted-foreground">{description}</p>}
    </motion.div>
  )
}
