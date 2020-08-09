import React from "react";
import { Card } from "react-bootstrap";
import "./card.css";
function WeatherCard(props) {
  let ano = "wi wi-owm-day-" + props.valueProps.weather[0].id + " display-2";
  let bg = backgroundSetter(props.valueProps.main.temp);
  return (
    <>
      <Card
        text="dark"
        style={{
          width: "15rem",
          display: "inline-flex",
          backgroundColor: `${bg}`,
        }}
        className="m-2 weather-widget warm"
      >
        <Card.Header>
          <Card.Text>{props.cityProps}</Card.Text>
          <Card.Text>{props.dateProps}</Card.Text>
          <i className={ano}></i>
          <Card.Text>{props.valueProps.weather[0].description}</Card.Text>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <span className="temp">
              <span className="temp-number">
                {Math.floor(props.valueProps.main.temp)}
              </span>
              <span className="wi wi-degrees "></span>
            </span>
            <span className="humidity">
              <i className="wi wi-raindrop"></i>
              {props.valueProps.main.humidity} %
            </span>

            <span className="wind">
              <i className="wi wi-small-craft-advisory"></i>
              {props.valueProps.wind.speed} <span className="vel">Km/h</span>
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

function backgroundSetter(temp) {
  if (temp >= 30) {
    return "#fc6f03";
  } else if (temp > 20 && temp < 30) {
    return "#94fc03";
  } else if (temp > 10 && temp < 20) {
    return "#7aebd1";
  } else if (temp > 0 && temp < 10) {
    return "#a4d2ed";
  } else if (temp <= 0) {
    return "#f1e8fa";
  }
}
export default WeatherCard;
