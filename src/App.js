import React, { Component } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Location from "./components/Location/Location";
import Forecast from "./components/Forecast/Forecast";
import "./weather-icons-master/css/weather-icons.css";
import "./App.css";

let base_url = "https://query.yahooapis.com/v1/public/yql?";

class App extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: {}
    };
    this.fetchWeather("chicago");
  }

  fetchWeather = userInput => {
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

  renderCurrentWeather = () => {
    const { results } = this.state.weatherData;
    return results ? <CurrentWeather weather={results.channel.item} /> : null;
  };

  renderLocation = () => {
    const { results } = this.state.weatherData;

    return results ? <Location location={results.channel.location} /> : null;
  };

  renderForecast = () => {
    const { results } = this.state.weatherData;
    if (results) {
      const fiveDayForecast = results.channel.item.forecast.slice(1, 6);

      return fiveDayForecast.map((forecastIndx, i) => <Forecast forecastIndx={forecastIndx} key={i} />);
    }
    return null;
  };

  render() {
    return (
      <div className="App">
        <Navbar fetchWeather={this.fetchWeather} />
        <div className="wrapper">
          <section className="location-section">{this.renderLocation()}</section>
          <section className="weather-section">
            {this.renderCurrentWeather()}
            <div className="forecast-container">
              <div className="forecast-title">
                <h1>Extended Forecast</h1>
              </div>
              {this.renderForecast()}
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default App;
