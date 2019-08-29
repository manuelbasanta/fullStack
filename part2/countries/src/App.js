import React, { useState }from 'react';
import './App.css';
import axios from 'axios';
import SearchField from './components/SearchField';
import CountriesList from './components/CountriesList';
import FullCountrie from './components/FullCountrie';

function App() {

	const [countries, setCountries] = useState([]);
	const [selectedCountrie, setSelectedCountrie] = useState('');

	const fetchCountries = searchString => {
		setSelectedCountrie('');
		axios
			.get(`http://restcountries.eu/rest/v2/name/${searchString}`)
			.then( response => {
				setCountries(response.data);
			})
			.catch(error => {
				setCountries([]);
			})
	}

	const newSearch = (event) => {
		event.preventDefault();
		let searchString = event.target.searchText.value;
		searchString !== '' && fetchCountries(searchString);
	}

	return (
	<div >
		<SearchField handleSubmit={newSearch}/>
		{
			selectedCountrie === '' ? 
			<CountriesList countries={countries} handleClick={setSelectedCountrie}/> :
			<FullCountrie countrie={selectedCountrie} />  
			
		}
	</div>
	);
}

export default App;