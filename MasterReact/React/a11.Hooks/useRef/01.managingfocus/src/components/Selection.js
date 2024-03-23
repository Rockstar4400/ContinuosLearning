import React, { useRef } from 'react';

const Selection = () => {
  const inputRef = useRef(null);

  function selectAll() {
    const hasText = inputRef.current.value.length > 0;

    if (hasText) {
      inputRef.current.select();
    }
  }

  return (
    <div>
      <label>What is the meaning of life?</label>
      <textarea ref={inputRef} />
      <button onClick={selectAll}>Select All</button>
    </div>
  );
};

export default Selection;