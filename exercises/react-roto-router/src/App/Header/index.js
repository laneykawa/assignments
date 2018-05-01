import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <header>
            <h1>Welcome to Roto-Router!</h1>
            <nav>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/services">Services</Link>
            </nav>
        </header>
    )
}

export default Header;