import React, { Component } from 'react';
import classes from './Layout.module.css';
import MainNavigation from '../layout/MainNavegation';

class Layout extends Component {

    render() {
        return (
        <div >
            <MainNavigation />
            <main className={classes.main}>
                {this.props.children}
            </main>
        </div>);
    }
};
export default Layout;