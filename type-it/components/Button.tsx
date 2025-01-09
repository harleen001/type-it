"use client";

import React from 'react';
import './Button.css';  // Assuming you will create a separate CSS file

const Button = ({ label = "Click Me", onClick }: { label?: string, onClick?: () => void }) => {
  return (
    <button className="pushable" onClick={onClick}>
      <span className="front">{label}</span>
    </button>
  );
};

export default Button;
