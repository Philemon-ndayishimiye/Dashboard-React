import React from "react";

const classVariant = {
  Active: "bg-green-200 text-green-600 px-2 ",
  Inactive: "bg-red-100 text-red-800 px-2 ",
};

export default function Status({ label, variant = "active" }) {
  return (
    <p className={` rounded-xl text-[12px] ${classVariant[variant]}`}>
      {label}
    </p>
  );
}
