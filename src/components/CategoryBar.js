// src/components/CategoryBar.js
import React from 'react';

const categories = ['All', 'Beverages', 'Snacks', 'Fruits', 'Dairy'];

const CategoryBar = ({ onCategoryChange }) => {
  return (
    <div className="flex space-x-4 mb-4">
      {categories.map((category) => (
        <button
          key={category}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
