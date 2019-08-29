import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
    const response = axios.get(baseUrl);
    return response.then(response => response.data);
}

const addPerson = newPerson => {
    const response = axios.post(baseUrl,newPerson);
    return response.then(response => response.data);
}

const deletePerson = id => {
    const response = axios.delete(`${baseUrl}/${id}`);
    return response.then(response => response)
}

const updateNumber = (person) => {
    const response = axios.put(`${baseUrl}/${person.id}`, person)
    return response.then(response => response.data)
}

export default { getAll, addPerson, deletePerson, updateNumber };