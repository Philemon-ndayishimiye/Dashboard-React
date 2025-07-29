import React from "react";
import useTheme from "../hooks/useTheme";

const classVariant = {
  defolt:
    "flex justify-center items-center bg-primarycolor-100 rounded-lg  text-primarycolor-600 font-bold text-2xl",
  primary:
    "flex justify-center items-center bg-green-200 py-3  rounded-lg  text-green-600 font-bold text-2xl",
  secondary:
    "flex justify-center items-center bg-amber-100 p-3 rounded-lg  text-yellow-600  font-bold text-2xl",
};

export default function Card({
  icon,
  quantity,
  description,
  className = "",
  variant = "defolt",
}) {
  const { theme } = useTheme();
  return (
    <div
      className={` ${
        theme === "light"
          ? "bg-white border border-primarycolor-50"
          : " bg-gray-800 text-white"
      }  flex py-3 rounded-xl shadow-md border gap-4 border-gray-700 pl-4 px-[70px]`}
    >
      <div
        className={` p-3 h-[50px] ${
          theme === "light" ? `${classVariant[variant]}` : "bg-white"
        } mt-2 py-2 ${classVariant[variant]} ${className}`}
      >
        {icon}
      </div>
      <div>
        <h1 className="text-2xl font-bold max-md:text-xl">{quantity}</h1>
        <p className="text-gray-500 text-xs">{description}</p>
      </div>
    </div>
  );
}
