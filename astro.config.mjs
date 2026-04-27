// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://sophiaandxiaxia.github.io',
  base: '/sophia-health-economics-hub',
  output: 'static',
  build: {
    assets: 'assets',
  },
});
