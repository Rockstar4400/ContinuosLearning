import React from 'react';
import { useEffect } from 'react';

const Current = (props)  => {

    useEffect(() => {
        window.onpopstate = () => {
            props.setPressed(true)
        }
    })

    return (
            <div>Current</div>
        );
};

export default Current;

