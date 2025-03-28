import { useContext } from 'react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';

const MainNavegation = () => {

    const favoritesCtx = useContext(FavoritesContext);

        return (
                <header className={classes.header}>
                    <div className={classes.logo}>React Meetups</div>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/new-meetup'>New Meeting</Link>
                            </li>
                            <li>
                                <Link to="/favorites">
                                    Favorites
                                <span className={classes.badge}>
                                    {favoritesCtx.totalFavorites}</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            );
};
export default MainNavegation;