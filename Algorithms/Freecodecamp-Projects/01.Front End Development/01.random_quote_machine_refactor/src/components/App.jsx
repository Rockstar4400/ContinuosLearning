import React, { useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import ContainerNoData from "./ComponentsStructure/ContainerNoData";
import Container from "./ComponentsStructure/Container";
//import "../Styles/App.scss";
import "../styles/AppChange.scss"
import { useSelMethod } from "../app/features/logic/GeneralMethods";

function App() {
  
  const quotes = useSelMethod();

  if (quotes.length == 0) {
    return <ContainerNoData />;
  } else {
    return <Container />;
  }
}

export default App;
