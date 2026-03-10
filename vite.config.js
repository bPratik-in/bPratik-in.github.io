import { defineConfig } from 'vite';

// GitHub Pages: if using project site (user.github.io/repo), set base to '/repo/'
// For user/org site (bPratik-in.github.io) at root, use '/'
export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
});
