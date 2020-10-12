import React, {Component} from "react"
import "./style.css"

const Square = (props) => {
    return(
        <div className="squares" style={{backgroundColor: props.backgroundColor}}></div>
    )
}

export default Square
