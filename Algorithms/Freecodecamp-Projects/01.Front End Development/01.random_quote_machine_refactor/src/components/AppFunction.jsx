import React, { useState, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { useDispatch, useSelector } from 'react-redux';
import ContainerNoData from './ContainerNoData';
import Container from './Container';
import '../Styles/App.scss';
//import { orderQuoteAsc, orderQuoteDesc } from './ContainerSlice';

// Help Links: https://www.pluralsight.com/guides/fetching-data-updating-state-react-class

function AppFunction () {

const [quotes, setquotes] = useState({ 
    back: null, 
    quotes: null, 
    font: null,
    house: null
});
   //dispatch = useDispatch();

  // initialQuotes = useSelector((state) => {
  //   return state.songs;
  // });

  // randomQuotes = (song) => {
  //   dispatch(addSong(song));
  // };

    const color1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const color2 = "#" + Math.floor(Math.random() * 16777215).toString(16);

    const divStyles = {
      background: `linear-gradient(to right, ${color1}, ${color2})`,
      FontFace: "Satisfy",
    };


    useEffect(() => {
        fetch(
            "https://gist.githubusercontent.com/Rockstar4400/" +
             "7678c57b0cebc5f740973ecb7a2691d0/raw/4cf729b3f97f292b803508dc0c2ed57e8dd15261/" +
             "quotes.json"
         )
           .then((response) => response.json())
           .then((data) =>
             setquotes({
               back: (document.body.style.background = divStyles.background),
               font: (document.body.style.fontFamily = divStyles.FontFace),
               quotes: data.quotes,
               house: ''
             })
           );
      });

    

     console.log(quotes);
    // if (this.state.quotes == null) {
    //   return <ContainerNoData />;
    // } else {
    //   return <Container quotes={this.state.quotes} />;
    // }

  }


export default AppFunction;