import * as React from 'react';
import ReactDom from 'react-dom/client';
import Toggler from "./component/03.Toggler";


// Source: https://www.robinwieruch.de/react-useeffect-hook/

const App = () => {

  const [toggle, setToggle] = React.useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <Toggler toggle={toggle} onToggle={handleToggle} />
    </div>
  );
};

const container = document.querySelector('#root')
const root = ReactDom.createRoot(container);
root.render(<App />);
