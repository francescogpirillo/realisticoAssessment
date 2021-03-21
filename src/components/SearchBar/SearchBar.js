import React from 'react';

const SearchBar = ({ type, placeHolder, onChange }) => {        

    return (
        <input type= {type}
            placeholder={placeHolder} 
            onChange = {onChange}
        />
    )
}

export default SearchBar;