# CORVALIER

Private fine jewelry maison — Next.js 15, App Router, Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Import this repository at [vercel.com/new](https://vercel.com/new).
2. Framework preset: **Next.js** (auto-detected).
3. Build command: `npm run build` · Output: `.next` (default).
4. No environment variables required for the static demo.
5. Deploy — Vercel runs `npm install` and builds on their servers (no `node_modules` in git).

## Git hygiene

Never commit `node_modules`, `.next`, or `.env*` files. If the repo grows unexpectedly:

```bash
npm run dev:clean   # clears local .next cache
```
