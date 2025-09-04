import React from 'react';
import './App.css';
import { useState } from 'react';
import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {

  const renderItems = articles
  .sort((a, b) => b.upvotes - a.upvotes)
  .map((e) => e)

  const [ useArticles, setArticles] = useState(renderItems);

  const orderUpvoted = () =>{
    setArticles( articles
    .sort((a, b) => b.upvotes - a.upvotes)
    .map((e) => e))
  }

  const mostRecent = () => {
    setArticles( articles
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map((e) => e))
  }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button 
                        data-testid="most-upvoted-link" 
                        className="small"
                        onClick={orderUpvoted}
                        >Most Upvoted</button>
                <button 
                        data-testid="most-recent-link" 
                        className="small"
                        onClick={mostRecent}
                        >Most Recent</button>
            </div>
            <Articles articles={useArticles}/>
        </div>
    );

}

export default App;
