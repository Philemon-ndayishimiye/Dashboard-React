import React from "react";

import Aside from "../component/Aside";
import Navigation from "../component/Navigation";
import Cardsection from "../component/Cardsection";
import Hero from "../component/Hero";
import Addedproduct from "../component/Addedproduct";
import Usertable from "../component/Usertable";
import useTheme from "../hooks/useTheme";

export default function Dashboard() {
  const { theme, HandleTheme } = useTheme();
  return (
    <>
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
            } `}
          >
            <Hero />
            <Cardsection />
            <Addedproduct />
            <Usertable />
          </div>
        </div>
      </div>
    </>
  );
}
