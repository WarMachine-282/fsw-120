import React from "react"
import Spot from "./Spot"
import "./style.css"
import vacationSpots from "./VacationSpots"

function App() {
  const vacationData = vacationSpots.map(spot =>{
    let backgroundColor 
    switch (spot.timeToGo) {
      case "Spring":
        backgroundColor= "rgb(111, 235, 128, .8)"
        break;
      case "Summer":
        backgroundColor= "rgb(233, 235, 111, .8)"
        break;
      case "Fall":
        backgroundColor= "rgb(235, 171, 111, .8)"
        break;
      case "Winter":
        backgroundColor= "rgb(148, 234, 255, .8)"
        break;
      default: 
        backgroundColor= "white"
        break;
    }
  
  return  (<Spot place={spot.place} price={spot.price} backgroundColor={backgroundColor}timeToGo={spot.timeToGo}/>
    )
  })
  return (
    <div className="App">
      {vacationData}
    </div>
  );
}

export default App;
