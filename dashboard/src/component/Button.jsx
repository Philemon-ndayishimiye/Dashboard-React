import React from "react";

const classVariant = {
  defolt: "bg-primarycolor-600 text-white font-light px-4 py-2 rounded-lg",
  delete: "text-red-500 font-bold text-sm",
  edit: "text-primarycolor-500 font-bold text-sm",
};

export default function Button({ label, variant = "defolt" }) {
  return (
    <button className={` cursor-pointer  ${classVariant[variant]}`}>
      {label}
    </button>
  );
}
