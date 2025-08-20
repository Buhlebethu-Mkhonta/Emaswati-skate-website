// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';
import tailwindcss  from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://emaswati-skate-website.vercel.app',
  vite:{
    plugins: [tailwindcss()],
  },
  integrations: [svelte()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    // Enable WebP format by default
    format: 'webp',
    // Set default quality for lossy formats
    quality: 80
  }
});