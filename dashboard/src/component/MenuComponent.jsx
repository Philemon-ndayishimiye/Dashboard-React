import React from "react";
import useTheme from "../hooks/useTheme";

const classVariant = {
  defolt: "bg-primarycolor-50",
  primary: "hidden",
};

export default function MenuComponent({
  icon,
  category,
  number,
  variant = "defolt",
  onClick,
}) {
  const { theme } = useTheme();
  return (
    <div className="flex justify-between hover:bg-primarycolor-50  hover:text-primarycolor-500 my-4 cursor-pointer rounded-lg py-2 px-2 ">
      <div className="flex gap-5">
        <div className="flex justify-center items-center">
          <h1
            className={` text-xl ${
              theme === "light" ? "text-gray-400 " : "text-gray-600"
            }`}
            onClick={onClick}
          >
            {icon}
          </h1>
        </div>
        <h1
          className={`text-[13px] font-semibold ${
            theme === "light" ? "text-gray-700" : "text-gray-400"
          }`}
        >
          {category}
        </h1>
      </div>
      <div
        className={`bg-primarycolor-50 flex justify-center items-center px-[8px] rounded-full ml-6 ${classVariant[variant]}`}
      >
        <p className="text-[10px]">{number}</p>
      </div>
    </div>
  );
}
