import React from "react";

import playStore from "../images/playstore.png";
import appStore from "../images/appstore.svg";
import windowsStore from "../images/windowsstore.png";

function DownloadPage() {
  return (
    <div className="h-auto  pt-16 w-3/4 mx-auto mb-8">
      <div className="flex justify-between h-[40vh] items-center">
        <div className="text-3xl font-bold text-primary text-justify uppercase w-full">
          Download{" "}
          <span className="bg-primary text-white px-4 py-1 rounded-md">
            MMRA
          </span>
        </div>

        <div className="w-full text-left text-base">
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

      <div className="w-full mx-auto grid grid-cols-2 gap-4 mt-8">
        <div className=" h-[50vh] w-3/4 bg-gray-900 rounded-2xl py-2 flex cursor-pointer text-gray-100 hover:text-gray-900  hover:bg-blue-100 transition-all duration-500 ">
          <div>
            {" "}
            <div className="base italic ">Mobile and Tablets</div>
            <div className="mt-6 font-semibold text-5xl ">Android</div>
            <div className="text-sm px-2">
              Minimum Requirements (Version 2.23.7.14) Android OS 4.1 or above
            </div>
            <div className=" flex justify-center w-full mt-12">
              <img src={playStore} className="w-3/4 " />
            </div>
          </div>
        </div>

        <div className="  h-[50vh] w-3/4 bg-gray-900 rounded-2xl py-2 flex  cursor-pointer text-gray-100 hover:text-gray-900 hover:bg-blue-100 transition-all duration-500  ">
          <div>
            {" "}
            <div className="base italic ">Mobile</div>
            <div className="mt-6 font-semibold text-5xl ">iOS</div>
            <div className="text-sm px-2 ">
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
