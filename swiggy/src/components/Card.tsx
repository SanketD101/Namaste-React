import React from "react";
const Card = ({ restro }) => {
  const { id, name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    restro.info;
  console.log("card =>", id);
  return (
    <div
      className="card"
      style={{
        width: "200px",
        border: "1px solid black",
        display: "flex",
        padding: "5px",
        // justifyContent: "center",
        flexDirection: "column",
        borderRadius: "5px",
      }}
    >
      <img
        style={{ width: "200px" }}
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="logo"
      />
      <div style={{ fontWeight: "bold" }}>{name}</div>
      <div>{cuisines.join(", ")}</div>
      <div>{avgRating}</div>
      <div>{costForTwo}</div>
    </div>
  );
};

export default Card;
