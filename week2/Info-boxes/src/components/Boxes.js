import React from "react"

const style1 = {
    color:"white",
    fontFamily:"monospace",
    textAlign: "center",
    backgroundColor: "red",
    marginLeft: "28%",
    marginBottom: 7,
    border: "solid 10px rgba(255,249,113,0.9)",
    width: 600,
}

let Boxes = (props) => {
    return (
        <div style={style1}>
            <h3>Title: {props.title}</h3>
            <h3>Subtitle: {props.subtitle}</h3>
            <h3>Information: {props.information}</h3>
        </div>
    )
}

export default Boxes