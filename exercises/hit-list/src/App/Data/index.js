import React, { Component } from "react";
import DataList from "./DataList";

import axios from "axios";

const hitListUrl = "http://api.vschool.io:6543/hitlist.json";

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            errMsg: "",
            loading: true
        }
    }

    componentDidMount() {
        axios.get(hitListUrl)
            .then(response => {
                this.setState({ 
                    people: response.data,
                    loading: false
                })
            })
            .catch(err => {
                this.setState({
                    errMsg: err.message,
                    loading: false
                })
            })
    }
    render() {
        const { people, errMsg, loading } = this.state;
        if (loading) {
            return <div>...Loading</div>
        } else {
            if (errMsg) {
                return <p>Sorry, you're data is not available</p>
            } else {
                return (
                    <DataList people={people}></DataList>
                )
            }
        }
    }
}
export default Data;