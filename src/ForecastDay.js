import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) { 
    function maxTemp() {
        let temp = Math.round(props.forecast.main.temp_max);
        return `${temp}°`;
    }
    function minTemp() {
        let minTemp = Math.round(props.forecast.main.temp_min);
        return `${minTemp}°`;
    }
    function day() {
    let date = new Date(props.forecast.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
    }
    return   <div>
        <div className="forecast-date"> {day()}</div>
                <WeatherIcon code={props.forecast.weather[0].icon} size={50} />
                <div className="forecast-temps">
                  {minTemp()}{" "}
                  <span className="forecast-max-temp">{maxTemp()}</span>
                </div>
                </div>;
}