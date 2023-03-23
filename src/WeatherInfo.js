import React from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
return <div>
<div className="where">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="weather-temp">
            <WeatherIcon code={props.data.icon} />
            <div className="degrees">
              <strong>{Math.round(props.data.temp)}</strong>
              <span className="units">
                <a href="/" className="active" onClick={props.celsius}>
                  °C
                </a>{" "}
                |
                <a href="/" onClick={props.fahrenheit}>
                  °F
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span>{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span>{props.data.wind}</span> km/h
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
      </div>;
}