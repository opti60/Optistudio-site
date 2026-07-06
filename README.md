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

Le formulaire envoie les demandes à `POST /api/contact`, qui transmet chaque devis par email à
`opticode6@gmail.com` via [Resend](https://resend.com). Sans la variable d'environnement
`RESEND_API_KEY`, la route se contente de journaliser la demande (pratique en local).

Pour activer l'envoi réel en production :
1. Créez un compte gratuit sur [resend.com](https://resend.com)
2. Générez une clé API (Dashboard → API Keys)
3. Ajoutez-la comme variable d'environnement `RESEND_API_KEY` dans le projet Vercel
   (Settings → Environment Variables), puis redéployez

L'expéditeur utilise le domaine de test `onboarding@resend.dev` fourni par Resend. Pour envoyer
depuis une adresse `@opticode.fr`, vérifiez votre propre domaine dans Resend et mettez à jour le
champ `from` dans `src/app/api/contact/route.ts`.

## SEO

Métadonnées, Open Graph, JSON-LD (Organization), `sitemap.xml` et `robots.txt` sont générés
automatiquement via `src/app/layout.tsx`, `src/app/sitemap.ts` et `src/app/robots.ts`. Définissez
la variable d'environnement `NEXT_PUBLIC_SITE_URL` avec le nom de domaine final avant la mise en
production.

## Déploiement

Le projet est prêt pour un déploiement sur [Vercel](https://vercel.com) : importez le repo et
déployez, aucune configuration additionnelle n'est nécessaire.
