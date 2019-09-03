import i18n from "i18next";

import LanguageDetector from "i18next-browser-languagedetector";

import XHR from "i18next-xhr-backend";

 

i18n

    .use(XHR)

    .use(LanguageDetector)

    .init({

        // we init with resources

        fallbackLng: {

          

            default: ['en'],

        },

        debug: true,

        interpolation: {

            escapeValue: false // not needed for react!!

        },

        backend: {

           // loadPath: `${window.location.origin + window.location.pathname}/locales/{{lng}}/{{ns}}.json`

            loadPath: `./locales/{{lng}}/{{ns}}.json`

        },

        react: {

            wait: true,

            useSuspense: false

        }

    });

 

export default i18n;