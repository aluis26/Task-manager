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
    let newWeather = Object.values(weather)
    console.log(newWeather)
    // console.log(newWeather[0][1])

    useEffect(() => {
        getWeather();
    }, []);

    return (
        <div>
            <Card style={{ width: "18rem" }} className="float-right text-center">
                <Card.Body>
                    <Card.Title>{newWeather[1] + ','} {newWeather[3]}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Date</Card.Subtitle>
                    <Card.Text>
                        {newWeather[0] + ' ºC'} <br />
                        {newWeather[2]}
                        {/* <Moment format="YYYY/MM/DD">{dateToFormat}</Moment> */}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
