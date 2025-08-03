import React from "react";
import Button from "./Button";
import Rowdata from "./Rowdata";
import useTheme from "../hooks/useTheme";
import useConsumer from "../hooks/useConsumer";

export default function Usertable() {
  const { consumer } = useConsumer();

  const { theme } = useTheme();
  return (
    <div
      className={` rounded-lg mt-[30px] ${
        theme === "light" ? "border border-gray-200" : "border border-gray-700"
      }`}
    >
      <div
        className={`flex rounded-lg justify-between px-7 py-4 ${
          theme === "light" ? "bg-white" : "bg-gray-800"
        } `}
      >
        <h1
          className={`font-bold ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          Users
        </h1>
        <Button label={"Add User"} />
      </div>

      <div>
        <table className="w-full">
          <thead
            className={` ${theme === "light" ? "bg-gray-50" : "bg-gray-700"}`}
          >
            <tr className="flex px-6 ">
              <th className="  px-3 text-[12px] text-gray-400 uppercase py-4 max-md:px-1">
                User
              </th>
              <th className="  pl-[210px] text-[12px] text-gray-400 uppercase py-4 max-sm:hidden max-md:hidden max-lg:hidden">
                Role
              </th>
              <th className="pl-[110px] text-[12px] text-gray-400 uppercase py-4 max-sm:hidden max-md:pl-[200px] max-lg:pl-[220px] max-xl:pl-[130px]">
                Status
              </th>
              <th className=" pl-[95px] text-[12px] text-gray-400 uppercase py-4 max-sm:hidden max-md:hidden max-lg:hidden max-xl:hidden">
                Last Login
              </th>
              <th className="pl-[80px] text-[12px] text-gray-400 uppercase py-4 max-sm:flex-col max-sm:pl-[180px]">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {consumer.map((user, index) => (
              <Rowdata
                name={user.name}
                email={user.email}
                role={user.role}
                status={user.status}
                Rolevariant={user.role}
                statusVariant={user.status}
                key={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
