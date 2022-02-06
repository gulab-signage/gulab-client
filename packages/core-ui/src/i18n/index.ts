import { Logger } from '@gulab-client/logger';
import type { Callback } from 'i18next';
import i18next from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import resources from './resources';

/**
 * #### Using the hook
 * import { useTranslation } from '@gulab-client/core-ui';\
 * const { t, i18n } = useTranslation(namespace, { keyPrefix });
 *
 * #### Using outside of React
 * import i18nInstance from '@gulab-client/core-ui';\
 * i18nInstance.t(key, { ns });
 *
 * #### Adding resources
 * i18nInstance.addResourceBundle(lang, namespace, resources);
 */

const i18nInstance = i18next.createInstance();

function initI18n(callback?: Callback) {
  i18nInstance
    // passes i18n down to react-i18next
    .use(initReactI18next)
    .init(
      {
        defaultNS: 'common',
        fallbackLng: ['en'],
        interpolation: {
          // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
          escapeValue: false,
        },
        lng: 'en',
        resources,
      },
      callback
    )
    .catch((error) => {
      // TODO: Fix logger
      Logger.logError(error as Error);
    });
}

export { i18nInstance, initI18n, useTranslation };
