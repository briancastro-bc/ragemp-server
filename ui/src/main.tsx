import 'reflect-metadata';

// import '@ioc/core';

import './index.css';

import i18n from 'i18next';

import { StrictMode, } from 'react';
import { createRoot, } from 'react-dom/client';
import { initReactI18next,  } from 'react-i18next';

import App from './App';

import es from '@assets/locales/es.json';
import en from '@assets/locales/en.json';

i18n
  .use(initReactI18next)
  .init<any>({
    lng: 'es',
    debug: true,
    resources: {
      es,
      en,
    },
    lowerCaseLng: true,
    returnNull: true,
    returnObjects: true,
    interpolation: {
      escapeValue: false,
    },
  });

// if (!window.mp) {
//   window.mp = mp;
// }

function render(): void {
  const rootElement: HTMLElement | null = document.getElementById('root');

  const root = createRoot(rootElement!);
  root.render(
    <StrictMode>
      <App/>
    </StrictMode>
  );
}

render();