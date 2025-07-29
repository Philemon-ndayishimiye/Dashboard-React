import React from "react";
import { BsBoxSeam } from "react-icons/bs";
import { LuLaptop } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { RxTextAlignCenter } from "react-icons/rx";
import { FiLayers } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { LuMoon } from "react-icons/lu";
import useTheme from "../hooks/useTheme";
import MenuComponent from "./MenuComponent";
import useUser from "../hooks/useUser";

export default function Aside() {
  const { theme, HandleTheme } = useTheme();
  const { user } = useUser();
  return (
    <div
      className={`pl-4 h-full pr-2 pt-5  ${
        theme === "light" ? "bg-white" : "bg-gray-800"
      }`}
    >
      <div className="flex gap-4 ">
        <div className=" cursor-pointer bg-primarycolor-500 flex justify-center items-center w-[40px] h-[40px] rounded-md  max-md:w-[30px] max-md:h-[30px] ">
          {" "}
          <BsBoxSeam className="text-white font-bold " />{" "}
        </div>
        <div>
          <h1
            className={`font-bold text-xl max-md:text-[16px] ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            iHUZA
          </h1>
          <span
            className={`text-xs max-md:text-[9px] ${
              theme === "light" ? "text-black" : "text-gray-400"
            }`}
          >
            INVENTORY
          </span>
        </div>
      </div>

      <div className=" cursor-pointer rounded-lg py-2 max-sm:hidden max-lg:hidden max-xl:hidden max-2xl:hidden max-md:block">
        <div className="">
          <h1
            className={`text-[11px] font-semibold ${
              theme === "light" ? "text-black" : "text-gray-400"
            }`}
          >
            {user.email}
          </h1>
        </div>
      </div>

      <div className="">
        <MenuComponent icon={<LuUser />} category={"Users"} number={"116"} />
        <MenuComponent
          icon={<BsBoxSeam />}
          category={"Products"}
          number={"100"}
        />
        <MenuComponent
          icon={<RxTextAlignCenter />}
          category={"Assignments"}
          number={"10"}
        />
        <MenuComponent
          icon={<FiLayers />}
          category={"Categories"}
          variant={"primary"}
        />

        <MenuComponent
          icon={<IoIosNotificationsOutline />}
          category={"Notifications"}
          variant={"primary"}
          className={
            "max-md:block max-sm:hidden max-lg:block max-xl:hidden max-2xl:hidden"
          }
        />

        <MenuComponent
          icon={<IoSettingsOutline />}
          category={"Settings"}
          variant={"primary"}
          className={
            "max-md:block max-sm:hidden max-lg:block max-xl:hidden max-2xl:hidden"
          }
        />

        <div
          className={
            "max-md:block max-sm:hidden max-lg:block max-xl:hidden max-2xl:hidden"
          }
        >
          {theme === "light" ? (
            <LuMoon
              className={`cursor-pointer pt-[20px] text-[40px] ${
                theme === "light" ? "text-gray-600" : "text-white"
              }`}
              onClick={HandleTheme}
            />
          ) : (
            <FiSun
              className={` cursor-pointer text-[40px] pt-[20px]  ${
                theme === "light" ? "text-gray-600" : "text-white"
              }`}
              onClick={HandleTheme}
            />
          )}
        </div>
      </div>

      <div className="my-7 flex  items-center gap-2 mt-[418px]">
        <FiLogOut className="text-gray-400" />
        <p className="text-[13px] text-gray-600 font-semibold">Logout</p>
      </div>
    </div>
  );
}
