"use client";

import React, { useState } from "react";
import Button from "../components/Button"; // Adjust path as necessary
import Screen from "../components/Screen"; // Adjust path as necessary

const MainPage: React.FC = () => {
  const [displayText, setDisplayText] = useState<string>("");

  const handleButtonClick = (label: string) => {
    setDisplayText((prevText) => prevText + label); // Append the new label
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", justifyContent:"" }}>
      <Screen text={displayText} />
      <div>
        <Button label="esc" onClick={handleButtonClick} />
        <Button label="f1" onClick={handleButtonClick} />
        <Button label="f2" onClick={handleButtonClick} />
        <Button label="f3" onClick={handleButtonClick} />
        <Button label="f4" onClick={handleButtonClick} />
        <Button label="f5" onClick={handleButtonClick} />
        <Button label="f6" onClick={handleButtonClick} />
        <Button label="f7" onClick={handleButtonClick} />
        <Button label="f8" onClick={handleButtonClick} />
        <Button label="f9" onClick={handleButtonClick} />
        <Button label="f10" onClick={handleButtonClick} />
        <Button label="f11" onClick={handleButtonClick} />
        <Button label="f12" onClick={handleButtonClick} />
        <Button label="prt sc" onClick={handleButtonClick} />
        <Button label="delete" onClick={handleButtonClick} />
      </div>

      <div style={{marginTop:"12px"}}>
        <Button label="~" onClick={handleButtonClick} />
        <Button label="1" onClick={handleButtonClick} />
        <Button label="2" onClick={handleButtonClick} />
        <Button label="3" onClick={handleButtonClick} />
        <Button label="4" onClick={handleButtonClick} />
        <Button label="5" onClick={handleButtonClick} />
        <Button label="6" onClick={handleButtonClick} />
        <Button label="7" onClick={handleButtonClick} />
        <Button label="8" onClick={handleButtonClick} />
        <Button label="9" onClick={handleButtonClick} />
        <Button label="0" onClick={handleButtonClick} />
        <Button label="-" onClick={handleButtonClick} />
        <Button label="+" onClick={handleButtonClick} />
        <Button label="backspace" onClick={handleButtonClick} />  
      </div>

      <div style={{marginTop:"12px"}}>
        <Button label="tab" onClick={handleButtonClick} />
        <Button label="Q" onClick={handleButtonClick} />
        <Button label="W" onClick={handleButtonClick} />
        <Button label="E" onClick={handleButtonClick} />
        <Button label="R" onClick={handleButtonClick} />
        <Button label="T" onClick={handleButtonClick} />
        <Button label="Y" onClick={handleButtonClick} />
        <Button label="U" onClick={handleButtonClick} />
        <Button label="I" onClick={handleButtonClick} />
        <Button label="O" onClick={handleButtonClick} />
        <Button label="P" onClick={handleButtonClick} />
        <Button label="{" onClick={handleButtonClick} />
        <Button label="}" onClick={handleButtonClick} />
        <Button label="\" onClick={handleButtonClick} />  
      </div>

      <div style={{marginTop:"12px"}}>
        <Button label="caps lock" onClick={handleButtonClick} />
        <Button label="A" onClick={handleButtonClick} />
        <Button label="S" onClick={handleButtonClick} />
        <Button label="D" onClick={handleButtonClick} />
        <Button label="F" onClick={handleButtonClick} />
        <Button label="G" onClick={handleButtonClick} />
        <Button label="H" onClick={handleButtonClick} />
        <Button label="J" onClick={handleButtonClick} />
        <Button label="K" onClick={handleButtonClick} />
        <Button label="L" onClick={handleButtonClick} />
        <Button label=":" onClick={handleButtonClick} />
        <Button label="'" onClick={handleButtonClick} />
        <Button label="enter" onClick={handleButtonClick} />  
      </div>

      <div style={{marginTop:"12px"}}>
        <Button label="shift" onClick={handleButtonClick} />
        <Button label="Z" onClick={handleButtonClick} />
        <Button label="X" onClick={handleButtonClick} />
        <Button label="C" onClick={handleButtonClick} />
        <Button label="V" onClick={handleButtonClick} />
        <Button label="B" onClick={handleButtonClick} />
        <Button label="N" onClick={handleButtonClick} />
        <Button label="M" onClick={handleButtonClick} />
        <Button label="<" onClick={handleButtonClick} />
        <Button label=">" onClick={handleButtonClick} />
        <Button label="?" onClick={handleButtonClick} />
        <Button label="shift" onClick={handleButtonClick} />
      </div>


    </div>
  );
};

export default MainPage;
