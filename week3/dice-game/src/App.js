import React, { Component } from "react";
import DiceBox from "./components/DiceBox.js ";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      die1: 0,
      die2: 0,
      die3: 0,
      die4: 0,
      die5: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => {
      return { die1: Math.floor(Math.random() * 6) + 1 };
    });
    this.setState((prevState) => {
      return { die2: Math.floor(Math.random() * 6) + 1 };
    });
    this.setState((prevState) => {
      return { die3: Math.floor(Math.random() * 6) + 1 };
    });
    this.setState((prevState) => {
      return { die4: Math.floor(Math.random() * 6) + 1 };
    });
    this.setState((prevState) => {
      return { die5: Math.floor(Math.random() * 6) + 1 };
    });
  }
  render() {
    return (
      <div key={this.state.die1}>
        <DiceBox die1={this.state.die1} />
        <DiceBox die2={this.state.die2} />
        <DiceBox die3={this.state.die3} />
        <DiceBox die4={this.state.die4} />
        <DiceBox die5={this.state.die5} />
        <button className="button" onClick={this.handleClick}>
          Roll!
        </button>
      </div>
    );
  }
}

export default App;
