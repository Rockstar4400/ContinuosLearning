import React, { Component } from 'react';
import classes from './Card.module.css';

class Card extends Component {
    render() {
        return (
        <div className={classes.card}>
            {this.props.children}
        </div>);
    }
};
export default Card;