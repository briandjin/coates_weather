import React from "react";
import "./CurrentWeather.css";
import "../../weather-icons-master/css/weather-icons.css";

const CurrentWeather = props => (
  <div className="cw-container">
    <div className="condition-container">
      <i className={`wi wi-yahoo-${props.weather.condition.code}`} />

      <h3>{props.weather.condition.text}</h3>
    </div>
    <div className="cw-hi-lo-container">
      <div className="cw-hi-container">
        <i className="wi wi-direction-up" />
        <h3>{props.weather.forecast[0].high}</h3>
        <i className="wi wi-fahrenheit" />
      </div>
      <div className="cw-low-container">
        <i className="wi wi-direction-down" />
        <h3>{props.weather.forecast[0].low}</h3>
        <i className="wi wi-fahrenheit" />
      </div>
    </div>
    <div className="cur-temp">
      <h1>{props.weather.condition.temp}</h1>
      <i className="wi wi-fahrenheit" />
    </div>
  </div>
);

export default CurrentWeather;
