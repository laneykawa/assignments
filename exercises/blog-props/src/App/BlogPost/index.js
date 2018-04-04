import React from "react";

function BlogPost (props){
    console.log(props);
    const {title, body, publishDate, postClass, headerClass} = props; 
    return (
        <div className={headerClass}>
            <h3 className={postClass}>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default BlogPost; 
