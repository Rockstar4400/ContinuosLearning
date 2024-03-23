import React, { useState } from 'react';

// SAMPLE 2
// Update this example so that clicking the <button> increments the
// counter value.

const IncrementButton = (props) =>
  <button onClick = {props.increase}>
    Add One
  </button>;

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);

  const increase = () => {
    setCounterValue(counterValue + 1)
  }

  return (
    <div>
      Current Value: {counterValue}
      <br />
      <IncrementButton increase={increase}/>
    </div>
  );
};

export default Counter;