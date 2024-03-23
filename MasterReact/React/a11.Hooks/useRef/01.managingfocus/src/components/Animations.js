import React, { useEffect, useState, useRef } from 'react';

function Animations() {
  const [background, setBackground] = useState('white');

  const divRef = useRef();

  function onScroll() {
    const div = divRef.current;
    const { y } = div.getBoundingClientRect();
    const backgroundColor = y <= 0 ? 'white' : 'pink';
    setBackground(backgroundColor);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div ref={divRef} style={{ height: '120vh', background: background }}>
      Scroll to turn background white.
    </div>
  );
}

export default Animations;