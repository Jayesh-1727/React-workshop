# Project Overview

This repository contains a small React + Vite TypeScript project located in the `funfacts/` folder. This document summarizes the repository structure, explains key files, and provides quick commands to run and build the project.

## Top-level structure

- `README.md` — repo-level notes.
- `funfacts/` — the main app (Vite + React + TypeScript).

## `funfacts/` (app) structure

Typical important files you will find inside `funfacts/`:

- `package.json` — project dependencies and scripts (e.g., `dev`, `build`, `preview`).
- `vite.config.ts` — Vite configuration.
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json` — TypeScript configs.
- `eslint.config.js` — ESLint configuration.
- `index.html` — HTML template for the app.
- `public/` — static assets served at root.
- `src/` — application source code:
  - `main.tsx` — app entry point (mounts React app).
  - `App.tsx` — main React component.
  - `index.css`, `App.css` — global and component styles.
  - `assets/` — images and other assets referenced by components.

## How the app is organized (quick notes)

- The application uses Vite for dev server and build.
- Source is TypeScript React (files end in `.tsx` / `.ts`).
- ESLint + TypeScript configs are present to help with development and type checking.

## Common commands

Open a terminal in the `funfacts/` folder and run:

```bash
cd funfacts
npm install
npm run dev
```

If the project uses `yarn` or `pnpm`, substitute the appropriate package manager:

```bash
# Yarn
yarn
yarn dev

# pnpm
pnpm install
pnpm dev
```

To build and preview a production bundle:

```bash
npm run build
npm run preview
```

## Where to look next

- App entry: `funfacts/src/main.tsx`
- Main component: `funfacts/src/App.tsx`
- Vite config: `funfacts/vite.config.ts`
- Scripts & deps: `funfacts/package.json`

## Notes & suggestions

- If you want, I can expand this file with a visual tree, diagram, or map of component responsibilities, or update it after inspecting `funfacts/package.json` and `funfacts/src` contents.

---

Created by assistant to help navigate the repository.
