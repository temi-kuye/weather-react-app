import React, { useState } from "react";
import SearchEngine from "./SearchEngine";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  function showTemperature(response) {
    setWeatherData({
    ready: true,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    temp: Math.round(response.data.main.temp),
    humidity: Math.round(response.data.main.humidity),
    wind: Math.round(response.data.wind.speed),
    iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",

});  }

  function showFahrenheit(event) {
    event.preventDefault();
    let fahrenheit = Math.round(weatherData.temp * (9 / 5) + 32);
    setWeatherData.temp(fahrenheit);
  }
  function showCelsius(event) {
    event.preventDefault();
    return weatherData.temp;
  }

  if (weatherData.ready) {
    return <div className="App">
      <SearchEngine />
      <div className="where">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="weather-temp">
            <img
              src={weatherData.iconUrl}
              alt="Sunny and Cloudy icon"
            />
            <div className="degrees">
              <strong>{Math.round(weatherData.temp)}</strong>
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
      <footer>
        Open-sourced code by{" "}
        <a href="https://github.com/temi-kuye/weather-react-app">
          Victoria Kuye
        </a>
      </footer>
    </div>; }
  
  else {
    const apiKey = "5ce2a0772c57a0ba17c711bc946cb320";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
return "loading..."
} }
