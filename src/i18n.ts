/** The site's pages in each language, so every page links to its translation. */
export type Lang = 'en' | 'ru';
export type PageId = 'home' | 'generator' | 'dnd' | 'guide' | 'guides' | 'tutContinent' | 'tutFog' | 'tutHeightmap' | 'compare' | 'vsInkarnate' | 'vsAzgaar' | 'vsWonderdraft';

/** Each page in each language it is written in (English always). */
export const ROUTES: Record<PageId, { en: string; ru?: string }> = {
  home: { en: '/', ru: '/ru/' },
  generator: { en: '/fantasy-map-generator/', ru: '/ru/generator-fentezi-kart/' },
  dnd: { en: '/dnd-map-maker/', ru: '/ru/karta-dlya-dnd/' },
  guide: { en: '/how-to-make-a-fantasy-map/', ru: '/ru/kak-sdelat-fentezi-kartu/' },
  guides: { en: '/guides/', ru: '/ru/rukovodstva/' },
  tutContinent: { en: '/guides/generate-a-fantasy-continent/', ru: '/ru/rukovodstva/sgenerirovat-materik/' },
  tutFog: { en: '/guides/player-map-with-fog-of-war/', ru: '/ru/rukovodstva/karta-dlya-igrokov-s-tumanom-vojny/' },
  tutHeightmap: { en: '/guides/heightmap-for-game-engines/', ru: '/ru/rukovodstva/karta-vysot-dlya-igrovyh-dvizhkov/' },
  compare: { en: '/alternatives/', ru: '/ru/sravnenie/' },
  vsInkarnate: { en: '/alternatives/inkarnate/' },
  vsAzgaar: { en: '/alternatives/azgaar-fantasy-map-generator/' },
  vsWonderdraft: { en: '/alternatives/wonderdraft/' },
};

/** A page's address in a language, or (not written in it) the home page of that language. */
export const routeIn = (page: PageId, lang: Lang): string => ROUTES[page][lang] ?? ROUTES.home[lang]!;

export const SITE = 'https://mercurial20.github.io';
export const EDITOR = 'https://mercurial20.github.io/loremapper/';
export const GITHUB = 'https://github.com/mercurial20/loremapper';
export const REDDIT = 'https://www.reddit.com/r/LoreMapper/';

export const UI = {
  en: {
    open: 'Open the editor',
    openShort: 'Open editor',
    nav: { generator: 'Generator', dnd: 'For D&D', guides: 'Guides', compare: 'Compare' },
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
    nav: { generator: 'Генератор', dnd: 'Для D&D', guides: 'Руководства', compare: 'Сравнение' },
    free: 'Бесплатно · открытый код · без регистрации',
    footer: 'Loremapper — бесплатный некоммерческий проект с открытым кодом (лицензия MIT). Ваши карты остаются в вашем браузере.',
    source: 'Исходный код',
    community: 'Сообщество',
    lang: 'English',
    home: 'Главная',
  },
} as const;
