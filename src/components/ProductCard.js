// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border p-4 rounded shadow-lg">
      <img src={product.image} alt={product.name} className="h-40 w-full object-cover mb-4" />
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="text-gray-600">₹{product.price}</p>
      <button
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
