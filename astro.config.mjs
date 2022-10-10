import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from "@astrojs/svelte";
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

const stagingConfig = {
  policy: [
    {
      userAgent: 'Twitterbot',
      disallow: '',
    },
    {
      userAgent: '*',
      disallow: '/',
    },
  ],
}

const productionConfig = {}

// const isProd = !!import.meta.env.MODE === 'production'

// const siteConfig = isProd ? productionConfig : stagingConfig

// https://astro.build/config
export default defineConfig({
  experimental: {
    integrations: true,
  },
  integrations: [tailwind(), svelte(), sitemap(), robotsTxt()]
});