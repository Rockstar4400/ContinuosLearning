import React, { useState } from 'react';

// SAMPLE 2
// Update this example so that clicking the <button> increments the
// counter value.

const IncrementButton = () =>
  <button>
    Add One
  </button>;

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);

  return (
    <div>
      Current Value: {counterValue}
      <br />
      <IncrementButton />
    </div>
  );
};

export default Counter;