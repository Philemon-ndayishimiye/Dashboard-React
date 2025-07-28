import React from "react";
import useTheme from "../hooks/useTheme";
import { BsBoxSeam } from "react-icons/bs";
import { LuLaptop } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { RxTextAlignCenter } from "react-icons/rx";
import { FiLayers } from "react-icons/fi";
import useUser from "../hooks/useUser";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import MenuComponent from "./MenuComponent";

export default function Menu() {
  const { theme } = useTheme();
  const { user } = useUser();
  return (
    <div className="absolute top-[80px] left-0 w-full bg-primarycolor-200 z-50 py-3 px-2">
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
        <div className="flex gap-[50px] my-7 cursor-pointer bg-primarycolor-50  hover:text-primarycolor-500 rounded-lg py-2 px-5">
          <div className="flex gap-4">
            <div className="flex justify-center items-center">
              <LuLaptop className="text-primarycolor-500" />
            </div>
            <h1 className="text-primarycolor-500 font-bold">Dashboard</h1>
          </div>
        </div>

        <div className="flex gap-[50px] my-7 cursor-pointer rounded-lg py-2 px-5">
          <div className="flex gap-5">
            <div className=" w-10 h-10 bg-primarycolor-600 rounded-full flex justify-center items-center">
              <LuUser
                className={`  text-white text-2xl ${
                  theme === "light" ? "text-gray-400 " : "text-gray-600"
                }`}
              />
            </div>
            <h1
              className={`text-[19px] font-bold ${
                theme === "light" ? "text-black" : "text-gray-400"
              }`}
            >
              {user.email}
            </h1>
          </div>
        </div>

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
          category={"Notification"}
          variant="primary"
        />
        <MenuComponent
          icon={<IoSettingsOutline />}
          category={"Settings"}
          variant="primary"
        />

        <MenuComponent
          icon={<FiLogOut />}
          category={"Logout"}
          variant="primary"
        />
      </div>
    </div>
  );
}
