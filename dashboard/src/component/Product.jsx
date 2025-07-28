import React from "react";
import useTheme from "../hooks/useTheme";

const classVariant = {
  defolt: "bg-green-100  text-green-800",
  primary: "bg-amber-100 text-yellow-800",
  secondary: "bg-red-100 text-red-800",
};

const darkVariant = {
  defolt: "bg-green-100  text-green-800",
  primary: "bg-amber-100 text-yellow-800",
  secondary: "bg-red-500 text-red-900",
};

export default function ({ name, category, date, status, variant = "defolt" }) {
  const { theme } = useTheme();
  return (
    <div
      className={` rounded-lg flex justify-between px-3 py-5 ${
        theme === "light" ? "border border-gray-200" : "border border-gray-700"
      }`}
    >
      <div>
        <h1
          className={`text-md pb-3 font-semibold ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          {name}
        </h1>
        <p className="text-gray-500 text-[13px] font-medium">{category}</p>
        <p className="text-gray-500 text-[13px] ">{date}</p>
      </div>

      <div>
        <p
          className={`px-2 text-sm text-gray-500 rounded-full max-md:text-[9px] ${
            theme === "light"
              ? `${classVariant[variant]} `
              : `${darkVariant[variant]}`
          } `}
        >
          {status}
        </p>
      </div>
    </div>
  );
}
