import React from 'react';
import './search-box.css';
const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      onChange={handleChange}
      type="search"
      placeholder={placeholder}
    ></input>
  );
};

export default SearchBox;
