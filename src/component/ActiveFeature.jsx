import React from "react";

function ActiveFeature() {
  return (
    <div className="relative pt-20">
      {" "}
      <div className="absolute z-40 px-8 bg-gray-100  ">
        <div className="mt-2 my-2">
          <div className="grid grid-cols-3 w-full mt-4 gap-4 text-primary ">
            <div className="bg-blue-100 hover:cursor-pointer hover:shadow-md text-center font-bold  rounded-2xl text-2xl uppercase h-[10rem] flex items-center p-4 justify-center">
              <a href="#act">
                <span>
                  <i class="fa-solid fa-scale-balanced"></i>
                </span>
                Acts
                <br></br>
                <span className="text-base  normal-case font-normal">
                  Consequat veniam cupidatat ea fugiat dolore mollit excepteur
                  culpa occaecat.
                </span>
              </a>
            </div>
            <div className="bg-blue-100 hover:cursor-pointer hover:shadow-md text-center font-bold tracking-wider rounded-2xl text-2xl uppercase h-[10rem] flex items-center p-4 justify-center">
              <a href="#tips">
                <span>
                  <i class="fa-solid fa-lightbulb"></i>
                </span>
                Tips
                <br></br>
                <span className="text-base  normal-case font-normal">
                  Consequat veniam cupidatat ea fugiat dolore mollit excepteur
                  culpa occaecat.
                </span>
              </a>
            </div>
            <div className="bg-blue-100 hover:cursor-pointer hover:shadow-md text-center font-bold tracking-wider rounded-2xl text-2xl uppercase h-[10rem] flex items-center p-4 justify-center">
              <a href="#news">
                <span>
                  <i class="fa-solid fa-newspaper"></i>
                </span>
                News
                <br></br>
                <span className="text-base  normal-case font-normal">
                  Consequat veniam cupidatat ea fugiat dolore mollit excepteur
                  culpa occaecat.
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveFeature;
