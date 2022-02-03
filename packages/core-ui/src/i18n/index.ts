import { Logger } from '@gulab-client/logger';
import i18next from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import resources from './resources';

/**
 *
 * ### Using the hook
 * import { useTranslation } from 'react-i18next';\
 * import { useTranslation } from '@gulab-client/core-ui';\
 * const { t, i18n } = useTranslation();
 *
 * ### Using outside of React
 * import i18next from 'i18next';\
 * import i18next from '@gulab-client/core-ui';\
 * i18next.t('my.key');
 *
 * ### Addint resources
 * i18next.addResourceBundle('en', 'namespace1', { key: 'hello' });
 *
 * ### Using namespaces and prefix
 * const { t } = useTranslation('namespace1', { keyPrefix: 'copy' });\
 * i18next.t('look.deep', { ns: 'namespace1' });
 */

export function initI18n() {
  i18next
    // passes i18n down to react-i18next
    .use(initReactI18next)
    .init({
      resources,
      lng: 'en',
      fallbackLng: 'en',
      interpolation: {
        // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        escapeValue: false,
      },
    })
    .catch((error) => {
      // TODO: Fix logger
      Logger.logError(error as Error);
    });
}

export { i18next, useTranslation };
