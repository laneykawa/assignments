import React from "react";
import Color from "../Color/"

const colorBox = [
    {
        backgroundColor: "lightyellow", 
        title: "Light Yellow", 
        subTitle: "This is light yellow.", 
        info: "This is light yellow.", 
        id: "w34tsre4rtbt"
    },
    {
        backgroundColor: "lightpink", 
        title: "Light Pink", 
        subTitle: "This is light pink.", 
        info: "This is light pink.",
        id: "wrgw4gw4g" 
    },
    {
        backgroundColor: "lightblue", 
        title: "Light Blue", 
        subTitle: "This is light blue.", 
        info: "This is light blue.",
        id: "w45wrge4gtfbsfjd" 
    },
    {
        backgroundColor: "white", 
        title: "White", 
        subTitle: "This is white.", 
        info: "skfjlkdsjf", 
        id: "w34tsre4rtbtfljdl"
    },
    {
        backgroundColor: "green", 
        title: "Green", 
        subTitle: "This is green.", 
        info: "skfjlkdsjf",
        id: "wrgw4gw4gsfd" 
    },
    {
        backgroundColor: "yellow", 
        title: "Yellow", 
        subTitle: "This is yellow.", 
        info: "skfjlkdsjf",
        id: "w45wrge4gtfbaf" 
    },
    {
        backgroundColor: "Blue", 
        title: "Blue", 
        subTitle: "This is Blue.", 
        info: "skfjlkdsjf", 
        id: "w34tsre4rtbt"
    },
    {
        backgroundColor: "aquamarine", 
        title: "Aquamrine", 
        subTitle: "This is aquamarine.", 
        info: "skfjlkdsjf",
        id: "w45wrge4gtfbafaf" 
    },
    {
        backgroundColor: "aqua", 
        title: "Aqua", 
        subTitle: "This is aqua.", 
        info: "skfjlkdsjf", 
        id: "w34tsre4rtbtaf"
    },
    {
        backgroundColor: "red", 
        title: "Red", 
        subTitle: "This is red.", 
        info: "skfjlkdsjf", 
        id: "w34tsre4rtbtafa"
    }
]


function App (){
    return (
        <div>
           {colorBox.map(color => <Color key={color.id}{...color}/>)}
        </div>
    )
}

export default App; 