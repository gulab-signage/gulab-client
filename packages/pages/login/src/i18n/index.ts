import type { UseTranslationOptions } from '@gulab-client/core-ui';
import { i18nInstance, initI18n, useTranslation as useT } from '@gulab-client/core-ui';
import en from './resources/en.json';

export const namespace = 'pages_login';

export function initI18nLocal() {
  initI18n(() => {
    i18nInstance.addResourceBundle('en', namespace, { ...en });
  });
}

export function useTranslation<TKPrefix extends string | undefined>(options?: UseTranslationOptions<TKPrefix>) {
  return useT<typeof namespace, TKPrefix>(namespace, options);
}
