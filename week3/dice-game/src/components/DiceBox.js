import React from "react";

function DiceBox(props) {
  return (
    <div className="DiceBox">
      <p>{props.die1}</p>
      <p>{props.die2}</p>
      <p>{props.die3}</p>
      <p>{props.die4}</p>
      <p>{props.die5}</p>
    </div>
  );
}

export default DiceBox;