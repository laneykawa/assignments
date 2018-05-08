import React, { Component } from "react";
import { connect } from "react-redux";
import { getIssues, removeIssue, addIssue } from "../../redux/issues"; 

import Issue from "./Issue/";

class IssuesList extends Component {   
    componentDidMount() {
        this.props.getIssues(this.props);
        console.log("props", this.props)
    }

    render() {
        const { data, loading, errMsg, removeIssue, addIssue, editIssue } = this.props;
        const issueComponents = data
            // .sort((a,b) => a.name.localeCompare(b.name))
            .map((issue, i) => <Issue key={issue._id} editIssue={editIssue} removeIssue={removeIssue}{...issue}></Issue>)

        if (loading) {
            return (
                <div>...Loading</div>
            )
        } else if (errMsg) {
            return (
                <div>{errMsg}</div>
            )
        } else {
            return (
                <div className="artist">
                    Ok, so my list is showing up... but my component won't show...
                    {issueComponents}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return state.issues;
}

export default connect(mapStateToProps, { getIssues, removeIssue, addIssue })(IssuesList);
