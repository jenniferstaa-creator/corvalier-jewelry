# CORDELLIER

Private fine jewelry maison — Next.js 15, App Router, Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repo to GitHub (see below).
2. Import at [vercel.com/new](https://vercel.com/new) → select **cordellier-jewelry**.
3. Framework: **Next.js** (auto-detected).
4. Build command: `npm run build` · Install: `npm install` · Node.js **20.x** (see `.nvmrc`).
5. No environment variables required for the demo.
6. Deploy. Images load from `/public/images` and 3D models from `/public/models`.

### Pre-deploy checklist

```bash
npm install
npm run typecheck   # no TypeScript errors
npm run build       # must pass before pushing
```

Do **not** commit `node_modules`, `.next`, or `.env*` files.

## Git hygiene

Never commit `node_modules`, `.next`, or `.env*` files. If the repo grows unexpectedly:

```bash
npm run dev:clean   # clears local .next cache
```
