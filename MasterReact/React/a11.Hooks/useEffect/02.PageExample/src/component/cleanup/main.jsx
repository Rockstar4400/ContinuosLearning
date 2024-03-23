import * as React from 'react';
import ReactDom from 'react-dom/client';
import Toggler from "./component/03.Toggler";


// Source: https://www.robinwieruch.de/react-useeffect-hook/

const App = () => {

    const [timer, setTimer] = React.useState(0);

    React.useEffect(() => {
      const interval = setInterval(
        () => setTimer(timer + 1), 1000);
  
      return () => clearInterval(interval);
    }, [timer]);
  
    return <div>{timer}</div>;
};

const container = document.querySelector('#root')
const root = ReactDom.createRoot(container);
root.render(<App />);
