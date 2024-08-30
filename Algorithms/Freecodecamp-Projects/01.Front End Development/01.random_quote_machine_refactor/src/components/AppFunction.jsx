import React, { useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import { useDispatch, useSelector } from "react-redux";
import ContainerNoData from "./ContainerNoData";
import Container from "./Container";
import "../Styles/App.scss";
import { loadQuotes } from "../store";

// Help Links: https://www.pluralsight.com/guides/fetching-data-updating-state-react-class

function AppFunction() {
  const dispatch = useDispatch();

  const quotes = useSelector((state) => {
    return state.quotes;
  });

  const randomQuotes = (quote) => {
    dispatch(loadQuotes(quote));
  };

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/Rockstar4400/" +
        "7678c57b0cebc5f740973ecb7a2691d0/raw/4cf729b3f97f292b803508dc0c2ed57e8dd15261/" +
        "quotes.json"
    )
      .then((response) => response.json())
      .then((data) => randomQuotes(data));
  }, []);

  if (quotes.length == 0) {
    console.log(quotes);
    return <ContainerNoData />;
  } else {
    console.log(quotes);
    return <Container />;
  }
}

export default AppFunction;
