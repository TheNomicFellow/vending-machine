// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="p-2 border rounded w-full"
        placeholder="Search for products..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
