import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initI18nLocal } from './i18n';

initI18nLocal();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
