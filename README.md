# Salman Khan — portfolio site

React 18 + Vite + Framer Motion. All content lives in `src/data.js`; edit that file to change copy, roles, experience or contact details.

## Run locally
    npm install
    npm run dev        # http://localhost:5173

## Build
    npm run build      # output in dist/

## Deploy (pick one — all free)

**Vercel (recommended, ~2 minutes)**
1. Push this folder to a GitHub repo (e.g. `salman-khan-site`).
2. Go to vercel.com → Add New Project → import the repo. Vercel auto-detects Vite. Click Deploy.
3. You get `https://<project>.vercel.app`. Add a custom domain under Settings → Domains (e.g. salmankhan.dev — buy on Namecheap/GoDaddy, point DNS at Vercel).

**Netlify (no GitHub needed)**
1. `npm run build`
2. Drag the `dist/` folder onto app.netlify.com/drop. Done.

**GitHub Pages**
1. Push to GitHub. In `vite.config.js` `base` is already `./`, so relative paths work.
2. Settings → Pages → Deploy from branch → use a `gh-pages` branch, or `npx gh-pages -d dist`.

## Replace the CV
Overwrite `public/Salman_Khan_CV.pdf` (the "Download CV" button points to it).

## Theme
Dark by default, follows the visitor's system theme. Colours are CSS tokens at the top of `src/styles.css`.
