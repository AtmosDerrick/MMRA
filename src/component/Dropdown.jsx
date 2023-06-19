import React, { useState } from "react";
import { Link } from "react-router-dom";

function Dropdown() {
  const [active, setActive] = useState(false);

  return (
    <div className="w-1/4 absolute z-50 px-8 bg-gray-100 right-20 top-20 h-auto py-4 rounded-2xl shadow-md ">
      <div>
        <ul className="">
          <li className="mx-0 text-lg flex hover:cursor-pointer gap-2 items-center  px-4 py-2 border-b-2 border-transparent hover:border-blue-500 transition-all duration-1000 animate-expandBorder ">
            <a href="#features">Features</a>
          </li>
          <li className="mx-0 text-lg hover:cursor-pointer text-left px-4 py-2 border-b-2 border-transparent hover:border-blue-500 transition-all duration-1000 animate-expandBorder">
            <Link to="/help"> Help Center</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
