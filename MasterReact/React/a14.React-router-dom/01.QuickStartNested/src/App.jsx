import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import About from "./components/About";
import Topics from "./components/Topics";

export default function App() {
  
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/about" element={ <About />}>
          </Route>
          <Route path="/topics/*" element={ <Topics /> }>
          </Route>
          <Route path="/" element={ <Home />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}



