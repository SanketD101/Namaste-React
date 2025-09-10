import React, { useEffect, useState } from "react";
import Card from "./Card";

const Restaurant = () => {
  const [mainData, setMainDate] = useState([]);
  const [filterData, setFilterDate] = useState([]);

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
    <div className="pt-26 flex flex-wrap gap-4 lg:gap-12">
      {filterData && filterData.map((restro) => <Card restro={restro} />)}
    </div>
  );
};

export default Restaurant;
