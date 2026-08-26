import pt from './pt.json';
import en from './en.json';
import es from './es.json';

export const languages = {
  pt: 'Português',
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'pt';

const dictionaries = { pt, en, es } satisfies Record<Lang, typeof pt>;

/** Extrai o idioma a partir do pathname atual (ex: "/en/blog/" -> "en"). */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

/** Retorna a função `t(chave)` para buscar textos de interface traduzidos. */
export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const dict = dictionaries[lang] ?? dictionaries[defaultLang];
    const value = key.split('.').reduce<unknown>((acc, part) => {
      if (acc && typeof acc === 'object' && part in (acc as Record<string, unknown>)) {
        return (acc as Record<string, unknown>)[part];
      }
      return undefined;
    }, dict);
    if (typeof value === 'string') return value;

    // Fallback: se a chave não existir no idioma atual, tenta o PT.
    const fallback = key.split('.').reduce<unknown>((acc, part) => {
      if (acc && typeof acc === 'object' && part in (acc as Record<string, unknown>)) {
        return (acc as Record<string, unknown>)[part];
      }
      return undefined;
    }, dictionaries[defaultLang]);
    return typeof fallback === 'string' ? fallback : key;
  };
}

/** Troca o idioma de um path mantendo a mesma rota (ex: /pt/blog/ -> /en/blog/). */
export function getLocalizedPath(pathname: string, base: string, newLang: Lang): string {
  let path = pathname;
  if (base !== '/' && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  path = '/' + path.replace(/^\/+/, '');
  const parts = path.split('/').filter(Boolean);
  if (parts[0] in languages) {
    parts.shift();
  }
  const rest = parts.join('/');
  const normalizedBase = base === '/' ? '' : base;
  return `${normalizedBase}/${newLang}/${rest}${rest ? '/' : ''}`;
}
