import React from 'react';
import MeetupItem from './MeetupItem';

import classes from './MeetupList.module.css'

const MeetupList = (props) => {
    return (
    <ul className={classes.list}>
        {Object.entries(props.meetup).map(e => {
            return <MeetupItem
            key={e[0]}
            id={e[0]}
            image={e[1].image}
            title={e[1].title}
            address={e[1].address}
            description={e[1].description}
            />
        })}
    </ul>);
};
export default MeetupList;