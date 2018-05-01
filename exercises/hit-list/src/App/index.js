import React from "react";
import Header from "./Header"; 
import Footer from "./Footer"; 
import Data from "./Data"

function App (){
    return (
        <div>
            <Header></Header>
            <Data className="data"></Data>
            <Footer></Footer>
       </div>
    )
}

export default App; 