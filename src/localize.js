// Borrowed from:
// https://github.com/custom-cards/boilerplate-card/blob/master/src/localize/localize.ts

import * as en from './translations/en.json';
import * as uk from './translations/uk.json';
import * as nl from './translations/nl.json';
import * as de from './translations/de.json';
import * as fr from './translations/fr.json';
import * as pl from './translations/pl.json';
import * as it from './translations/it.json';
import * as ru from './translations/ru.json';
import * as es from './translations/es.json';
import * as cs from './translations/cs.json';
import * as hu from './translations/hu.json';
import * as he from './translations/he.json';
import * as sv from './translations/sv.json';
import * as nb from './translations/nb.json';
import * as nn from './translations/nn.json';
import * as da from './translations/da.json';
import * as ko from './translations/ko.json';
import * as fi from './translations/fi.json';
import * as ca from './translations/ca.json';
import * as zh_Hant from './translations/zh-Hant.json';
import * as zh_TW from './translations/zh-Hans.json';
import * as vi from './translations/vi.json';
import * as lt from './translations/lt.json';
import * as zh_Hans from './translations/zh-Hans.json';
import * as zh_CN from './translations/zh-Hans.json';
import * as ro from './translations/ro.json';

var languages = {
  en,
  uk,
  nl,
  de,
  fr,
  pl,
  it,
  ru,
  es,
  cs,
  hu,
  he,
  sv,
  nb,
  nn,
  da,
  ko,
  fi,
  ca,
  zh_Hant,
  zh_TW,
  vi,
  lt,
  zh_Hans,
  zh_CN,
  ro
};

const DEFAULT_LANG = 'en';

export default function localize(string, search, replace) {
  const [section, key] = string.toLowerCase().split('.');

  let langStored;

  try {
    //localStorage store the language code that follows the BCP47 format
    langStored = JSON.parse(localStorage.getItem('selectedLanguage'));
  } catch (e) {
    langStored = localStorage.getItem('selectedLanguage');
  }

  //language code from 'navigator.language' follows RFC1766 format
  const lang = (langStored || navigator.language || DEFAULT_LANG)
    .replace(/['"]+/g, '')
    .replace('-', '_');

  let tranlated;

  try {
    tranlated = languages[lang][section][key];
  } catch (e) {
    tranlated = languages[DEFAULT_LANG][section][key];
  }

  if (tranlated === undefined) {
    tranlated = languages[DEFAULT_LANG][section][key];
  }

  if (tranlated === undefined) {
    return;
  }

  if (search !== '' && replace !== '') {
    tranlated = tranlated.replace(search, replace);
  }

  return tranlated;
}
