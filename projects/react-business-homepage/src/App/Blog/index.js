import React from "react";

function Blog (props){
    console.log(props);
    const {title, body, postClass, headerClass} = props; 
    return (
        <div className={headerClass}>
            <h3 className={postClass}>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Blog; 
