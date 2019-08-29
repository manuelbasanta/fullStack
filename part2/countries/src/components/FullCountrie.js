import React from 'react';
import CountrieWeather from './CountrieWeather';

const FullCountrie = ({countrie}) => {

    const imgStyle = {
        width: 250,
    };

    return (
        <div>
            <h1>{countrie.name}</h1>
            <h3>Capital: {countrie.capital}</h3>
            <h3>Population: {countrie.population}</h3>
            <h3>Languages:</h3>
            <ul>
                {countrie.languages.map(lang => <li key={lang.iso639_2}>{lang.name}</li>)}
            </ul>
            <img style={imgStyle} src={countrie.flag} alt="flag"/>
            <CountrieWeather countrie={countrie}/>
        </div>
    )
}

export default FullCountrie;