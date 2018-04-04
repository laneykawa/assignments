import React from "react";
import Cards from "../Cards/"

let vacationSpots = [  
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring"
    },{
      place: "Cancun",
      price: 900,
      timeToGo: "Winter"
    },{
      place: "China",
      price: 1200,
      timeToGo: "Fall"
    },{
      place: "Russia",
      price: 1100,
      timeToGo: "Summer"
    },{
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring"
    }
]


function VacationSpots (){
    const vacationList = vacationSpots.map((obj, i) => <Cards key={obj.place + i}{...obj}/>)

    return(
        <div>
          <h1> Random Vacation Spots</h1>
          {vacationList}
        </div>
    )
}
export default VacationSpots; 