import React, { useState, useEffect } from "react";
import "./App.css";
import Search from './components/Search'
import Form from './components/Form';
import Numbers from './components/Numbers';
import personsService from './services/persons';
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });
  const [searchString, setSearchString] = useState('');
  const [eventMsg, setEventMsg] = useState({msg: '', type: ''});

  useEffect( () => {

    personsService.getAll()
    .then(response => {
      setPersons(response)
    })
    
  }, [])

  const handleSubmit = e => {
    e.preventDefault();

    const person = persons.find(person => person.name.toLowerCase() === newPerson.name.toLowerCase());

    if (!person) {
      const newItem = { ...newPerson };

      personsService.addPerson(newItem)
        .then(response => {
          setPersons(persons.concat(response));
          setNewPerson({ name: "", number: "" });
          setEventMsg({msg: `Added ${response.name}`, type: 'success'})
          setTimeout(() => {
            setEventMsg({msg: '', type: ''})
          }, 5000)
        })
    } else {

      if (window.confirm(`${newPerson.name} is already added to the phonebook, replace the old number with a new one?`)) {
        personsService.updateNumber({...person, number: newPerson.number})
          .then(response => {
            const index = persons.findIndex(el => el.id === response.id);
            let newPersons = [...persons];
            setEventMsg({msg: `Changed ${response.name}'s number`, type: 'success'});
            setTimeout(() => {
              setEventMsg({msg: '', type: ''})
            }, 5000)
            newPersons.splice(index,1,response)
            setPersons(newPersons);
          })
          .catch(response => {
            setEventMsg({msg: `${newPerson.name} has already been removed from the server`, type: 'error'})
            setTimeout(() => {
              setEventMsg({msg: '', type: ''})
            }, 5000)
          })
      }
    }
  };

  const handleInputChange = event => {
    setNewPerson({
      ...newPerson,
      [event.target.name]: event.target.value
    });
  };

  const handleSearchChange = event => {
    setSearchString(event.target.value)
  }

  const deletePerson = id => {
    const person = persons.find(person => person.id === id);

    if (window.confirm(`Delete ${person.name}?`)) { 
      personsService.deletePerson(id)
        .then(response => {
          setPersons(persons.filter(person => person.id !== id));
        })
        .catch(response => {
          console.log(response)
        })
    }
  }

  const filteredList = persons.filter(person => person.name.toLowerCase().includes(searchString.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={eventMsg} />
      <Search onChange={handleSearchChange} searchString={searchString} /> 
      <Form handleInputChange={handleInputChange} handleSubmit={handleSubmit} newPerson={newPerson}/>
      <Numbers filteredList={filteredList} handleClick={deletePerson}/>
    </div>
  );
};

export default App;
