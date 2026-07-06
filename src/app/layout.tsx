import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://opticode.fr'
const title = 'Opticode — Agence IA & développement web haut de gamme'
const description =
  'Opticode conçoit des sites web modernes et des agents IA sur mesure qui automatisent devis, emails, rendez-vous et support pour faire gagner du temps aux entreprises.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s — Opticode',
  },
  description,
  keywords: [
    'agence web',
    'intelligence artificielle',
    'automatisation IA',
    'agents IA',
    'création de site web',
    'développement web sur mesure',
    'chatbot IA',
    'CRM intelligent',
  ],
  authors: [{ name: 'Opticode' }],
  creator: 'Opticode',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'Opticode',
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Opticode',
    url: siteUrl,
    description,
    email: 'contact@opticode.fr',
    sameAs: [],
  }

  return (
    <html lang="fr" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
