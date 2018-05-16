import React, { Component } from "react";
import { connect } from "react-redux";
import { getIssues, removeIssue, addIssue, editIssue } from "../../redux/issues"; 

import Issue from "./Issue/";

class IssuesList extends Component {   
    componentDidMount() {
        this.props.getIssues(this.props);
    }

    render() {
        const { data, loading, errMsg, removeIssue, addIssue, editIssue } = this.props;
        const issueComponents = data
            .sort((a,b) => b.voteCount - a.voteCount)
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
                <div className="issues">
                    {issueComponents}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return state.issues;
}

export default connect(mapStateToProps, { getIssues, removeIssue, addIssue, editIssue })(IssuesList);
