import React, { useRef } from 'react';

const Focus = () => {
  const inputRef = useRef(null);
  function focusTitle() {
    inputRef.current.focus();
  }

  return (
    <div>
      <label>You have 3 wishes...</label>
      <input ref={inputRef} />
      <button onClick={focusTitle}>Focus</button>
    </div>
  );
};

export default Focus;