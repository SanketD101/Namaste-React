import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import PramotedFun from "./PramotedFun";

const Restaurant = () => {
  const [mainData, setMainDate] = useState([]);
  const [filterData, setFilterDate] = useState([]);
  const HigherFuntion = PramotedFun(Card);
  const [menuList] = useState([
    "contact",
    "getday",
    "chips",
    "CharacterCount",
    "ImageGallery",
    "HigherOrderFun",
  ]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setMainDate(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterDate(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log("m", mainData);
  console.log("f", filterData);

  return (
    <>
      {menuList.map((item) => {
        return (
          <Link to={item}>
            <button className="mt-26 mb-5 ml-2 w-3y p-1.5 border-1 rounded-2xl">
              {item}
            </button>
          </Link>
        );
      })}

      <div className="flex flex-wrap gap-4 lg:gap-12">
        {filterData &&
          filterData.map((restro: any) =>
            restro?.info?.avgRating == 4.2 ? (
              <Card restro={restro} />
            ) : (
              <HigherFuntion restro={restro} />
            )
          )}
      </div>
    </>
  );
};

export default Restaurant;
