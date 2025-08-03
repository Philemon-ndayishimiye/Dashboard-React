import React from "react";

const classVariant = {
  defolt: "border-gray-600 ",
  danger: "border-red-500 focus:border-red-500",
};

export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  variant = "defolt",
  name,
}) {
  return (
    <input
      className={`border rounded-lg py-2 pl-[40px] pr-[120px] focus:outline-none flex mb-5 ${classVariant[variant]}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
}
