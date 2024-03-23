import React from 'react';

import classes from '../meetup/MeetupItem.module.css';
import Card from '../ui/Card';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

const MeetupItem = (props) => {
    const favoritesCtx =  useContext(FavoritesContext);

    const itemFavorite = favoritesCtx.itemFavorite(props.id);

    function toogleFavorite(){
        if(itemFavorite) {
            favoritesCtx.removeFavorite(props.id);
        }else{
            favoritesCtx.addFavorite({
                key: props.id,
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address
            });
        }
    }
        return (
        <li className={classes.item}>
            <Card>
            <div className={classes.image}>
                <img src={props.image} 
                alt={props.title}></img>
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toogleFavorite}>
                    {itemFavorite ? 'Remove' : 'Add'}
                </button>
            </div>
            </Card>
        </li>
        );
};
export default MeetupItem;