import React from "react";
const Card = ({ restro }) => {
  const { id, name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    restro.info;
  // console.log("card =>", id);
  return (
    <div className="flex flex-col flex-wrap border rounded-2xl p-1 w-60">
      <img
        className="w-60 rounded-2xl"
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
