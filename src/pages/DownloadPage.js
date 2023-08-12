import React from "react";

import playStore from "../images/playstore.png";
import appStore from "../images/appstore.svg";
import windowsStore from "../images/windowsstore.png";

function DownloadPage() {
  return (
    <div className="h-auto  pt-16 w-full md:w-3/4 mx-auto mb-8">
      <div className="px-4  md:px-0 md:flex md:justify-between h-auto md:h-[40vh] items-center mt-12 md:mt-0">
        <div className="text-3xl font-bold text-primary md:flex md:justify-between text-justify uppercase w-full ">
          <div>
            {" "}
            Download <span className="text-orange-600">MMRA</span>
          </div>
        </div>

        <div className="w-full text-left text-base hidden md:inline-block">
          <div className="font-medium text-xl">
            Learn the laws governing cyber Security And Data Protection,
            <br></br>
            Get some tips on how protect your personal informations for Hackers
            <span className="text-primary underline font-medium px-2 text-sm">
              Learn More
            </span>
          </div>
        </div>
      </div>

      <div className="w-full md:mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 md:gap-4 mt-8">
        <div className=" h-[50vh] w-full md:w-3/4 bg-gray-900 rounded-2xl py-2 flex cursor-pointer text-gray-100 hover:text-gray-900  hover:bg-blue-100 transition-all duration-500 ">
          <div>
            <div className="base italic text-center ">Mobile and Tablets</div>
            <div className="mt-6 font-semibold text-5xl text-center">
              Android
            </div>
            <div className="text-sm px-2 text-center">
              Minimum Requirements (Version 2.23.7.14) Android OS 4.1 or above
            </div>
            <div className=" flex justify-center w-full mt-12">
              <img src={playStore} className="w-3/4 " />
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-0  h-[50vh] w-full md:w-3/4 bg-gray-900 rounded-2xl py-2 flex  cursor-pointer text-gray-100 hover:text-gray-900 hover:bg-blue-100 transition-all duration-500  ">
          <div>
            {" "}
            <div className="base italic text-center ">Mobile</div>
            <div className="mt-6 font-semibold text-5xl text-center ">iOS</div>
            <div className="text-sm px-2 text-center ">
              Minimum Requirements (Version 22.13.74) Requires iOS 12.0 or newer
            </div>
            <div className=" flex justify-center w-full mt-12">
              <img src={appStore} className="w-3/4 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadPage;
