import * as React from 'react';

const Toggler = ({ toggle, onToggle }) => {

    React.useEffect(() =>{
        console.log('I run on every render: mount + update.')
    },[]);

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