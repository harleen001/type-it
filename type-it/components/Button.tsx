"use client";

import React from "react";
import "./Button.css";

type ButtonProps = {
  label: string;
  onClick: (label: string) => void; // Pass label to parent onClick handler
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="pushable" onClick={() => onClick(label)}>
      <span className="front">{label}</span>
    </button>
  );
};

export default Button;
