import React from "react";
import { BsBoxSeam } from "react-icons/bs";
import { SiTicktick } from "react-icons/si";

export default function Hero() {
  return (
    <div className=" bg-primarycolor-500 py-8 flex gap-6 pl-10 rounded-xl mt-[30px]  mb-[30px] max-sm:py-4 max-sm:pl-4 ">
      <div className="bg-primarycolor-300 flex justify-center items-center w-[51px] h-[51px] rounded-lg">
        {" "}
        <BsBoxSeam className="text-white font-bold text-2xl" />{" "}
      </div>
      <div>
        <h1
          className="font-bold text-2xl text-white pb-2 max-sm:text-sm 
        max-md:text-[20px]"
        >
          iHUZA INVENTORY - System Overview
        </h1>
        <p className="text-white pb-2 max-sm:text-[11px] max-md:text-[14px]">
          Monitor your iHUZA inventory and product assignments in real-time.
        </p>
        <div className="flex gap-2">
          <div className="flex justify-center items-center">
            <SiTicktick className="text-green-400 text-xl" />
          </div>
          <p className="text-white max-sm:text-[13px] max-md:text-[13px]">
            All Systems Operational{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
