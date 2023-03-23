import React, {useState, useEffect} from "react";
import "./Weather.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [fc, setFc] = useState(null);

    useEffect(() => {
        setLoaded(false);}, [props.coord]);

    function handleResponse(response) {
        setFc(response.data);
        setLoaded(true);
    }

    if (loaded) {
        console.log(fc);
        return (
          <div className="forecast">
            <div className="row">
              <div className="col">
                <ForecastDay forecast={fc.list[0]} />
              </div>
              <div className="col">
                <ForecastDay forecast={fc.list[3]} />
              </div>
              <div className="col">
                <ForecastDay forecast={fc.list[12]} />
              </div>
              <div className="col">
                <ForecastDay forecast={fc.list[19]} />
              </div>
              <div className="col">
                <ForecastDay forecast={fc.list[29]} />
              </div>
            </div>
          </div>
        );
     
} else {
    const apiKey = "5ce2a0772c57a0ba17c711bc946cb320";
    let lat = `${props.coord.lat}`;
    let lon = `${props.coord.lon}`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
   
    return null;   
     }
}