import React from "react";
import ReactDom from 'react-dom/client';

const App = () => {
  const [isOpen, setOpen] = React.useState(
    JSON.parse(localStorage.getItem('is-open')) || false
  );

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  React.useEffect(() => {
    localStorage.setItem('is-open', JSON.stringify(isOpen));
  }, [isOpen]);

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {isOpen && <div>Content</div>}
    </div>
  );
};

const container = document.querySelector('#root')
const root = ReactDom.createRoot(container);
root.render(<App />);
