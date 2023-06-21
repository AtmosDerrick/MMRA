import React from "react";

function Features() {
  return (
    <div className="mt-8 my-2" id="features">
      <div className="font-bold text-2xl uppercase border-b-2 py-2">
        Features
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 w-full mt-4 gap-4 text-primary ">
        <div className="bg-blue-100 hover:cursor-pointer hover:shadow-md text-center font-bold  rounded-2xl text-2xl uppercase h-[10rem] flex items-center p-4 justify-center">
          <div>
            <span className="px-2">
              <i class="fa-solid fa-scale-balanced"></i>
            </span>
            Acts
            <br></br>
            <span className="text-base  normal-case font-normal">
              Consequat veniam cupidatat ea fugiat dolore mollit excepteur culpa
              occaecat.
            </span>
          </div>
        </div>
        <div className="bg-blue-100 hover:cursor-pointer hover:shadow-md text-center font-bold tracking-wider rounded-2xl text-2xl uppercase h-[10rem] flex items-center p-4 justify-center">
          <div>
            <span className="px-2">
              <i class="fa-solid fa-lightbulb"></i>
            </span>
            Tips
            <br></br>
            <span className="text-base  normal-case font-normal">
              Consequat veniam cupidatat ea fugiat dolore mollit excepteur culpa
              occaecat.
            </span>
          </div>
        </div>
        <div className="bg-blue-100 hover:cursor-pointer hover:shadow-md text-center font-bold tracking-wider rounded-2xl text-2xl uppercase h-[10rem] flex items-center p-4 justify-center">
          <div>
            <span className="px-2">
              <i class="fa-solid fa-newspaper"></i>
            </span>
            News
            <br></br>
            <span className="text-base  normal-case font-normal">
              Consequat veniam cupidatat ea fugiat dolore mollit excepteur culpa
              occaecat.
            </span>
          </div>
        </div>
        <div className="bg-blue-100 hover:cursor-pointer hover:shadow-md text-center font-bold tracking-wider rounded-2xl text-2xl uppercase h-[10rem] flex items-center p-4 justify-center">
          <div>
            <span className="px-2">
              <i class="fa-solid fa-bookmark"></i>
            </span>
            Bookmarks
            <br></br>
            <span className="text-base  normal-case font-normal">
              Consequat veniam cupidatat ea fugiat dolore mollit excepteur culpa
              occaecat.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
