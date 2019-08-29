import React from 'react';
import FullCountrie from './FullCountrie';

const CountriesList = ({countries, handleClick}) => {
    let list;
    if(countries.length > 10) {
        list = <div>Too many matches, specify another filte</div>;
    } else if (countries.length === 1) {
        list = <FullCountrie countrie={countries[0]}/>
    } else {
        list = countries.map(countrie => {
            return (
                <div key={countrie.alpha3Code}>
                    {countrie.name}
                    <button onClick={() => handleClick(countrie)}>Show</button>
                </div>
            )
        })
    }

    return (
        <div>
            {list}
        </div>
    )
}

export default CountriesList;