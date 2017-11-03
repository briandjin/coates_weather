import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";
import "./App.css";

let base_url = "https://query.yahooapis.com/v1/public/yql?";

class App extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: {}
    };
  }

  onButtonClick = userInput => {
    const yql_query = `q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20${userInput}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;

    axios
      .get(base_url + yql_query)
      .then(res => {
        console.log(res);
        this.setState({
          weatherData: res.data.query
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}
export default App;
