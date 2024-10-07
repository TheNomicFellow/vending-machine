// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-2xl font-bold">Vending Machine</h1>
      <div>
        <Link to="/" className="mr-4">Products</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </header>
  );
};

export default Header;
