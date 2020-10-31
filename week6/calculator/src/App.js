import React, { useState, useEffect } from "react";
import "./styles.css";

const App = () => {
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [number, setNumber] = useState(0)
  const [result, setResult] = useState(0);

  const addTwoNumbers = () => {
    setNumberOne(0);
    setNumberTwo(0);
    setResult(numberOne + numberTwo);
  };
  const subtractTwoNumbers = () => {
    setNumberOne(0);
    setNumberTwo(0);
    setResult(numberOne - numberTwo);
  };
  const multiplyTwoNumbers = () => {
    setNumberOne(0);
    setNumberTwo(0);
    setResult(numberOne * numberTwo);
  };
  const divideTwoNumbers = () => {
    setNumberOne(0);
    setNumberTwo(0);
    setResult(numberOne / numberTwo);
  };
  const refreshPage = () => {
    window.location.reload(false);
  }
  return (
    <div>
      <div className="align">
        <div>
          <h1 id="result">Result: {result}</h1>
        </div>
        <div className="inputs">
          <input id="firstNum" type="number" onChange={(e) => setNumberOne(+e.target.value)}></input>
          <input id="secondNum" type="number" onChange={(e) => setNumberTwo(+e.target.value)}></input>
        </div>
        <div className="image">
        <div className="buttons">
          <button id="addition" onClick={addTwoNumbers}>+</button>
          <button id="subtraction" onClick={subtractTwoNumbers}>-</button>
          <button id="multiplication" onClick={multiplyTwoNumbers}>x</button>
          <button id="division" onClick={divideTwoNumbers}>÷</button>
          <button id="clear" onClick={refreshPage}>C</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default App;
