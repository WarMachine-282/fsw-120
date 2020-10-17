import React, { Component } from "react";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      nameList: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleChangeUpdate = (event) => {
    event.preventDefault();
    this.setState({
      nameList: this.state.nameList.concat(this.state.name),
    });
  };

  render() {
    return (
      <div>
        <form className="container" name="formula" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter A Name"
            value={this.state.item}
            onChange={this.handleChange}
          />
          <br />
          <h1>{this.state.name}</h1>
          <button onClick={this.handleChangeUpdate}>Add Name!</button>
          <button onClick={this.handleReset}>Reset</button>
        </form>
        <div className="list">
          <ul>
            {this.state.nameList.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
