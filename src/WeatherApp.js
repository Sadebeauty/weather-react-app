/** @format */

import React, { useState } from "react";
import "./WeatherApp.css";
import axios from "axios";

export default function WeatherApp() {
  const [weather, setWeather] = useState("");
  const [loaded, setLoaded] = useState(false);

  function displayWeather(response) {
    console.log(response.data);
    setLoaded(true);
    setWeather({
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
    });
  }

  if (loaded) {
    return (
      <div className="container">
        <div className="row">
          <form>
            <input
              className="col-9"
              type="search"
              placeholder="Type a city..."
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
          <li className="date">Tuesday, 8th August</li>
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
    let city = "Lagos";
    let apiKey = "83f2f0t26352d3o664bcf8a01bce4fa7";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    return "Loading...";
  }
}
