import React, {useState} from "react";
import "./Weather.css";

export default function Units(props) {
const [unit, setUnit] = useState("celsius");
 
function showFahrenheit(event) {
   event.preventDefault();
   setUnit("fahrenheit");
 }
 function showCelsius(event) {
   event.preventDefault();
   setUnit("celsius");
 }
 if (unit === "celsius") {
    return (
      <div className="degrees">
        <strong>{Math.round(props.celsius)}</strong>

        <span className="units">
        {" "}
        °C |
        <a href="/" onClick={showFahrenheit}>
          °F
        </a>
      </span>
      </div>
    ); } else {    
    let fahrenheitTemp = (props.celsius * 9) / 5 + 32;
    return <div className="degrees"> 
    <strong>{Math.round(fahrenheitTemp)}</strong>
    <span className="units"><a href="/" onClick={showCelsius}>
      °C
    </a>{" "}
    |
      °F
    </span> </div>;
}
}