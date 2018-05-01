import React from "react";

import { Switch, Route } from "react-router-dom";

import Header from "./Header/";
import Footer from "./Footer/";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

function App(props) {
    return (
        <div className="divr">
            <Header></Header>
            <div className="wrapper">
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/about/" component={About}></Route>
                    <Route path="/services" component={Services}></Route>
                </Switch>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default App;