import React from 'react';

const Numbers = ({filteredList, handleClick}) => {
    const listToShow = filteredList.map( person => {
      return (
        <div key={person.id}>
          {person.name} {person.number}
          <button onClick={() => handleClick(person.id)}>Delete</button>
        </div> 
      )
    })

    return (
        <div>
          <h2>Numbers</h2>
          {listToShow}
        </div>
      );
}

export default Numbers;
