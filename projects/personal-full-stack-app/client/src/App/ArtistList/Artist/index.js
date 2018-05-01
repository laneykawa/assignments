import React, { Component } from "react";
import EditForm from "./EditForm/";
import EventForm from "./EventForm";
import EventList from "./EventList";

class ArtistDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayForm: false,
            displayFormEvent: false
        }
    }

    toggleDisplay = () => {
        this.setState(prevState => ({ displayForm: !prevState.displayForm }));
    }

    toggleDisplayEvent = () => {
        this.setState(prevState => ({ displayFormEvent: !prevState.displayFormEvent }));
    }

    render() {
        const { name, _id, img, bookingCost, bio, removeArtist } = this.props;
        return (
            <div className="artistSection" >
                <h1>{name}</h1>
                <div className="artistImgContainer">
                    <img name="artistImg" src={img} alt={name}></img>
                </div>
                <p>{bio}</p>
                <p>${bookingCost} </p>
                <button className="button" onClick={() => removeArtist(_id)}>Delete</button>
                <button className="button" onClick={this.toggleDisplay}>Edit</button>
                {
                    this.state.displayForm ? <EditForm toggleDisplay={this.toggleDisplay} {...this.props} /> : null
                }
                <button className="button" onClick={this.toggleDisplayEvent}>Add Event</button>
                {
                    this.state.displayFormEvent ? <EventForm toggleDisplayEvent={this.toggleDisplayEvent}{...this.props} /> : null
                }
                <EventList></EventList>
            </div>
        )
    }
}
export default ArtistDisplay; 