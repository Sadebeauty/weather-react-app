/** @format */

import React, { useState } from "react";
import "./WeatherApp.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function WeatherApp(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState("");
  const [loaded, setLoaded] = useState(false);

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      coordinates: response.data.coordinates,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      humidity: response.data.temperature.humidity,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }

  function Search() {
    let apiKey = "83f2f0t26352d3o664bcf8a01bce4fa7";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function HandleQuery(event) {
    event.preventDefault();
    Search();
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
        <WeatherInfo data={weather} />
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    Search();

    return "Loading...";
  }
}
