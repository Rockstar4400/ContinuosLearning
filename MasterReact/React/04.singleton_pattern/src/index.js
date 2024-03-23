
// Source: https://www.freecodecamp.org/news/singleton-design-pattern-with-javascript/

import globalStyle from "./globalStyles";

const globalStateElem = document.querySelector(".global-state #selected-color");

globalStateElem.innerHTML = globalStyle.getPropertyByName("color");
