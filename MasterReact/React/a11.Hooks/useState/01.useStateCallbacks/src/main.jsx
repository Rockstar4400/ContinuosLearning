import * as React from 'react';
import ReactDom from 'react-dom/client';
import useStateWithCallback from 'use-state-with-callback';

// Source: https://www.robinwieruch.de/react-usestate-callback/

const App = () => {
  const [count, setCount] = useStateWithCallback(0, count => {
    if(count > 1){
      console.log('Threshold of over 1 reached.');
    }else {
      console.log('No threshold reached.');
    }
  });

  React.useEffect(() => {
    if (count > 1) {
      console.log('Threshold of over 1 reached.');
    } else {
      console.log('No threshold reached.');
    }
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>

      <button type="button" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
};

const container = document.querySelector('#root')
const root = ReactDom.createRoot(container);
root.render(<App />);
