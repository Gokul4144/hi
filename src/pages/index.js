import React from 'react';
import DiscountTimer from '../components/DiscountTimer';
import ProductList from '../components/ProductList';
import ContactPage from '../components/ContactPage';
import AboutPage from '../components/AboutPage';
import LoginPage from '../components/LoginPage';

const ShopPage = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Welcome to GlowSkin</h1>
      <DiscountTimer />
      <ProductList />
      <AboutPage />
      <ContactPage />
      <LoginPage />
    </div>
  );
};

export default ShopPage;