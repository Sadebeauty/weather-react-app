/** @format */

import React, { useState } from "react";
import "./WeatherApp.css";
import axios from "axios";
import DateFormat from "./DateFormat";

export default function WeatherApp(props) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [loaded, setLoaded] = useState(false);

  function displayWeather(response) {
    console.log(response.data);
    setLoaded(true);
    setWeather({
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      humidity: response.data.temperature.humidity,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
    });
  }

  function HandleQuery(event) {
    let apiKey = "83f2f0t26352d3o664bcf8a01bce4fa7";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function ChangeCity(event) {
    setCity(event.target.value);
  }
  if (loaded) {
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={HandleQuery}>
            <input
              className="col-9"
              type="search"
              placeholder="Type a city..."
              onChange={ChangeCity}
            />
            <input
              className="col-3 "
              type="Submit"
              defaultValue="Search"
            />
          </form>
        </div>
        <h1>Lagos</h1>
        <ul className="weatherDescription">
          <li>
            <DateFormat date={weather.date.getDay()} />
          </li>
          <li className="description text-capitalize">{weather.description}</li>
        </ul>
        <div className="row">
          <div className=" col-6">
            <img
              className=" icon float-left"
              src=" https://openweathermap.org/img/wn/02d@2x.png"
              alt={" "}
            />
            <span className="weatherTemperature float-left">
              {Math.round(weather.temperature)}
            </span>
            <span className="units">°C</span>
          </div>

          <div className="col-6">
            <ul>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind:{weather.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return "Loading...";
  }
}
