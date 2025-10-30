import './App.css'
import ContainerNoData from './components/ContainerNoData'
import ContainerWithData from './components/ContainerWithData'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadQuotes } from './store/slices/quoteSlice';
import { store } from './store';

let URL = "https://gist.githubusercontent.com/Rockstar4400/7"+
          "678c57b0cebc5f740973ecb7a2691d0/raw/" +
          "281b63ab43589d538a75cae2d9f9ab35e632e789/quotes.json";

function App() { 

  const dispatch = useDispatch();
  
  fetch(URL)
  .then(response => response.json())
  .then(jsonData => dispatch(loadQuotes(jsonData)))
  .catch(() => {
    console.log("Error")
  })

  console.log(store.getState().quotes["data"].quotes[0])

  if(store.getState().quotes["data"] !== undefined){
    return <ContainerWithData></ContainerWithData>
  }else
  return <ContainerNoData />
}

export default App
