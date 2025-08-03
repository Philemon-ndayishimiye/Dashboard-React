import React from "react";
import useTheme from "../hooks/useTheme";
import Aside from "../component/Aside";
import Hero from "../component/Hero";
import Navigation from "../component/Navigation";
import Product from "../component/Product";

export default function CategoriesPage() {
  const Categories = [
    {
      name: "Smartphones",
      description:
        " Handheld devices that combine calling, internet browsing, apps, and multimedia features in one compact gadget.",
    },
    {
      name: "Laptops & Computers",
      description:
        " Portable or desktop devices used for work, gaming, and everyday computing tasks, from typing documents to running software.",
    },
    {
      name: "Tablets",
      description:
        " Touchscreen devices larger than smartphones, ideal for reading, streaming, browsing, or light productivity tasks.",
    },
    {
      name: "Wearable Devices",
      description:
        " Electronics you wear on your body, like smartwatches and fitness trackers, that monitor health or provide quick access to notifications.",
    },
    {
      name: "Home Entertainment",
      description:
        "Screens and multimedia devices (like smart TVs, streaming boxes, and sound systems) designed for watching videos, gaming, and home theater experiences.",
    },

    {
      name: "Audio Devices",
      description:
        "Gadgets such as headphones, earphones, speakers, and soundbars used for listening to music, podcasts, or other audio content.",
    },

    {
      name: "Gaming Consoles",
      description:
        "Specialized systems like PlayStation, Xbox, or Nintendo Switch designed for playing video games and connecting with gaming communities.",
    },

    {
      name: "Photography Equipment",
      description:
        " Devices like DSLRs, mirrorless cameras, and action cams used for capturing high-quality photos and videos.",
    },
    {
      name: "Smart Home Devices",
      description:
        " Electronics that automate home functions, like smart lights, thermostats, security cameras, and voice assistants.",
    },
  ];
  const { theme } = useTheme();
  return (
    <div className="">
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
            className={` pt-[30px] pl-[3%] pr-[5%] pb-[20px]  ${
              theme === "light" ? "bg-gray-50" : "bg-gray-900"
            } `}
          >
            {/* hello pjolo */}
            <div
              className={`${
                theme === "light"
                  ? "border border-gray-100"
                  : " border bg-gray-800 border-gray-700"
              }`}
            >
              <h1
                className={`font-medium text-md pl-5 py-3 ${
                  theme === "light" ? "text-black" : "text-white"
                }`}
              >
                Our Category
              </h1>
            </div>

            <div
              className={`py-6 px-6 grid grid-cols-3 gap-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid max-lg:grid-cols-2`}
            >
              {Categories.map((category) => (
                <Product
                  name={category.name}
                  description={category.description}
                />
              ))}
            </div>

            {/* hello philos */}
          </div>
        </div>
      </div>
    </div>
  );
}
