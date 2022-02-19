import React from 'react';
import { useState } from 'react';
function Search({ onFilter }) {
  const [input, setInput] = useState('');

  const handleSearch = (e) => {
    e.persist();
    setInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
    onFilter(e.target.value);
  };
  const handleClick = () => {
    onFilter(input);
  };
  return (
    <div>
      <input
        type="search"
        name="name"
        onChange={handleSearch}
        defaultValue={input}
        placeholder="Search..."
      ></input>
      <button onClick={handleClick}>Search</button>
    </div>
  );
}
export default Search;
