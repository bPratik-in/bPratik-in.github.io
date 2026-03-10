# bPratik.in

Personal site and landing page for [Pratik Bhonsle](https://www.bpratik.in), hosted on GitHub Pages.

## Tech

- Static HTML, CSS, and vanilla JS
- [Vite](https://vitejs.dev/) for dev server and production build
- Contact details are assembled in JS to reduce crawler harvesting

## Develop locally

```bash
npm install
npm run dev
```

Then open **http://localhost:5173**. The dev server supports hot reload.

## Build & preview production

```bash
npm run build
npm run preview
```

Preview serves the `dist/` output (e.g. at http://localhost:4173).

## Deploy to GitHub Pages

1. **Repository Settings → Pages**  
   Set **Source** to **GitHub Actions** (not “Deploy from a branch”).

2. Push to `main` or `master`  
   The [Deploy to GitHub Pages](.github/workflows/deploy-pages.yml) workflow will build and deploy the site.

The built site is served from the `github-pages` environment. Custom domain is set via the `CNAME` file in `public/` (e.g. `www.bpratik.in`).

## Updating the resume

Place your CV PDF in **`public/assets/`** and update the link in `index.html` if the filename changes (e.g. `bp_cv-20260219.pdf` → your new file name). The same file is used for local builds and for the GitHub Actions build.

## Project structure

```
├── index.html          # Entry HTML
├── src/
│   ├── styles/         # CSS
│   └── scripts/       # JS (contact obfuscation, year, etc.)
├── public/             # Static assets (copied as-is to dist)
│   ├── CNAME           # Custom domain for GitHub Pages
│   ├── favicon.svg
│   └── assets/         # Resume PDF and other static files
├── vite.config.js
└── package.json
```
