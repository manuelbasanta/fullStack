import React from "react";

const Search = ({searchString, onChange}) => {
  return (
    <div>
      <input
        placeholder="Search by name"
        value={searchString}
        onChange={onChange}
      />
    </div>
  );
};

export default Search; 