import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// The site lives at the root of mercurial20.github.io; the editor itself is at /loremapper/
// (the mercurial20/loremapper repository's own GitHub Pages site on the same host, so maps
// saved in browsers stay where they are).
export default defineConfig({
  site: 'https://mercurial20.github.io',
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', ru: 'ru' } },
      // the editor is a page too
      customPages: ['https://mercurial20.github.io/loremapper/'],
    }),
  ],
});
