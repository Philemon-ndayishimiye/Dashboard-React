import React, { useEffect, useState } from "react";
import { LuMoon } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import useTheme from "../hooks/useTheme";
import useUser from "../hooks/useUser";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import Menu from "./Menu";

export default function Navigation() {
  const { theme, HandleTheme } = useTheme();
  const { user, setUser } = useUser();

  const [open, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!open);
  };

  return (
    <div
      className={`w-full flex justify-between shadow-sm  py-3  px-12  ${
        theme === "light"
          ? "bg-white border border-primarycolor-50 "
          : "bg-gray-800 border border-gray-700"
      } max-sm:px-2`}
    >
      <div>
        <h1
          className={`text-3xl font-bold ${
            theme === "light" ? "text-black" : "text-white"
          } max-sm:text-2xl `}
        >
          Dashboard
        </h1>
        <p
          className={`${
            theme === "light" ? "text-black" : "text-gray-400"
          } max-sm:text-[12px]`}
        >
          Welcome Back, {user.fullname}
        </p>
      </div>

      <div className="flex gap-6 justify-center items-center">
        <div className="max-sm:hidden">
          {" "}
          {theme === "light" ? (
            <LuMoon
              onClick={HandleTheme}
              className=" text-gray-400 text-xl cursor-pointer"
            />
          ) : (
            <FiSun
              onClick={HandleTheme}
              className=" text-gray-400 text-xl cursor-pointer"
            />
          )}
        </div>
        <div className="max-sm:hidden">
          {" "}
          <IoSettingsOutline className=" text-gray-400 text-xl cursor-pointer" />{" "}
        </div>
        <div className="relative max-sm:hidden">
          {" "}
          <IoIosNotificationsOutline className=" text-gray-400 text-xl cursor-pointer" />{" "}
          <div className="w-3  h-3 bg-red-500 absolute top-[-10px] rounded-full left-4"></div>
        </div>
        <div className="max-sm:hidden">
          {" "}
          <h1
            className={`${
              theme === "light" ? "text-black" : "text-gray-400"
            } max-sm:text-[10px]`}
          >
            {user.email}
          </h1>{" "}
        </div>
        <div className="w-8 h-8 rounded-full flex justify-center items-center bg-primarycolor-600 cursor-pointer max-sm:w-6 max-sm:h-6 max-sm:hidden">
          {" "}
          <LuUser className="text-white" />{" "}
        </div>

        <div className="max-sm:block max-md:hidden max-lg:hidden max-xl:hidden max-2xl:hidden  flex">
          {open ? (
            <MdClose
              className={`text-3xl ${
                theme === "light" ? "text-black" : "text-white"
              }`}
              onClick={handleMenu}
            />
          ) : (
            <IoMdMenu
              className={`text-3xl ${
                theme === "light" ? "text-black" : "text-white"
              }`}
              onClick={handleMenu}
            />
          )}

          {open && <Menu />}
        </div>
      </div>
    </div>
  );
}
