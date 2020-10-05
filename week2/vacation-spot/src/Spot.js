import React from "react"

let Spot = (props) => {
    let cost 
    if (props.price <= 500){
        cost = "$"
    } else if (props.price > 500 && props.price < 1000){
        cost = "$$"
    } else if (props.price > 1000){
        cost = "$$$"
    }
    return (
        <div className="box" style={{backgroundColor:`${props.backgroundColor}`}}>
            <h1 className="place">Country: {props.place}</h1>
            <h2 className="price">Price: {cost + props.price}</h2>
            <span className="timeToGo">Best Time: {props.timeToGo}</span>

        </div>
    )
}

export default Spot;