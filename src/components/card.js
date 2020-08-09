import React from "react";
import { Card } from "react-bootstrap";

function WeatherCard(props) {
  let ano = "wi wi-owm-day-" + props.valueProps.weather[0].id + " display-2";
  return (
    <>
      <Card
        bg="warning"
        text="dark"
        style={{ width: "15rem", display: "inline-flex" }}
        className="m-2"
      >
        <Card.Header>
          <Card.Text>{props.cityProps}</Card.Text>
          <Card.Text>{props.dateProps}</Card.Text>
          <i className={ano}></i>
          <Card.Text>{props.valueProps.weather[0].description}</Card.Text>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {props.valueProps.main.temp}
            {props.valueProps.main.humidity}
            {props.valueProps.wind.speed}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default WeatherCard;
