import React from 'react';

const ContactPage = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h1>Contact Us</h1>
      <p>If you have questions about skincare, products, or orders, reach out!</p>

      <h2>Contact Details</h2>
      <p><strong>Name:</strong> GlowSkin Support</p>
      <p><strong>Phone:</strong> <a href="tel:1234567890">1234567890</a></p>
      <p><strong>Email:</strong> <a href="mailto:support@glowskin.com">support@glowskin.com</a></p>

      <h2>Address</h2>
      <p>
        GlowSkin HQ,<br />
        Coimbatore, Tamil Nadu, India
      </p>
    </div>
  );
};

export default ContactPage;
