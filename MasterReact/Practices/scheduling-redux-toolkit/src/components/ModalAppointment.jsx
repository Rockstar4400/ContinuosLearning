import { Component } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux'



let Padding = styled.div`
    padding-bottom: 2vw;
`

const initialState = {
    name: '', 
    number: '', 
    emails: '', 
    bookingNotes:''
}

class ModalAppointment extends Component {

state = {
name: '',
number: '',
emails: '',
bookingNotes:'',
}

resetModalValues = () => {
this.setState(initialState);
}

storeValue = (e) => {
this.setState({[e.target.name]: e.target.value})
}


render() {
const {name, number, emails, bookingNotes} = this.state;
const date = this.props.dateReducer;
return (
<div>
<div className= {this.props.modal_visibility}>
<div className="modal-background"></div>
<div className="modal-card">
<header className="modal-card-head has-text-left">
<div className="modal-card-title"> 
<p className="is-size-5"> 60 MINUTE CALL </p>
<p className="is-size-6"> <span className="iconis-small"> 
<i className="fas fa-clock"></i> 1 hour</span> </p>
<p className="is-size-6"> <span> 
<i className="fas fa-location-dot"></i>
 Online Zoom Call 
</span>
</p>
</div> 
<span className="column is-two-fifths"> 
<p> {date} </p> 
<p> {this.props.time} 
- {parseInt(this.props.time.substring(0,2)) === 12 ? 1 : 
parseInt(this.props.time.substring(0,2)) + 1} 
{parseInt(this.props.time.substring(0,2)) > 11 || 
(this.props.time.slice(-2) === "pm") ? "pm" : "am"} </p>  
<p 
className="is-clickable" 
onClick={this.props.make_modal_invisible}>
Edit timeslot 
<i className="fas fa-pencil is-small  has-text-danger"></i> 
</p> 
</span>

<button 
onClick={this.props.make_modal_invisible} 
className="delete" aria-label="close">
</button>
</header>

<section className="modal-card-body  has-text-left  ">
<h1 className="subtitle is-3  has-text-weight-semibold">
Contact
</h1>
<div className="field">
<label className="label">
Name*
</label>
<div className="control">
<input 
onChange={this.storeValue} 
className="input" 
type="text" 
name="name" 
value={name}
placeholder="e.g Alex Smith"/>
</div>
</div>

<Padding> </Padding>

<div className="field">
<label className="label">
Phone Number
</label>
<div className="control">
<input 
onChange={this.storeValue} 
className="input" 
type="tel" 
name="number" 
value={number} 
placeholder="e.g. 999-999-999"/>
</div>
</div>

<div 
className="
field
is-flex-direction-row
is-justify-content-center "> 
<label className="label">
E-mail* 
</label>
<div className="columns is-gapless">
<div className="column is-four-fifth">
<div className="control">
<input 
onChange={this.storeValue} 
className="input" 
type="email" 
name="emails" 
value={emails}/>
</div>
</div>  
<span className="column is-one-fifth" >
<button className="button"> Add Guests</button> </span>
</div>

</div>

<div className="field">
<label className="label"> Notes for booking </label>
<div className="control">
<textarea 
onChange={this.storeValue} 
className="textarea" 
type="tel" 
name="bookingNotes" 
value={bookingNotes} 
placeholder="optional"> </textarea>
</div>
</div>

</section>

<footer className="modal-card-foot">
<button 
onClick={this.props.on_tile_select} 
className="
button 
is-danger  
is-rounded  
is-fullwidth">
Book It 
</button>
<button 
onClick={() => {this.props.make_modal_invisible()}} 
className="
button  
is-rounded">
Cancel
</button>
</footer>
</div>
</div>
</div>
);
}
}

const mapStateToProps = state => {
    return {
        dateReducer: state.dateReducer
    }
}

export default connect(mapStateToProps)(ModalAppointment);