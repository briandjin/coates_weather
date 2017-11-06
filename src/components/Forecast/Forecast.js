import React, { Component } from "react";
import "../../weather-icons-master/css/weather-icons.css";
import "./Forecast.css";
class Forecast extends Component {
  constructor(props) {
    super();
  }
  render() {
    const today = this.props.forecastIndx.day;
    const month = this.props.forecastIndx.date.slice(3, 6);
    const day = this.props.forecastIndx.date.slice(0, 2);
    const year = this.props.forecastIndx.date.slice(7, 11);
    return (
      <div className="forecast-container">
        <div className="forecast-card-container">
          <div className="forecast-card">
            <h1 className="today">{today}</h1>
            <h1 className="date">{`${month} ${day} ${year}`}</h1>
            <div className="i-condition-container">
              <i className={`wi wi-yahoo-${this.props.forecastIndx.code}`} />
              <h1>{this.props.forecastIndx.text}</h1>
            </div>
            <div className="forecast-hi">
              <i className="wi wi-direction-up" />
              <h1>{this.props.forecastIndx.high}</h1>
            </div>
            <div className="forecast-low">
              <i className="wi wi-direction-down" />
              <h1>{this.props.forecastIndx.low}</h1>
            </div>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default Forecast;
