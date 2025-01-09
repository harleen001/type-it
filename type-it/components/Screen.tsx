"use client";

import React from "react";

type ScreenProps = {
  text: string;
};

const Screen: React.FC<ScreenProps> = ({ text }) => {
  return (
    <div
      style={{
        backgroundColor: "#222",
        color: "#fff",
        padding: "20px",
        fontSize: "2rem",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    >
      {text}
    </div>
  );
};

export default Screen;
