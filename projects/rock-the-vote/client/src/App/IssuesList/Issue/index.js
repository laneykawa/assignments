import React, { Component } from "react";

class Issue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayForm: false,
        }
    }

    toggleDisplay = () => {
        this.setState(prevState => ({ displayForm: !prevState.displayForm }));
    }

    render() {
        const { title, _id, description } = this.props;
        console.log(this.props)

        return (
            <div className="eventSection" >
                WHY WONT YOU SHOW UP???
                <p>Issue Name: {title}</p>
                <p>Description: {description}</p>
                {/* <button className="button" onClick={() => removeIssue(_id)}>Delete</button> */}
            </div>
        )
    }
}
export default Issue; 