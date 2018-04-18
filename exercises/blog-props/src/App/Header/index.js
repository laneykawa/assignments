import React from "react"; 
import Nav from "../Nav/"

function Header (){
    return (
        <div>
            <Nav />
            <header className="header">
                <h1>Clean Blog</h1>
                <h2>A Blog Theme by Start Bootstrap</h2>
            </header>
        </div>
    )
}

export default Header; 