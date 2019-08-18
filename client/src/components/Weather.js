import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { WiDaySunny, WiCloudy } from "weather-icons-react";

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

    let newWeather = Object.values(weather);

    // function weatherIcons() {
    //     let weatherDesc = newWeather[2]
    //     if (weatherDesc === 'few clouds' || 'clouds' || 'cloudy') {
    //         return <WiCloudy size={24} color='#000' />
    //     }
    //     return <WiDaySunny size={24} color='#000' />
    // }

    useEffect(() => {
        getWeather();
    }, []);

    return (
        <div>
            <Card bg="transparent" border="none" style={{ width: "10rem" }} className="float-right text-center ">
                <Card.Body>
                    <Card.Title>
                        {newWeather[1] + ","} {newWeather[3]}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        {/* <i className="fas fa-cloud-sun" size={30} /> */}
                        <WiCloudy size={30} color="#000" />
                    </Card.Subtitle>
                    <Card.Text>
                        {newWeather[0] + " ºC"} <br />
                        {newWeather[2]}
                        {/* <Moment format="YYYY/MM/DD">{dateToFormat}</Moment> */}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
