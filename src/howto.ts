import { SITE } from './i18n';

/** schema.org HowTo for a tutorial: its steps as given on the page. */
export function howTo(o: { name: string; description: string; url: string; steps: { name: string; text: string }[]; minutes?: number; lang: 'en' | 'ru' }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: o.name,
    description: o.description,
    inLanguage: o.lang,
    url: SITE + o.url,
    ...(o.minutes ? { totalTime: `PT${o.minutes}M` } : {}),
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
    tool: [{ '@type': 'HowToTool', name: 'Loremapper (free, in the browser)' }],
    step: o.steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text, url: `${SITE}${o.url}#step-${i + 1}` })),
  };
}
