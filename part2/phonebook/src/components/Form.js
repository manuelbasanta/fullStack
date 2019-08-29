import React from "react";

const Form = ({handleSubmit,handleInputChange, newPerson}) => {
  return (
    <div>
      <h3>Add new</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            name:{" "}
            <input
              value={newPerson.name}
              name="name"
              onChange={handleInputChange}
            />
          </div>
          <div>
            number:{" "}
            <input
              value={newPerson.number}
              name="number"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;