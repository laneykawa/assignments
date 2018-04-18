import React from "react"; 
import { Link } from "react-router-dom"

function Header (props){
    return (
        <header>
            {/* <img className="header-img" src="http://art.cafimg.com/images/Category_209/subcat_45436/byrne-dcvsmarvel.jpg" alt=""/> */}
            <h1 className="main-header">Pick Your Marvel Character!!!</h1>
            <nav>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/contact">Trailers</Link>
            </nav>
        </header>
    )
}

export default Header; 