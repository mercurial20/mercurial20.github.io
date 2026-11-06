/*
 * What the comparison pages say about other map makers: only what each one says about itself on
 * its own site (linked), checked on the date below. No prices or limits that change; no judgements.
 * Corrections are welcome (GitHub issues).
 */
export const CHECKED = '2026-11-06';
export const CHECKED_TEXT = { en: 'November 2026', ru: 'ноябрь 2026' };

export interface Tool {
  id: 'inkarnate' | 'azgaar' | 'wonderdraft';
  name: string;
  site: string;
  /** Rows of the table, in each language. */
  rows: { en: Record<RowKey, string>; ru: Record<RowKey, string> };
}

export type RowKey = 'what' | 'how' | 'platform' | 'cost' | 'source' | 'account';

export const ROW_NAMES: Record<RowKey, { en: string; ru: string }> = {
  what: { en: 'What it is', ru: 'Что это' },
  how: { en: 'How maps are made', ru: 'Как делаются карты' },
  platform: { en: 'Where it runs', ru: 'Где работает' },
  cost: { en: 'Cost', ru: 'Стоимость' },
  source: { en: 'Source code', ru: 'Исходный код' },
  account: { en: 'Account', ru: 'Учётная запись' },
};

export const LOREMAPPER: Record<'en' | 'ru', Record<RowKey, string>> = {
  en: {
    what: 'A fantasy map generator and editor focused on believable terrain',
    how: 'Generated from a seed at true scale (real elevation, rivers, climate), then edited by hand',
    platform: 'Browser; can also run on your own computer',
    cost: 'Free, non-commercial project',
    source: 'Open source (MIT)',
    account: 'None; maps stay in your browser',
  },
  ru: {
    what: 'Генератор и редактор фэнтези-карт с упором на правдоподобный рельеф',
    how: 'Генерация по сиду в настоящем масштабе (высоты, реки, климат), затем правка руками',
    platform: 'Браузер; можно запустить и на своём компьютере',
    cost: 'Бесплатно, некоммерческий проект',
    source: 'Открытый код (MIT)',
    account: 'Не нужна; карты остаются в браузере',
  },
};

export const TOOLS: Tool[] = [
  {
    id: 'inkarnate',
    name: 'Inkarnate',
    site: 'https://inkarnate.com/',
    rows: {
      en: {
        what: 'An online map maker for world, city and encounter maps, with a large library of hand-drawn art',
        how: 'Painted and stamped by hand: terrain brushes, art stamps, lighting and filters',
        platform: 'Browser',
        cost: 'Free to start; paid plans (see their site)',
        source: 'Proprietary',
        account: 'Free account to start',
      },
      ru: {
        what: 'Онлайн-редактор карт мира, городов и сцен столкновений с большой библиотекой рисованных элементов',
        how: 'Рисуются вручную: кисти рельефа, штампы, свет и фильтры',
        platform: 'Браузер',
        cost: 'Бесплатный старт; платные планы (см. их сайт)',
        source: 'Закрытый',
        account: 'Бесплатная учётная запись для начала',
      },
    },
  },
  {
    id: 'azgaar',
    name: "Azgaar's Fantasy Map Generator",
    site: 'https://azgaar.github.io/Fantasy-Map-Generator/',
    rows: {
      en: {
        what: 'A procedural generator of whole fantasy worlds, including cultures and states',
        how: 'Generated procedurally, then customised in many editors',
        platform: 'Browser; desktop builds for Windows, macOS and Linux',
        cost: 'Free',
        source: 'Open source (MIT)',
        account: 'No',
      },
      ru: {
        what: 'Процедурный генератор целых фэнтези-миров, включая культуры и государства',
        how: 'Генерация, затем настройка во множестве редакторов',
        platform: 'Браузер; настольные версии для Windows, macOS и Linux',
        cost: 'Бесплатно',
        source: 'Открытый код (MIT)',
        account: 'Нет',
      },
    },
  },
  {
    id: 'wonderdraft',
    name: 'Wonderdraft',
    site: 'https://wonderdraft.net/',
    rows: {
      en: {
        what: 'A desktop map maker for illustrated world and regional maps',
        how: 'Brushed and generated landmasses, painted symbols, styled labels and themes',
        platform: 'Desktop: Windows and Ubuntu (per their site)',
        cost: 'One-time purchase (see their site)',
        source: 'Proprietary',
        account: 'Purchase required',
      },
      ru: {
        what: 'Настольная программа для иллюстрированных карт мира и регионов',
        how: 'Суша кистью или генерацией, символы, оформленные подписи и темы',
        platform: 'Компьютер: Windows и Ubuntu (по их сайту)',
        cost: 'Разовая покупка (см. их сайт)',
        source: 'Закрытый',
        account: 'Нужна покупка',
      },
    },
  },
];

export const tool = (id: Tool['id']) => TOOLS.find((t) => t.id === id)!;
