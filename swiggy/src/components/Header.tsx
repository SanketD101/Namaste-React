import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed h-20 w-[100%] bg-amber-200">
      <ul className="flex justify-between items-center">
        <div>
          <li>
            <img
              className="size-19 rounded-full"
              src="data:image/png;base64,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"
              alt=""
            />
          </li>
        </div>
        <div className="flex gap-5">
          <Link to={"/"}>
            <li className="bg-amber-300 p-2 rounded-2xl">Main</li>
          </Link>
          <li className="bg-amber-300 p-2 rounded-2xl">About</li>
          <li className="bg-amber-300 p-2 rounded-2xl">Share</li>
          <Link to={"/contact"}>
            <li className="bg-amber-300 p-2 rounded-2xl">Contact Us</li>
          </Link>
          <Link to={"/getday"}>
            <li className="bg-amber-300 p-2 rounded-2xl">GetDay</li>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Header;
