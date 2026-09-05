# 3D-CV

An interactive CV as a low-poly city diorama. Recruiters and developers explore
stations for each résumé section instead of scrolling a static page.

**Live demo:** https://th-da.github.io/3D-CV/ ·
**Repository:** https://github.com/Th-Da/3D-CV

<!-- TODO: add a screenshot at docs/screenshot.png, then embed:
![3D-CV city diorama](docs/screenshot.png)
-->

## Why I built this

I wanted a CV that people remember, and a project to practice building with an
AI coding assistant end to end. The hard part is keeping a clear split between
CV data, 3D world, and 2D UI while the scene stays walkable and readable on
desktop and touch.

## Features

- Six CV stations on a walkable district map: About Me, Experience, Education,
  Skills, Projects, Contact
- Arrow keys move the avatar; WASD orbits the camera; Enter opens the nearest
  station; Escape closes the info card
- Click a station mesh to open its card; on touch, virtual joystick, swipe
  orbit, and an open prompt when near a station
- Overlay info card shows title and summary from structured CV data
- Low-poly environment props (trees, lamps, benches, wayfinder) and fog/lighting
- Deployed to GitHub Pages from `main` via GitHub Actions

## Tech stack

- **Vite** — build and local dev server (`base: /3D-CV/` for project Pages)
- **React 19 + TypeScript** — app shell, UI, and typed CV contracts
- **Three.js + React Three Fiber** — WebGL scene, stations, player, and camera
- **React Compiler** — enabled in the Vite Babel preset
- **ESLint** — lint script for the TypeScript/React tree

## Running it locally

Requires **Node.js 22** (same version as the deploy workflow).

```bash
npm ci
npm run dev
```

Other scripts: `npm run build`, `npm run preview`, `npm run lint`.

## Status

Work in progress. The city, controls, and station flow work; CV copy in
`src/data/cv.ts` is still short placeholder text.