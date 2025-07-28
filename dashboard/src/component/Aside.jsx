import React from "react";
import { BsBoxSeam } from "react-icons/bs";
import { LuLaptop } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { RxTextAlignCenter } from "react-icons/rx";
import { FiLayers } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import useTheme from "../hooks/useTheme";
import MenuComponent from "./MenuComponent";

export default function Aside() {
  const { theme } = useTheme();
  return (
    <div
      className={`pl-4 h-full px-7 pt-5  ${
        theme === "light" ? "bg-white" : "bg-gray-800"
      }`}
    >
      <div className="flex gap-4 ">
        <div className=" cursor-pointer bg-primarycolor-500 flex justify-center items-center w-[40px] h-[40px] rounded-md  ">
          {" "}
          <BsBoxSeam className="text-white font-bold " />{" "}
        </div>
        <div>
          <h1
            className={`font-bold text-xl ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            iHUZA
          </h1>
          <span
            className={`text-xs ${
              theme === "light" ? "text-black" : "text-gray-400"
            }`}
          >
            INVENTORY
          </span>
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
      </div>

      <div className="my-7 flex  items-center gap-2 mt-[418px]">
        <FiLogOut className="text-gray-400" />
        <p className="text-[13px] text-gray-600 font-semibold">Logout</p>
      </div>
    </div>
  );
}
