import React from "react";
import ReactDOM from "react-dom"; 

import App from "./App"

import axios from "axios"; 
axios.get("/bounties")

ReactDOM.render(<App/>, document.getElementById("root")); 