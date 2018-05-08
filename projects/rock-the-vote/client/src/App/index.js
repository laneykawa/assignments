import React from "react";

import Header from "./Header"; 
import AddIssueForm from "./AddIssueForm"; 
import IssuesList from "./IssuesList";

function App (props) {
    return (
        <div>
            <Header />
            <AddIssueForm />
            <IssuesList />
        </div>
    )
}

export default App; 
