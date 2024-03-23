import React from 'react';
import { useEffect } from 'react';

const About = ()  => {

    useEffect(() => {
        window.onpopstate = () => {
            setPressed(true)
            //console.log(props.pressed);
        }
    }
    ,[ pressed ]
    );

    

    return (
            <div>About</div>
        );
};

export default About;

