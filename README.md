# Opticode

Site officiel d'Opticode — agence IA et développement web haut de gamme.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Composants UI façon shadcn/ui (Radix Primitives + CVA)
- lucide-react

## Développement

```bash
npm install
npm run dev
```

Le site est disponible sur [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de production
npm run start   # démarre le build de production
npm run lint     # vérifie le code avec ESLint
```

## Structure

```
src/
  app/                     routes (page d'accueil, mentions légales, confidentialité, API contact)
  components/
    ui/                    primitives (button, card, accordion, input...)
    layout/                navbar, footer
    sections/               hero, services, portfolio, automatisation, FAQ, contact...
  data/                    contenus (services, portfolio, témoignages, FAQ...)
  lib/                     utilitaires (cn)
```

## Formulaire de contact

Le formulaire envoie les demandes à `POST /api/contact`. La route valide les champs et journalise
la demande. Pour un envoi d'email réel en production, connectez un fournisseur (ex. Resend,
Postmark) dans `src/app/api/contact/route.ts`.

## SEO

Métadonnées, Open Graph, JSON-LD (Organization), `sitemap.xml` et `robots.txt` sont générés
automatiquement via `src/app/layout.tsx`, `src/app/sitemap.ts` et `src/app/robots.ts`. Définissez
la variable d'environnement `NEXT_PUBLIC_SITE_URL` avec le nom de domaine final avant la mise en
production.

## Déploiement

Le projet est prêt pour un déploiement sur [Vercel](https://vercel.com) : importez le repo et
déployez, aucune configuration additionnelle n'est nécessaire.
