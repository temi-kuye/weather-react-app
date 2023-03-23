import React, { useState } from "react";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setResult(`${city}`);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
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
  );
}
