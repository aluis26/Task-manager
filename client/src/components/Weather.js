import React, { useState, useEffect } from "react";

export default function Weather() {
    let [weather, setWeather] = useState('');
    function getWeather() {
        // console.log(url);
        fetch("https://api.darksky.net/forecast/4840679cab6c14a98a25bf3c81075e6c/41.3851,2.1734", {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrer: "no-referrer"
        }
            .then(response => response)
            .then(data => console.log(data))

        )
    }
    // 
    useEffect(() => {
        getWeather();
    }, []);

    return (
        <React.Fragment>
            <div className="Momentum">
                {weather.currently}

            </div>
        </React.Fragment>
    );
}

// export default App;