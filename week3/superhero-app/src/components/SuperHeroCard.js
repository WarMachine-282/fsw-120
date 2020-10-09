import React from "react";
import "../style.css";

let SuperHeroData = (props) => {
  const phrase = () => {
    alert(props.catchPhrase);
  };
  return (
    <div className="superHeroBoxes">
      <div onClick={phrase}>
        <img className="propImage" src={props.imageName} />
        <p className="propName">{props.name}</p>
        <p className="propShow">Show: {props.show}</p>
      </div>
    </div>
  );
};

export default SuperHeroData;
