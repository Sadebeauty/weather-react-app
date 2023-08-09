/** @format */

import "./App.css";
import WeatherApp from "./WeatherApp";
function App() {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <ul className="d-flex">
          <li>Lagos</li>
          <li> Ibadan</li>
          <li>Abuja</li>
          <li> Kano</li>
        </ul>{" "}
        <WeatherApp />
        <div className="row">
          <div className="col-6">
            <h1 className="cityName">Lagos</h1>
            <br /> <h3 className="date">Tuesday, 8th August</h3>
            <br />
            <h4 className="description">Cloudy</h4>
          </div>
          <div className="col-6">
            <ul>
              <li>Temperature</li> <li>Description</li>
              <li>Humidity</li>
              <li>Wind</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
