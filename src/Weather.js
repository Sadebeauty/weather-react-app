/** @format */

import React from "react";
import axios from "axios";

export default function Weather() {
  function displayWeather(response) {
    alert(`The weather in ${city} is ${Math.round(response.data.main.temp)}`);
  }
  let city = "Lagos";
  let apiKey = "b4ca63d943f7c96a9ccdd7dada737c1e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  axios.get(apiUrl).then(displayWeather);
  return <h2> Hello from space</h2>;
}
