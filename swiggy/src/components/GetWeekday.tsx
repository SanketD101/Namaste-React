import React, { useState } from "react";
// import "./GetWeekday.css";

export default function GetWeekday() {
  const [date, setDate] = useState("");
  const [weekDay, setWeekDay] = useState("");
  const findDay = () => {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    console.log(new Date(date).getDay());
    setWeekDay(weekday[new Date(date).getDay()]);
  };
  return (
    <div className="container pt-26">
      <h1>Get Weekday</h1>
      <input
        type="date"
        data-testid="date-input"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button data-testid="find-day-btn" onClick={findDay}>
        Find Day
      </button>
      {weekDay && <span className="result">That date falls on {weekDay}!</span>}
    </div>
  );
}
