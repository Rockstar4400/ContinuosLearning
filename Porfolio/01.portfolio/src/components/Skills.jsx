import React from 'react';
import { useEffect } from 'react';

const Skills = (props)  => {
    
    useEffect(() => {
        window.onpopstate = () => {
            props.setPressed(!true)
        }
    })

    return (
        <div>Skills</div>
        );
    };

export default Skills;