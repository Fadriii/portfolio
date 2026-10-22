// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Self-hosted at build time, so visitors never hit Google's servers.
  fonts: [
    { provider: fontProviders.google(), name: 'Newsreader', cssVariable: '--font-newsreader', weights: [400], styles: ['normal'], fallbacks: ['Georgia', 'Times New Roman', 'serif'] },
    { provider: fontProviders.google(), name: 'IBM Plex Sans', cssVariable: '--font-plex-sans', weights: [400, 600], styles: ['normal'], fallbacks: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'] },
    { provider: fontProviders.google(), name: 'IBM Plex Mono', cssVariable: '--font-plex-mono', weights: [500], styles: ['normal'], fallbacks: ['ui-monospace', 'Menlo', 'Consolas', 'monospace'] },
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
