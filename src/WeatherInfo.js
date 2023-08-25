/** @format */

import React from "react";
import DateFormat from "./DateFormat";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul className="weatherDescription">
        <li>
          <DateFormat date={props.data.date} />
        </li>
        <li className="description text-capitalize">
          {props.data.description}
        </li>
      </ul>
      <div className="row">
        <div className=" col-6">
          <img
            className=" icon float-left"
            src=" https://openweathermap.org/img/wn/02d@2x.png"
            alt={" "}
          />
          <span className="weatherTemperature float-left">
            {Math.round(props.data.temperature)}
          </span>
          <span className="units">°C</span>
        </div>

        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind:{props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
