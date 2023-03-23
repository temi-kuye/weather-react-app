import React, { useState } from "react";
import SearchEngine from "./SearchEngine";

import "./Weather.css";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(props.temperature);
  // function fahrenheit() {
  // let temperature = (props.temperature * 9) / 5 + 32;
  // return Math.round(temperature); }
  function showFahrenheit(event) {
    event.preventDefault();
    let fahrenheit = Math.round(props.temperature * (9 / 5) + 32);
    setTemperature(fahrenheit);
  }
  function showCelsius(event) {
    event.preventDefault();
    setTemperature(props.temperature);
  }
  let weatherData = {
    city: "Pompeii",
    date: "Thursday 09:00",
    description: "Windy",
    temp: "20",
    humidity: "50",
    wind: "180",
  };
  return (
    <div className="App">
      <SearchEngine />
      <div className="where">
        <h1>{props.city}</h1>
        <ul>
          <li>
            Last updated <span> {weatherData.date}</span>
          </li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="weather-temp">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
              alt="Sunny and Cloudy icon"
            />
            <div className="degrees">
              <strong>{temperature}</strong>
              <span className="units">
                <a href="/" className="active" onClick={showCelsius}>
                  °C
                </a>{" "}
                |
                <a href="/" onClick={showFahrenheit}>
                  °F
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span>{weatherData.humidity}</span>%
            </li>
            <li>
              Wind: <span>{weatherData.wind}</span> km/h
            </li>
          </ul>
        </div>
      </div>
      <div className="forecast"></div>
    </div>
  );
}
