import React from 'react';
import { useEffect } from 'react';

const Portfolio = (props)  => {

    useEffect(() => {
        window.onpopstate = () => {
            props.setPressed(true)
        }
    })

    return (
            <div>Portfolio</div>
        );
};

export default Portfolio;

