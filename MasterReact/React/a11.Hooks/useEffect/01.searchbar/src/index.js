import React, { useState } from "react";
import ReactDom from 'react-dom/client';

import Search from './components/Search';
import List from "./components/List";


const App = () => {

  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [useSearch, setSearch ] = useState(
    localStorage.getItem('search') || ''
  );

  React.useEffect(() => {
    localStorage.setItem('search', useSearch);
  },[useSearch]);

  const handleSearch = (e) => {
    setSearch(e.target.value);

    localStorage.setItem('search', e.target.value)
  }
   
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search search={useSearch} onSearch={handleSearch} />
      <hr />
      <List list={stories} />
    </div>
  );
};


const container = document.querySelector('#root')
const root = ReactDom.createRoot(container);
root.render(<App />);
