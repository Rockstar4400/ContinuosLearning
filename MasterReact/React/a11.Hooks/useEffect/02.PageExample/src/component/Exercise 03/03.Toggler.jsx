import * as React from 'react';

const Toggler = ({ toggle, onToggle }) => {

  const calledOnce = React.useRef(false);

  React.useEffect(() => {
    if (calledOnce.current) {
      return;
    }

    if (toggle === false) {
      console.log('I run only once if toggle is false.');

      calledOnce.current = true;
    }
  }, [toggle]);

    return (
      <div>
        <button type="button" onClick={onToggle}>
          Toggle
        </button>
  
        {toggle && <div>Clicked!</div>}
      </div>
    );
};

export default Toggler;