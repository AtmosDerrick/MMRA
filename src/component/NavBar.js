import React, { useState, useEffect } from "react";
import "../css/Animate.css";
import { Link } from "react-router-dom";

//importing logo
import logo from "../images/logo.png";

function NavBar() {
  const [active, setActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuToggle = () => {
    setActive(!active);
  };

  return (
    <div className="">
      {" "}
      <div
        className={
          isScrolled
            ? "w-full px-8 flex justify-between bg-primary h-[10vh] items-center  text-white fixed z-50 bg-opacity-70 backdrop-blur-lg transition-all duration-500"
            : "w-full px-8 flex justify-between bg-primary h-[10vh] items-center  text-white fixed z-50 transition-all duration-500"
        }>
        <Link to="/" className="font-bold text-xl flex gap-2">
          <img src={logo} alt="logo" className="w-12" />
          <div className="flex items-center">MMRA</div>
        </Link>

        <div className="flex ">
          <div className="mx-4 flex items-center text-lg font-semibold leading-normal">
            <Link to="/help"> Help Center</Link>
            <span className="p-2 mx-2 w-10 h-10 font-medium text-xl  text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
            </span>
          </div>
          <div className="bg-gray-100 px-8 py-2  border-2 border-gray-200 hover:bg-primary text-primary hover:text-white transition-all duration-500">
            <Link
              to="/downloads"
              className="flex items-center gap-2  font-medium">
              Download
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
