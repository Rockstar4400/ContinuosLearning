import React, { Component } from 'react';
import Svg from './Svg';
import SvgHamburger from './SvgHamburger';

class Nav extends Component {
    render() {
        return (
                <ul>
                    <li>
                        <div className='Header'>
                        <Svg className='Svglogo'></Svg>
                        <a href="#a" className='Textheader'>Health Overview</a>
                        <SvgHamburger className='Hamburger'></SvgHamburger>
                        </div>
                    </li>
                </ul>
            );
        }
    };

export default Nav;