import React from 'react';
import NewMeetupForm from '../components/meetup/NewMeetupForm';
import { useNavigate  } from 'react-router-dom';

const NewMeetup = () =>{

    const navegate = useNavigate();    

    const addMeetupHandler = (meetupData) =>{
            fetch('https://comisionfederal-188703.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navegate('/');
        });
    }

        return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
        );
};
export default NewMeetup;