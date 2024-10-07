// src/pages/CartPage.js
import React from 'react';

const CartPage = ({ cartItems }) => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length > 0 ? (
        <ul className="space-y-4">
          {cartItems.map((item, index) => (
            <li key={index} className="border p-4 rounded-lg shadow-md">
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default CartPage;
