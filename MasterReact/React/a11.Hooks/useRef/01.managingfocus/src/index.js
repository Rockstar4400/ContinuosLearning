import React from "react";
import ReactDom from 'react-dom/client';

// import Focus from "./components/Focus";
// import Selection from "./components/Selection";
// import Media from "./components/Media";
import Animations from "./components/Animations";

// Source: https://nordschool.com/react-refs/

const App = () => {
    
  return (
    // <Focus />
    // <Selection />
    // <Media />
    <Animations />
  );
};

const container = document.querySelector('#root')
const root = ReactDom.createRoot(container);
root.render(<App />);
