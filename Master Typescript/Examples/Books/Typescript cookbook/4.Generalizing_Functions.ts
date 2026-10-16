
/*
  Problem:
  You have two functions which work the same, but on different, 
  and largely incompatible types.  

  Solution
  Generalize their behavior using generics.
*/

type Languages = {
  de: URL;
  en: URL;
  pt: URL;
  es: URL;
  fr: URL;
  ja: URL;
};

function isLanguageAvailable(collection: Languages, lang: string): 
lang is keyof Languages {
  return lang in collection;
}

function loadLanguage(collection: Languages, lang: string) {
  if (isLanguageAvailable(collection, lang)) {
    // lang is keyof Languages
    collection[lang]; // access ok!
  }
}