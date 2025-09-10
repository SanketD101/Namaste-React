import React, { useState } from "react";
// import "./styles.css";
const ChipsInput = () => {
  const [chips, setChips] = useState([""]);
  const [oneval, setOneVal] = useState("");
  const [ind, setInd] = useState(0);

  const handleonkeydown = (e) => {
    console.log(oneval);
    if (e.key === "Enter" && oneval.trim()) {
      setChips((prevItems) => [...prevItems, oneval]);
      setOneVal("");
    }
  };
  console.log(ind);
  console.log(chips);
  return (
    <div className="main-container pt-26">
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        className="input"
        value={oneval}
        onChange={(e) => setOneVal(e.target.value)}
        onKeyDown={handleonkeydown}
      />
      <div>
        {chips.map((item, ind) => {
          return (
            <div>
              {item}{" "}
              <button
                onClick={() =>
                  setChips((pitem) => pitem.filter((_, index) => index !== ind))
                }
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChipsInput;
