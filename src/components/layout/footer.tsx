import Link from 'next/link'
import { Linkedin, Twitter, Instagram } from 'lucide-react'

const navigation = [
  { label: 'Services', href: '#services' },
  { label: 'Pourquoi Opticode', href: '#pourquoi' },
  { label: 'Méthode', href: '#methode' },
  { label: 'Réalisations', href: '#portfolio' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const legal = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Politique de confidentialité', href: '/politique-de-confidentialite' },
]

const socials = [
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'Twitter', href: '#', icon: Twitter },
  { label: 'Instagram', href: '#', icon: Instagram },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 text-white">
                O
              </span>
              <span>Opti<span className="gradient-text">code</span></span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Sites web premium et automatisation par intelligence artificielle pour les
              entreprises qui veulent gagner du temps et accélérer leur croissance.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-muted-foreground transition-colors hover:border-primary/40 hover:text-white"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Navigation</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Légal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>contact@opticode.fr</li>
              <li>+33 1 23 45 67 89</li>
              <li>Paris, France</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Opticode. Tous droits réservés.</p>
          <p>Conçu avec exigence, propulsé par l&apos;IA.</p>
        </div>
      </div>
    </footer>
  )
}
