import React from 'react';
import { useEffect } from 'react';

const Experience = (props)  => {

    useEffect(() => {
        window.onpopstate = () => {
            props.setPressed(true)
        }
    })

    return (
            <div>Experience</div>
        );
};

export default Experience;

