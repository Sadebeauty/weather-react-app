/** @format */

import React from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
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
        <li className="description">Cloudy</li>
      </ul>
      <div className="row">
        <div className=" col-6">
          <img
            className=" icon float-left"
            src=" https://openweathermap.org/img/wn/02d@2x.png"
            alt={" "}
          />
          <span className="weatherTemperature float-left">25</span>
          <span className="units">°C</span>
        </div>

        <div className="col-6">
          <ul>
            <li>Precipitation:4%</li>
            <li>Humidity: 91%</li>
            <li>Wind: 8km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
