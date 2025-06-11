import React, { useState, useEffect } from "react";

const DiscountTimer = () => {
  const calculateTimeLeft = () => {
    const offerEnd = new Date("2025-06-20T23:59:59");
    const now = new Date();
    const diff = offerEnd - now;

    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div style={{ background: '#ffcccc', padding: '1rem', borderRadius: '8px' }}>
        <h2>Offer Expired</h2>
        <p>Sorry! The limited-time discount has ended.</p>
      </div>
    );
  }

  return (
    <div style={{ background: '#fff3cd', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
      <h2>Limited Time Discount!</h2>
      <p>
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s left
      </p>
    </div>
  );
};

export default DiscountTimer;