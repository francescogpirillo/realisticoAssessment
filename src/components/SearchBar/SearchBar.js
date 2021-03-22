import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ type, placeHolder, onChange }) => {        

    return (
        <input type= {type}
            placeholder={placeHolder} 
            onChange = {onChange}
        />
    )
}

SearchBar.propTypes = {
    type: PropTypes.string,
    placeHolder: PropTypes.string,
    onChange: PropTypes.func
};

export default SearchBar;