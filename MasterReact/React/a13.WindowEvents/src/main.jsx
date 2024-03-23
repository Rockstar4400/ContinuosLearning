import React from "react";
import ReactDom from 'react-dom/client';
import FileNamer from "./FileNamer";

const App = () => {
  return (
    <div>
      <FileNamer />
    </div>
  );
};

const container = document.querySelector('#root')
const root = ReactDom.createRoot(container);
root.render(<App />);
