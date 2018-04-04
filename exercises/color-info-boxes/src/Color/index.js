import React from "react";

function Color (props){
    const { backgroundColor, title, subTitle, info } = props;

    return (
    <div style={{backgroundColor: backgroundColor, textAlign: "center", width: "40%", margin: "0 auto", padding: "30px"}}>
        <h1 className={backgroundColor}>{title}</h1>
        <h2>{subTitle}</h2>
        <h3>{info}</h3>
    </div>
    )
}

export default Color; 