import React from "react";
import { LuUser } from "react-icons/lu";
import Role from "./Role";
import Status from "./Status";
import Button from "./Button";
import useTheme from "../hooks/useTheme";

export default function Rowdata({
  name,
  email,
  role,
  status,
  Rolevariant,
  statusVariant,
}) {
  const { theme } = useTheme();
  return (
    <div
      className={` ${
        theme === "light" ? "bg-white" : "bg-gray-800"
      } border-b border-gray-200 flex items-center gap-[80px] `}
    >
      <div className="w-[220px] px-7 py-4 flex gap-4 items-center">
        <div className=" bg-gray-200 w-[35px] h-[35px] flex justify-center items-center px-2 rounded-full">
          <LuUser />
        </div>
        <div>
          <h1
            className={`${
              theme === "light"
                ? "text-xs font-medium text-black"
                : "text-white"
            }`}
          >
            {name}
          </h1>
          <p className="text-xs text-gray-400">{email}</p>
        </div>
      </div>
      <div className="flex gap-[72px]">
        <div className="text-left w-[80px] ">
          <Role label={role} variant={Rolevariant} />
        </div>

        <div className=" flex justify-center w-[60px]">
          <Status label={status} variant={statusVariant} />
        </div>

        <div className="w-[90px]">
          <p className="text-sm text-gray-400">2 hours ago</p>
        </div>

        <div className="flex gap-4 mx-3">
          <Button label={"Edit"} variant={"edit"} />
          <Button label={"Delete"} variant={"delete"} />
        </div>
      </div>
    </div>
  );
}
