import React from "react";
import Card from "./Card";

const PramotedFun = (Card) => {
  return (props) => {
    return (
      <div>
        <label className="">Pramoted</label>
        <Card {...props} />
      </div>
    );
  };
};
export default PramotedFun;
