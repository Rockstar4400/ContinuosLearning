import React, { Component } from "react";
import classes from "../meetup/NewMeetupForm.module.css";
import Card from "../ui/Card";
import { useRef } from "react";

const NewMeetupForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function onSubmitHandler(e) {
    e.preventDefault();

    const ET = titleInputRef.current.value;
    const EI = imageInputRef.current.value;
    const EA = addressInputRef.current.value;
    const ED = descriptionInputRef.current.value;

    const meetupData = {
        title: ET,
        image: EI,
        address: EA,
        description: ED
    }

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup title</label>
          <input type="text" required id="title" ref={titleInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5" ref={descriptionInputRef}></textarea>
          <div className={classes.actions}>
            <button>Add Meetup</button>
          </div>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupForm;
