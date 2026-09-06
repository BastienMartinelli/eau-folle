# CLAUDE.md

Site vitrine de la **Distillerie l'Eau Folle** (Tarentaise). Next.js 14 (App Router) · React 18 · TypeScript strict · Tailwind · Sanity v3 (CMS).

## Commandes

```bash
npm run dev          # dev server (localhost:3000)
npm run build        # build prod (lance aussi tsc + eslint)
npm run lint         # next lint
npm run build:types  # régénère sanity/types.ts depuis les schémas (sanity-codegen)
```

Pas de tests. Vérifier une modif = `npx tsc --noEmit` + `npm run build`.

## Architecture

- **Pages** : `app/*/page.tsx` — server components qui font `client.fetch(<GROQ>)` directement (client Sanity dans `sanity/lib/client.ts`).
- **CMS** : Studio monté sur `/studio`. Schémas dans `sanity/schemas/`. Types générés → `sanity/types.ts` (commité ; relancer `npm run build:types` après un changement de schéma).
- **Contenu éditorial** par page = documents Sanity de type `pages` (champ `name` = clé, `title`, `content`). Un doc `contact` (singleton de fait) pour email/tel/adresse. Produits = type `product`.
- `contact` est refetché dans `layout` (Footer), `app/contact` et `app/page` — 3 requêtes identiques par rendu.
- Images Sanity via `next/image` + `urlForImage` (`sanity/lib/image.ts`) ; domaine autorisé dans `next.config.js` (`cdn.sanity.io`).

## Conventions

- Utiliser l'anglais dans la base de code
- Alias d'import : `@/*` → racine.
- `cx()` (`utils/cx.ts`) pour composer les classNames, pas `clsx`.
- Couleurs de marque : `primary` (violet `#331C50`) et `secondary` (rouge) dans `tailwind.config.js`.
- Composant polymorphe : `components/Button.tsx` (`as` prop).
- Filtres d'URL : voir `components/Pills.tsx` + `components/CategorySection.tsx` (état piloté par `useSearchParams`, sections toujours montées, toggle `hidden` côté client).
- Suivre le style Prettier du fichier voisin (trailing commas incluses). Pas de `.prettierrc`.

## Pièges

- **Mode maintenance** : chaque page est enveloppée par `withMaintenance(Comp, "<path>")` (`components/Maintainance.tsx`). Affiche un écran de maintenance si la variable d'env `NEXT_DOWN` vaut `"all"` ou contient le path. Non définie en local.
- **`app/gamme` est en rendu dynamique** (`λ`) car il lit `searchParams` (filtre par catégorie). Les autres pages sont statiques : **un changement de contenu Sanity nécessite un redeploy** (plugin `sanity-plugin-vercel-deploy` dans le Studio).
- `data/pages.ts` = liens de nav + `shopUrl` (boutique SumUp, en dur).
