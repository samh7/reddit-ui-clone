import React from "react";
import { BiSearch } from "react-icons/bi";

export default function Header() {
  return (
    <div className="w-full h-[70px] bg-black  flex">
      {/* left */}
      
      <div className="
      w-[70px]
      sm:w-[80px]
      md:w-[140px]
      xl:w-1/3 flex justify-start items-center space-x-2 ml-3">
       
       <img src="/assets/014_e4d56981-694b-49ea-b616-ec5475467053.svg"
       alt="Hamburger menu"
       className="h-[22px]
       md:hidden
       "
       
        />
        <img
          src="/assets/reddit-logo.svg"
          alt="Reddit logo"
          className="h-[25px] sm:h-auto"
        />
        <img
          src="/assets/reddit-name.svg"
          alt="Reddit logo"
          className="h-[22px]
          hidden
          md:block
          "
        />
      </div>

      {/* center */}
      <div className="flex-1 sm:w-[80vw] xl:w-1/3 flex justify-center items-center ">
        <div
          className="bg-[#e5ebee]
           
          rounded-full w-full h-[42px]
        flex  justify-start items-center px-5
        relative
        z-[5]
        "
        >
          {/* overlay for border */}
          <div
            className="absolute inset-0 z-[10]
          
          rounded-full
flex items-center
pl-2
md:pl-5
group
          "
          >
            <BiSearch
              className="
              w-[17px]
              h-[17px]
              mobile:h-[22px] mobile:w-[22px]
          relative z-[15]
          "
            />
            <div
              className="ml-2 h-[80%]  rounded-full
              w-[120px]
              md:w-[150px] bg-[#c9d7de]
          flex justify-start items-center px-2 mobile:px-3 md:px-5
          relative z-[15]
        
          "
            >
              <img
                src="/assets/097_communityIcon_m00t4v99ksj11.png"
                className="h-[22px] w-[22px]"
                alt="Channel Icon"
              />
              <div
                className="mx-2 md:mlr-0 h-[90%]  rounded-full
                w-[45px]
                md:w-[150px]
            flex items-center 
          relative z-[15]

            "
              >
                r/linux
              </div>
              <img
                src="/assets/018_e559bb17-5876-41a1-a4f8-0f0dae1d6a7e.svg"
                className="w-[18px] h-[18px]
          relative z-[15]
              "
              />
            </div>
            <input

              type="text"
              placeholder="Search in r/linux"
              className="bg-transparent ml-2
       outline-none
       active:outline-none
          relative z-[15]
              w-[60px]
              sm:w-[130px]
              overflow-hidden
              sm:overflow-visible
      text-nowrap
      text-ellipsis
      pr-2
    
      hidden
      mobile:inline-block
        "
            />{" "}
          </div>
        </div>
      </div>

      {/* right */}
      <div className="
      w-[150px]
      mobile:w-[200px] xl:w-1/3 flex justify-end items-center">
        <div
          className="bg-[##e5ebee] space-x-3
          hidden
          xl:flex
        bg-[#e5ebee]
        rounded-full
        w-[90px]
        mobile:w-[130px]
        h-[65%]
        justify-center items-center
        "
        >
          <img
            src="/assets/019_ad854598-078b-4442-af46-510062fade58.svg"
            alt=""
            className="w-[22px] h-[22px]"
          />
          <div>Get App</div>
        </div>
        <div
          className="
        ml-1
        mobile:ml-2
        w-[70px]
        mobile:w-[90px]
        
        h-[65%]
        bg-[#ff4500]
        rounded-full
        flex justify-center
        items-center
        "
        >
          Login
        </div>
        {/* <div
          className="w-[50px] h-[65%]
        
        "
        > */}
        <img
          src="/assets/020_db152b9b-f109-48c8-8501-d4c042911c3c.svg"
          alt=""
          className="w-[22px] h-[65%]
          mx-2
          mr-4
          mobile:mx-5
          "
        />
        {/* </div> */}
      </div>
    </div>
  );
}
