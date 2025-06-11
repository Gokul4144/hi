import React, { useState } from "react";

const ProductList = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Glow Serum", price: 499 },
    { id: 2, name: "Aloe Face Cream", price: 399 },
    { id: 3, name: "Vitamin C Toner", price: 299 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Our Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ₹{product.price} <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h3>Cart: {cart.length} item(s)</h3>
    </div>
  );
};

export default ProductList;