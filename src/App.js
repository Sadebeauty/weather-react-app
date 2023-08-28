/** @format */
import WeatherApp from "./WeatherApp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherApp defaultCity="Lagos" />
      <footer>
        <a href="https://github.com/Sadebeauty/weather-app">
          Open-sourced code
        </a>{" "}
        by Folasade Adesope and hosted on{" "}
        <a href="https://weather-react-app-9a7054.netlify.app/">netlify</a>
      </footer>
    </div>
  );
}
export default App;
