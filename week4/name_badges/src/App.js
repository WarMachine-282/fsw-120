import React, { Component } from "react";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      firstNameItem: "",
      lastName: "",
      lastNameItem: "",
      email: "",
      emailItem: "",
      phone: "",
      phoneItem: "",
      placeOfBirth: "",
      placeOfBirthItem: "",
      favoriteFood: "",
      favoriteFoodItem: "",
      biography: "",
      biographyItem: "",
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
  formUpdate = (event) => {
    event.preventDefault();
    this.setState({
      firstNameItem: this.state.firstName,
      lastNameItem: this.state.lastName,
      emailItem: this.state.email,
      phoneItem: this.state.phone,
      placeOfBirthItem: this.state.placeOfBirth,
      favoriteFoodItem: this.state.favoriteFood,
      biographyItem: this.state.biography,
    });
  };
  render() {
    const input =
      this.state.firstName.length > 2 &&
      this.state.lastName.length > 2 &&
      this.state.email.length > 2 &&
      this.state.phone.length > 2 &&
      this.state.placeOfBirth.length > 2 &&
      this.state.favoriteFood.length > 2 &&
      this.state.biography.length > 2;
    return (
      <div>
        <form id="nameForm">
          <div className="align">
            <input
              id="firstName"
              name="firstName"
              required
              value={this.state.firstName}
              onChange={this.handleChange}
              placeholder="First Name"
            />
            <input
              id="lastName"
              name="lastName"
              required
              value={this.state.lastName}
              onChange={this.handleChange}
              placeholder="Last Name"
            />
          </div>
          <div className="align">
            <input
              id="email"
              name="email"
              required
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Email"
            />
            <input
              id="phone"
              name="phone"
              required
              value={this.state.phone}
              onChange={this.handleChange}
              placeholder="Phone Number"
            />
          </div>
          <div className="align">
            <input
              id="placeOfBirth"
              name="placeOfBirth"
              required
              value={this.state.placeOfBirth}
              onChange={this.handleChange}
              placeholder="Place of Birth"
            />
            <input
              id="favoriteFood"
              name="favoriteFood"
              required
              value={this.state.favoriteFood}
              onChange={this.handleChange}
              placeholder="Favorite Food"
            />
          </div>
          <textarea
            id="biography"
            name="biography"
            value={this.state.biography}
            onChange={this.handleChange}
            placeholder="Tell us about yourself"
          ></textarea>
          <br></br>
          <button disabled={!input} onClick={this.formUpdate}>
            Submit
          </button>
        </form>
        <div className="badge">
          <div>
            <h2>Badge:</h2>
          </div>
          <div className="badgeInfo">
            <p id="name">
              Name: {this.state.firstNameItem} {this.state.lastNameItem}
            </p>
            <p id="phone">Phone: {this.state.phoneItem}</p>
            <p id="origin">Place of Birth: {this.state.placeOfBirthItem}</p>
            <p id="food">Favorite Food: {this.state.favoriteFoodItem}</p>
            <p id="email">Email: {this.state.emailItem}</p>
          </div>
          <p id="bioBox">{this.state.biographyItem}</p>
        </div>
      </div>
    );
  }
}
export default App;
