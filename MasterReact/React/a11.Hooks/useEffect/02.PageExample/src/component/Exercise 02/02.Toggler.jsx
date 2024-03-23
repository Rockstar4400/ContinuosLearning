import * as React from 'react';

const Toggler = ({ toggle, onToggle }) => {
    const [title, setTitle] = React.useState('Clicked');


    React.useEffect(() => {
        console.log('I still run only if toggle changes (and on mount).');
    }, [toggle, title]);

    const handleChange = (event) => {
        setTitle(event.target.value);
      };

    return (
      <div>
        <input type="text" value={title} onChange={handleChange} />

        <button type="button" onClick={onToggle}>
          Toggle
        </button>
  
        {toggle && <div>{title}</div>}
      </div>
    );
};

export default Toggler;