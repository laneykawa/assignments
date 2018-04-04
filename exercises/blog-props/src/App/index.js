import React from "react"; 
import BlogList from "./BlogList/"; 
import Header from "./Header/";
import Footer from "./Footer/";
import BlogPost from "./BlogPost/";

function App (){
    return (
        <div>
            <Header />  
            <BlogList />  
                <BlogPost />
            <Footer />  
        </div>
    )
}


export default App; 