/** The site's pages in each language, so every page links to its translation. */
export type Lang = 'en' | 'ru';
export type PageId = 'home' | 'generator' | 'dnd' | 'guide';

export const ROUTES: Record<PageId, Record<Lang, string>> = {
  home: { en: '/', ru: '/ru/' },
  generator: { en: '/fantasy-map-generator/', ru: '/ru/generator-fentezi-kart/' },
  dnd: { en: '/dnd-map-maker/', ru: '/ru/karta-dlya-dnd/' },
  guide: { en: '/how-to-make-a-fantasy-map/', ru: '/ru/kak-sdelat-fentezi-kartu/' },
};

export const SITE = 'https://mercurial20.github.io';
export const EDITOR = 'https://mercurial20.github.io/loremapper/';
export const GITHUB = 'https://github.com/mercurial20/loremapper';
export const REDDIT = 'https://www.reddit.com/r/LoreMapper/';

export const UI = {
  en: {
    open: 'Open the editor',
    openShort: 'Open editor',
    nav: { generator: 'Generator', dnd: 'For D&D', guide: 'How to make a map' },
    free: 'Free · open source · no account',
    footer: 'Loremapper is a free, non-commercial, open-source project under the MIT License. Your maps stay in your browser.',
    source: 'Source code',
    community: 'Community',
    lang: 'Русский',
    home: 'Home',
  },
  ru: {
    open: 'Открыть редактор',
    openShort: 'Редактор',
    nav: { generator: 'Генератор', dnd: 'Для D&D', guide: 'Как сделать карту' },
    free: 'Бесплатно · открытый код · без регистрации',
    footer: 'Loremapper — бесплатный некоммерческий проект с открытым кодом (лицензия MIT). Ваши карты остаются в вашем браузере.',
    source: 'Исходный код',
    community: 'Сообщество',
    lang: 'English',
    home: 'Главная',
  },
} as const;
