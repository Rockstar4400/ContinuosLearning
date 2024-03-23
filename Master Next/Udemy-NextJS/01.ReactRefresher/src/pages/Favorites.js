
import { useContext } from 'react';
import React, { Component } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetup/MeetupList';

const Favorites = () => {
    const favoritesCtx = useContext(FavoritesContext);

    let content;
    
    if(favoritesCtx.totalFavorites === 0){
        content = <p>No favorites</p>
    }
    else{
        content = <MeetupList
        meetup={favoritesCtx.favorites}
        ></MeetupList>
    }
    console.log(content)
    return (
    <section>
        <h1>My Favorites</h1>
        {content}
    </section>);

};
export default Favorites;