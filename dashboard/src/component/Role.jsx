import React from "react";

const classVariant = {
  Admin: "bg-purple-200 text-purple-800 px-2",
  Staff: "text-black bg-gray-200 px-2",
  Manager: "bg-primarycolor-100 text-primarycolor-600 px-2",
};

export default function Role({ label, variant }) {
  return (
    <p className={` rounded-xl text-[12px] ${classVariant[variant]}`}>
      {label}
    </p>
  );
}
