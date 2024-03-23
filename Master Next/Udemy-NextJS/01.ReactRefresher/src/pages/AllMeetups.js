
import React, { Component } from 'react';
import MeetupList from '../components/meetup/MeetupList';
import { useState, useEffect } from 'react';

const AllMeetings = () => {

    const [loadingState, setLoadingState] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState({});

    useEffect(() => {
      setLoadingState(true);
      fetch('https://comisionfederal-188703.firebaseio.com/meetups.json')
      .then(response => {
          return response.json();
      }).then(data => {
        const meetups = [];

        for(const key in data){
          const meetup = {
            id: key,
            ...data[key]
          };

          meetups.push(meetup);
        }
        setLoadingState(false);
        setLoadedMeetups(data);
      })
    },[]);
    
    if(loadingState){
      return (
        <section>
          <p>Loading...</p>
        </section>
      );
    }

    return (
        <section>
            <h1>All Meetings</h1>
            <MeetupList meetup={loadedMeetups} />
        </section>
    );
};
export default AllMeetings;