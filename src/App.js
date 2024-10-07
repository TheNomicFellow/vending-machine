// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsPage onAddToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
      </Routes>
    </Router>
  );
}

export default App;
