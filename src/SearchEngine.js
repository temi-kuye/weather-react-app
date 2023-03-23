import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine(props) {
  const [city, setCity] = useState(props.city);
  const [result, setResult] = useState("");

  function search() {
    const apiKey = "5ce2a0772c57a0ba17c711bc946cb320";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(props.temperature);
    return "loading...";
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
    setResult(`${city}`);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  if (props.data.ready) { 
    return (
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
      <div className="where">
        <h1>{result}</h1>
      </div>
    </div>
  ); } else {
    search();
    return "Loading..."
  }
}
