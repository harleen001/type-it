"use client";
import Button from "../components/Button";

export default function Home() {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to My Next.js App</h1>
      <Button label="Click Me" onClick={handleClick} />
    </div>
  );
}
