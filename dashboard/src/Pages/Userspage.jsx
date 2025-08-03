import React from "react";
import Aside from "../component/Aside";
import Navigation from "../component/Navigation";
import useTheme from "../hooks/useTheme";
import Usertable from "../component/Usertable";

export default function Userspage() {
  const { theme } = useTheme();
  return (
    <div
      className={`h-full ${theme === "light" ? "bg-white" : " bg-gray-900"}`}
    >
      <div className="flex max-sm:flex-col ">
        <div className=" max-md:block max-lg:block max-2xl:block max-sm:hidden">
          <Aside />
        </div>

        <div
          className={`flex flex-col  w-full h-full ${
            theme === "light"
              ? " bg-gray-50 border border-primarycolor-50"
              : "border-0"
          }`}
        >
          <Navigation />

          <div
            className={`pl-[3%] pr-[5%]   ${
              theme === "light" ? "bg-gray-50" : "bg-gray-900"
            } pt-[30px] `}
          >
            <Usertable />
          </div>
        </div>
      </div>
    </div>
  );
}
