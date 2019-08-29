import React from 'react';

const SearchField = ({handleSubmit}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="searchText" />
            </form>
        </div>
    )
}

export default SearchField;