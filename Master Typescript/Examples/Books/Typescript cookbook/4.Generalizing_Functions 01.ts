
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

// Same application, different scenario, entirely different file
type AllowedElements = {
  video: HTMLVideoElement;
  audio: HTMLAudioElement;
  canvas: HTMLCanvasElement;
};

function isElementAllowed(
  collection: AllowedElements,
  elem: string
): elem is keyof AllowedElements {
  return elem in collection;
}

function selectElement(collection: AllowedElements, elem: string) {
  if (isElementAllowed(collection, elem)) {
    // elem is keyof AllowedElements
    collection[elem]; // access ok
  }
}

