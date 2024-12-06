import React from "react";

export default function Header() {
  return (
    <div className="w-full h-[70px] bg-black  flex">
      {/* left */}
      <div className="w-1/3 flex justify-start items-center space-x-2 ml-3">
        <img
          src="/assets/reddit-logo.svg"
          alt="Reddit logo"
          className="h-[22px"
        />
        <img
          src="/assets/reddit-name.svg"
          alt="Reddit logo"
          className="h-[22px]"
        />
      </div>

      {/* center */}
      <div className="w-1/3 flex justify-center items-center ">
        <div
          className="bg-white rounded-full w-[500px] h-[42px]
        flex  justify-start
        "
        >
          
        </div>
      </div>

      {/* right */}
      <div className="w-1/3 flex justify-end"></div>
    </div>
  );
}
