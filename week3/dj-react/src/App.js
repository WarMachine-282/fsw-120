import React, { Component } from "react";
import Square from "./Square";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      colors: ["red", "blue", "purple", "yellow"],
    };
  }
  smallTimeDJ = () => {
    this.setState((prevState) => {
      if (prevState.colors[0] !== "white") {
        return { colors: ["white", "white", "white", "white"] };
      } else if (prevState.colors[0] === "white") {
        return { colors: ["black", "black", "black", "black"] };
      }
    });
  };
  partyDJ = () => {
    this.setState((prevState) => {
      if (prevState.colors[0] !== "purple") {
        return {
          colors: [
            "purple",
            "purple",
            prevState.colors[2],
            prevState.colors[3],
          ],
        };
      }
    });
  };
  professionalDj1 = () => {
    this.setState((prevState) => {
      if (prevState.colors[2] !== "blue") {
        return {
          colors: [
            prevState.colors[0],
            prevState.colors[1],
            prevState.colors[3],
            "blue",
          ],
        };
      }
    });
  };
  professionalDj2 = () => {
    this.setState((prevState) => {
      if (prevState.colors[3] !== "blue") {
        return {
          colors: [
            prevState.colors[0],
            prevState.colors[1],
            prevState.colors[2],
            "blue",
          ],
        };
      }
    });
  };
  bigTimeDj1 = () => {
    this.setState((prevState) => {
      if (prevState.colors[0] !== "yellow") {
        return { colors: ["yellow", "orange", "orange", "orange"] };
      }
    });
  };
  bigTimeDj2 = () => {
    this.setState((prevState) => {
      if (prevState.colors[1] !== "yellow") {
        return { colors: ["orange", "yellow", "orange", "orange"] };
      }
    });
  };
  bigTimeDj3 = () => {
    this.setState((prevState) => {
      if (prevState.colors[2] !== "yellow") {
        return { colors: ["orange", "orange", "yellow", "orange"] };
      }
    });
  };
  bigTimeDj4 = () => {
    this.setState((prevState) => {
      if (prevState.colors[3] !== "yellow") {
        return { colors: ["orange", "orange", "orange", "yellow"] };
      }
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <Square backgroundColor={this.state.colors[0]} />
          <Square backgroundColor={this.state.colors[1]} />
          <Square backgroundColor={this.state.colors[2]} />
          <Square backgroundColor={this.state.colors[3]} />
        </div>
        <div className="buttons">
          <button className="button1" onClick={this.smallTimeDJ}>
            Small time DJ
          </button>
          <button className="button2" onClick={this.partyDJ}>
            Party DJ
          </button>
          <button className="button3" onClick={this.professionalDj1}>
            Professional DJ One
          </button>
          <button className="button4" onClick={this.professionalDj2}>
            Professional DJ Two
          </button>
        </div>
        <div className="buttons">
          <button className="button1" onClick={this.bigTimeDj1}>
            Big Time DJ One
          </button>
          <button className="button1" onClick={this.bigTimeDj2}>
            Big Time DJ Two
          </button>
          <button className="button1" onClick={this.bigTimeDj3}>
            Big Time DJ Three
          </button>
          <button className="button1" onClick={this.bigTimeDj4}>
            Big Time DJ Four
          </button>
        </div>
      </div>
    );
  }
}
export default App;
