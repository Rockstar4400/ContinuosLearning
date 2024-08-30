import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { useDispatch, useSelector } from 'react-redux';
import ContainerNoData from './ContainerNoData';
import Container from './Container';
import '../Styles/App.scss';
import { loadQuotes } from '../store';

// Help Links: https://www.pluralsight.com/guides/fetching-data-updating-state-react-class

class App extends React.Component {

   dispatch = useDispatch();

   allQuotes = useSelector((state) => {
      return state.quotes;
   });

  componentDidMount() {
    const color1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const color2 = "#" + Math.floor(Math.random() * 16777215).toString(16);

    const divStyles = {
      background: `linear-gradient(to right, ${color1}, ${color2})`,
      FontFace: "Satisfy",
    };

    fetch(
       "https://gist.githubusercontent.com/Rockstar4400/" +
        "7678c57b0cebc5f740973ecb7a2691d0/raw/4cf729b3f97f292b803508dc0c2ed57e8dd15261/" +
        "quotes.json"
    )
      .then((response) => response.json())
      .then((data) =>
        this.dispatch(loadQuotes(data))
        // this.setState({
        //   back: (document.body.style.background = divStyles.background),
        //   font: (document.body.style.fontFamily = divStyles.FontFace),
        //   quotes: data.quotes,
        //   house: ''
        // })
        
      );
  }
  
  render() {
    
    if (this.state.quotes == null) {
      return <ContainerNoData />;
    } else {
      return <Container quotes={this.state.quotes} />;
    }
  }
}

export default App;