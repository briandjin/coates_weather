import React, { Component } from "react";
import logo from "../../images/logo-coates.png";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super();
    this.state = {
      userInput: ""
    };
  }

  onInputChange = e => {
    this.setState({
      userInput: e.target.value
    });
  };

  onEnterPress = e => {
    if (e.charCode === 13) {
      this.props.fetchWeather(this.state.userInput);
    }
  };

  render() {
    return (
      <nav className="nav">
        <div className="logo-container">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="sb-container">
          <input
            className="sb-input"
            onKeyPress={this.onEnterPress}
            onChange={this.onInputChange}
            placeholder="Enter Location"
          />
          <button className="sb-btn" onClick={() => this.props.fetchWeather(this.state.userInput)}>
            Search
          </button>
        </div>
        <div className="icons-container">
          <i className="fa fa-bell fa-lg" aria-hidden="true" />
          <i className="fa fa-envelope fa-lg" aria-hidden="true" />
        </div>
      </nav>
    );
  }
}

export default Navbar;
