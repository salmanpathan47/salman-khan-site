import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// SINGLE_FILE=1 produces one self-contained index.html (used for the live preview).
// Normal `npm run build` produces a standard dist/ folder for Vercel / Netlify / GitHub Pages.
export default defineConfig({
  base: './',
  plugins: process.env.SINGLE_FILE ? [react(), viteSingleFile()] : [react()],
  build: { outDir: process.env.SINGLE_FILE ? 'dist-single' : 'dist' },
})
