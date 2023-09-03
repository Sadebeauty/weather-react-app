/** @format */

import React, { useEffect, useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              const maxTemperature = Math.round(
                dailyForecast.temperature.maximum
              );
              const minTemperature = Math.round(
                dailyForecast.temperature.minimum
              );
              const iconUrl = dailyForecast.condition.icon_url;
              const date = new Date(dailyForecast.time * 1000);
              const day = date.getDay();
              const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
              const dayOfWeek = days[day];

              return (
                <div
                  className="col"
                  key={index}>
                  <div className="WeatherForecast-day">{dayOfWeek}</div>
                  <div className="WeatherForecast-icon">
                    <img
                      src={iconUrl}
                      alt={"WeatherForecast-icon"}
                    />
                  </div>
                  <div className="WeatherForecast-temperature">
                    <span className="WeatherForecast-temperature-max">
                      {maxTemperature}°
                    </span>{" "}
                    <span className="WeatherForecast-temperature-min">
                      {minTemperature}°
                    </span>{" "}
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "83f2f0t26352d3o664bcf8a01bce4fa7";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;

    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
