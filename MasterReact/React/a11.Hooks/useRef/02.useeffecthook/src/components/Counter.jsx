import React from "react";

function Counter () {
    const [count, setCount] = React.useState(0);

    const ref = React.useRef(0);

    const handleIncrement = () => {
        ref.current++;
        setCount(count + 1);
    };

    const handleDecrement = () => {
        ref.current++;
        setCount(count - 1);
    };

    return (
        <>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>

        <div>Count: {count}</div>
        <div>Buttons {ref.current} times clicked</div>
        </>
    );
}

export default Counter;
