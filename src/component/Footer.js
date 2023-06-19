import React from "react";
import { Link } from "react-router-dom";

//import images
import logo from "../images/logo.png";

function Footer() {
  return (
    <div className="h-[60vh] bg-primary px-4">
      <div className="w-full h-[50vh]   grid grid-cols-3 py-2 md:gap-2 lg:gap-8 items-center">
        <div className="md:w-1/2 lg:w-3/4 mx-auto flex justify-center">
          <img src={logo} alt="logo" className="w-3/4" />
        </div>
        <div className="text-left md:w-full">
          <h3 className="text-white font-medium tracking-wider text-xl">
            About Us
          </h3>
          <p className="py-2 text-gray-100 text-sm lg:text-base text-justify">
            The Cyber Security Authority (CSA) has been established by the
            Cybersecurity Act, 2020 (Act 1038) to regulate cybersecurity
            activities in Ghana; to promote the development of cybersecurity in
            the country and to provide for related matters.Read More
          </p>
          <a href="" className="text-blue-400 text-base">
            Data Protection Policy
          </a>
        </div>

        <div className="">
          <div className="bg-gray-100 px-8 py-4 mx-4  border-2 border-gray-200 hover:bg-primary text-primary hover:text-white transition-all duration-500">
            <Link
              to="/downloads"
              className="text-xl font-semibold  flex justify-center text-center w-full  gap-2">
              <div>Download</div>
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
      <div className="w-full  mx-auto py-2">
        {" "}
        <hr />
      </div>
    </div>
  );
}

export default Footer;
