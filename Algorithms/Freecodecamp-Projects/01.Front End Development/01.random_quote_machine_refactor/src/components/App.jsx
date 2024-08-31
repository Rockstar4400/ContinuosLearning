import React, { useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import ContainerNoData from "./ContainerNoData";
import Container from "./Container";
import "../Styles/App.scss";
import { useSelMethod } from "../app/features/logic/GeneralMethods";


// Help Links: https://www.pluralsight.com/guides/fetching-data-updating-state-react-class
// Source help: https://blog.logrocket.com/using-localstorage-react-hooks/

function App() {
  
  const quotes = useSelMethod();

  if (quotes.length == 0) {
    return <ContainerNoData />;
  } else {
    return <Container />;
  }
}

export default App;
