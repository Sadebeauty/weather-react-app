/** @format */

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <ul className=" cityHeader d-flex">
          <li>Lagos</li>
          <li> Ibadan</li>
          <li>Abuja</li>
          <li> Kano</li>
        </ul>{" "}
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
        <div className=" cityDescription  row">
          <div className=" col-6">
            <h1 className="cityName mb-0">Lagos</h1>
            <br /> <h5 className="date mt-0">Tuesday, 8th August</h5>
            <br />
            <h6 className="description mt-0">Cloudy</h6>
          </div>
          <div className="col-6">
            <ul>
              <li>Temperature</li> <li>Description</li>
              <li>Humidity</li>
              <li>Wind</li>
            </ul>
          </div>
          <div className="row d-flex">
            <div className="col-2">
              <img
                srcSet=" https://openweathermap.org/img/wn/10d@2x.png"
                alt={" "}></img>
            </div>
            <div className="col-2">
              <img
                srcSet=" https://openweathermap.org/img/wn/02d@2x.png"
                alt={" "}></img>
            </div>
            <div className="col-2">
              <img
                srcSet=" https://openweathermap.org/img/wn/11d@2x.png"
                alt={" "}></img>
            </div>
            <div className="col-2">
              <img
                srcSet=" https://openweathermap.org/img/wn/10d@2x.png"
                alt={" "}></img>
            </div>
            <div className="col-2">
              <img
                srcSet=" https://openweathermap.org/img/wn/04d@2x.png"
                alt={" "}></img>
            </div>
            <div className="col-2">
              <img
                srcSet=" https://openweathermap.org/img/wn/09d@2x.png"
                alt={" "}></img>
            </div>
          </div>
        </div>
      </div>

      <small>
        <a href="https://github.com/Sadebeauty/weather-app">
          Open-source code{" "}
        </a>
        by Folasade Adesope
      </small>
    </div>
  );
}
export default App;
