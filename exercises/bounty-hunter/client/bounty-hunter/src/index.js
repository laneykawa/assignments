import React from "react";
import ReactDOM from "react-dom"; 

import axios from "axios"; 

axios.get("/cats")

ReactDom.render(<App/>, document.getElementById("root")); 