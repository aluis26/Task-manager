import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

export default function Weather() {
  let [weather, setWeather] = useState({
    temp: 0,
    cityName: "",
    desc: "",
    country: ""
  });

  async function getWeather() {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=4b2c9facbcff649533a92fee26dd019a&units=metric"
    )
      .then(response => response.json())
      .then(response =>
        setWeather({
          temp: response.main.temp,
          cityName: response.name,
          desc: response.weather[0].description,
          country: response.sys.country
        })
      );
  }
  console.log(weather);
  console.log(Object.values(weather));

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
            {Object.values(weather)}
            {/* <Moment format="YYYY/MM/DD">{dateToFormat}</Moment> */}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
