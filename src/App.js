import React from "react";

import "owfont/css/owfont-regular.min.css";
import "weather-icons/css/weather-icons.min.css";
import "weather-icons/css/weather-icons-wind.min.css";
import "./App.css";
import Nav from "./components/nav";
import WeatherMainComponent from "./components/weatherMainComponent";

function App() {
  return (
    <div className="App">
      <Nav />
      <WeatherMainComponent />
    </div>
  );
}

export default App;
