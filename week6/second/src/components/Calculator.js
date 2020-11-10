
import React, { useState, useEffect } from "react";
import CalculatorKey from "./CalculatorKey";
import "./Calculator.css";

function Calculator() {
  const [num1, setnum1] = useState(null);
  const [num2, setnum2] = useState("0");
  const [op, setOp] = useState(null);

  useEffect(() => {}, [op, num2, num1]);

  const CalculatorOperations = {
    "/": (firstValue, secondValue) => firstValue / secondValue,
    "*": (firstValue, secondValue) => firstValue * secondValue,
    "+": (firstValue, secondValue) => firstValue + secondValue,
    "-": (firstValue, secondValue) => firstValue - secondValue,
    "=": (firstValue, secondValue) => secondValue,
  };

  const performOperation = () => {
    let temp = CalculatorOperations[op](
      parseFloat(num1),
      parseFloat(num2)
    );
    setOp(null);
    setnum2(String(temp));
    setnum1(null);
  };

  const handleNum = (number) => {
    setnum2(num2 === "0" ? String(number) : num2 + number);
  };

  const insertDot = () => {
    if (!/\./.test(num2)) {
      setnum2(num2 + ".");
    }
  };
  const percentage = () => {
    setnum2(parseFloat(num2) / 100);
    if (num1 && num2 === "") {
      setnum1(parseFloat(num1) / 100);
    }
  };
  const changeSign = () => {
    setnum2(parseFloat(num2) * -1);
  };
  const clearData = () => {
    setnum2("0");
    setnum1(0);
  };

  const Operation = (value) => {
    if (Number.isInteger(value)) {
      handleNum(parseInt(value, 10));
    } else if (value in CalculatorOperations) {
      if (op === null) {
        setOp(value);
        setnum1(num2);
        setnum2("");
      }
      if (op) {
        setOp(value);
      }
      if (num1 && op && num2) {
        performOperation();
      }
    } else if (value === "c") {
      clearData();
    } else if (value === "\xB1") {
      changeSign();
    } else if (value === ".") {
      insertDot();
    } else if (value === "%") {
      percentage();
    }
  };

  return (
    <div className="calculator">
      <div className="calculator-input">
        <div className="result">{num2} </div>
      </div>
      <div className="calculator-keypad">
        <div className="keys-function">
          <CalculatorKey keyValue={"c"} onClick={Operation} />
          <CalculatorKey keyValue={"\xB1"} onClick={Operation} />
          <CalculatorKey keyValue={"%"} onClick={Operation} />
        </div>
        <div className="keys-operators">
          <CalculatorKey keyValue={"+"} onClick={Operation} />
          <CalculatorKey keyValue={"-"} onClick={Operation} />
          <CalculatorKey keyValue={"*"} onClick={Operation} />
          <CalculatorKey keyValue={"/"} onClick={Operation} />
          <CalculatorKey keyValue={"="} onClick={Operation} />
        </div>
        <div className="keys-numbers">
          <CalculatorKey keyValue={9} onClick={Operation} />
          <CalculatorKey keyValue={8} onClick={Operation} />
          <CalculatorKey keyValue={7} onClick={Operation} />
          <CalculatorKey keyValue={6} onClick={Operation} />
          <CalculatorKey keyValue={5} onClick={Operation} />
          <CalculatorKey keyValue={4} onClick={Operation} />
          <CalculatorKey keyValue={3} onClick={Operation} />
          <CalculatorKey keyValue={2} onClick={Operation} />
          <CalculatorKey keyValue={1} onClick={Operation} />
          <CalculatorKey
            className="key-dot"
            keyValue={"."}
            onClick={Operation}
          />
          <CalculatorKey
            className="key-zero"
            keyValue={0}
            onClick={Operation}
          />
        </div>
      </div>
    </div>
  );
}

export default Calculator;