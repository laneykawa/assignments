import React from "react"; 


function dollar(price) {
    if (price > 1000) {
        return "$$$";
    } else if (price < 1000 && price < 500) {
        return "$$";
    } else {
        return "$";
    }
  }


function Cards (props){
    const {place, price, timeToGo} = props;
    
    return (
        <div>
            <h2> { place } </h2>
            <h3> { price } </h3>
            {dollar(price)}
            <h4 className={timeToGo}>{timeToGo}</h4>
            <hr />
        </div>
    )

}

export default Cards;