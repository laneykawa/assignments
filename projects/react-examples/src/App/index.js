import React from "react";
import Blog from "./Blog/";
// import Content from "./Content";
// import Footer from "./Footer";

function App() {
    const blogPost1 = {
        title: "Blog Post 1",
        body: "llajljflsjfldj",
        postClass: "red",
        headerClass: "group"
    }

    const blogPost2 = {
        title: "Blog Post 2",
        body: "sdfjsdlfdf",
        postClass: "blue"
    }

    return (
        <div>
            <Blog {...blogPost1}></Blog>
            <Blog {...blogPost2}></Blog>
        </div>
    )
}

export default App; 