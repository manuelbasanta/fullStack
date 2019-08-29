import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CountrieWeather = ({countrie}) => {

    const [weather, setWeather] = useState({})

    useEffect( () => {
        let url = `http://api.openweathermap.org/data/2.5/weather?appid=d57390d3149f5fa72564b4b5e7618739&q=${countrie.capital}&units=metric`;
        axios
        .get(url)
        .then(response => {
            setWeather(response.data)
        })
    }, [countrie])



    return (
        <div>
            <h2>Weather in {countrie.capital}</h2>
            {
                weather.main &&
                <div>
                    <h3>Temperature: {weather.main.temp} celsius</h3>
                    <h3>Wind: {weather.wind.speed} meter/sec</h3>
                </div>
            }
        </div>
    )
}

export default CountrieWeather;