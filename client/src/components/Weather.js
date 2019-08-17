import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Moment from "react-moment";

// console.log(process.env.OPENWEATHER_KEY)
// let url = "https://api.openweathermap.org/data/2.5/weather";
// url += "?q=barcelona";
// url += "&appid=4b2c9facbcff649533a92fee26dd019a";
// console.log(url);
// let [location, setLocation] = useState('barcelona');
// let [key, setKey] = useState('4b2c9facbcff649533a92fee26dd019a');

export default function Weather() {
  let [weather, setWeather] = useState("");

  // async function getWeather() {
  //     fetch('https://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=4b2c9facbcff649533a92fee26dd019a&units=metric')
  //         .then(response => response.json())
  //         .then(response => setWeather(response));
  //     console.log(response)
  // }
  async function getWeather() {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=4b2c9facbcff649533a92fee26dd019a&units=metric"
    )
      .then(response => response.json())
      .then(response => response.main.temp)
      .then(temp => setWeather(temp));
  }
  console.log(weather);

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div>
      <Card style={{ width: "18rem" }} className="float-right">
        <Card.Body>
          <Card.Title>City Name</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Date</Card.Subtitle>
          <Card.Text>
            {weather} ºC
            {/* <Moment format="YYYY/MM/DD">{dateToFormat}</Moment> */}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
