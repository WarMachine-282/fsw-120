import React from "react";
import "../style.css";

let SuperHeroData = (props) => {
  const phrase = () => {
    alert(props.catchPhrase);
  };
  return (
    <div className="superHeroBoxes">
      <div onClick={phrase}>
        <p className="propName">{props.name}</p>
        <img className="propImage" src={props.imageName} />
        <span className="propShow">{props.show}</span>
      </div>
    </div>
  );
};

export default SuperHeroData;
