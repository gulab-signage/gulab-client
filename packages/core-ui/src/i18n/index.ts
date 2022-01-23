import { Logger } from '@gulab-client/logger';
import i18next from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

export function initI18n() {
  i18next
    // passes i18n down to react-i18next
    .use(initReactI18next)
    .init({
      resources: {},
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

// ## Example React
// import './i18n';
// import App from './App';
// ReactDOM.render(
//   <App />,
//   document.getElementById("root")
// );

// ## Example outside of React
// import i18next from './i18n'
// i18next.t('my.key')

// ## Example hook
// import { useTranslation } from 'react-i18next';
// function MyComponent () {
//   const { t, i18n } = useTranslation();
//   return <h1>{t('Welcome to React')}</h1>
// }

// ## Example, namespaces
// i18next.t('look.deep', { ns: 'common' })
// const { t } = useTranslation(['translation', 'common']);

// ## Adding resources
// i18next.addResourceBundle('en', 'namespace1', {
//   key: 'hello from namespace 1'
// });
