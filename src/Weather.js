import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function showTemperature(response) {
    setWeatherData({
    ready: true,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    temp: Math.round(response.data.main.temp),
    humidity: Math.round(response.data.main.humidity),
    wind: Math.round(response.data.wind.speed),
    icon: response.data.weather[0].icon,
    coord: response.data.coord,

});  }
function search() {
     const apiKey = "5ce2a0772c57a0ba17c711bc946cb320";
     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
     axios.get(apiUrl).then(showTemperature);
  return "loading...";
}
function handleSubmit(event) {
  event.preventDefault();
  search();
}
function updateCity(event) {
  setCity(event.target.value);
}

  if (weatherData.ready) {
    return (
      <div className="App">
        <div>
          <form className="mb-3" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-9">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="form-control"
                  onChange={updateCity}
                  autoComplete="off"
                />
              </div>
              <div className="col-md-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
        </div>
        <WeatherInfo data={weatherData} />
        <div className="forecast">
          <Forecast coord={weatherData.coord} />
        </div>
        <footer className="footer">
          Open-sourced code by{" "}
          <a href="https://github.com/temi-kuye/weather-react-app">
            Victoria Kuye
          </a>
        </footer>
      </div>
    );
      }
  
  else {
  search();
  return "loading..."
} }
