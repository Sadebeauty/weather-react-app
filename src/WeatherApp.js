/** @format */

import React, { useState } from "react";
import axios from "axios";

export default function WeatherApp() {
  let [City, setCity] = useState("");
  let [Response, setResponse] = useState("");
  let [weather, setWeather] = useState(null);

  function displayWeather(response) {
    setResponse(true);
    setWeather({
      Temperature: response.data.main.temp,
      Description: response.data.weather[0].description,
      Humidity: response.data.main.humidity,
      Wind: response.data.wind.speed,
      icon: `Https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
    });
  }

  function HandleQuery(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=b4ca63d943f7c96a9ccdd7dada737c1e`;
    axios.get(apiUrl).then(displayWeather);
  }

  function ChangeCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="row">
      <form onSubmit={HandleQuery}>
        <input
          className="col-9"
          type="search"
          placeholder="Type a city..."
          onChange={ChangeCity}
        />
        <input
          className="col-3"
          type="Submit"
          defaultValue="Search"
        />
      </form>
    </div>
  );
  if (Response) {
    return (
      <div className="Wrapper">
        {form}
        <ul className="co-6">
          <li key="index">Temperature:{Math.round(weather.Temperature)}°C</li>
          <li>Description:{weather.Description}</li>
          <li>Humidity:{weather.Humidity}%</li>
          <li>Wind:{weather.Wind}km/h</li>
          <li>
            <img
              src={weather.icon}
              alt={" "}
            />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
