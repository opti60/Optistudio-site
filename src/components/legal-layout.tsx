import type { ReactNode } from 'react'

import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

export function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="relative py-32">
        <div className="container max-w-3xl">
          <h1 className="mb-10 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
          <div className="space-y-8 text-muted-foreground [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_p]:leading-relaxed">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
