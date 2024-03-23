import React from "react";
import { Route, BrowserRouter, Routes} 
from "react-router-dom";
import Home from "./components/HomePage";
import About from './components/About';
import Contact from './components/Contact';

const App = () => {

  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route exact path="/about" element={ <About /> } />
            <Route exact path="/contact" element={ <Contact /> } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
