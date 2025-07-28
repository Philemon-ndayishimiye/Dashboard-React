import React from "react";
import Product from "./Product";
import useTheme from "../hooks/useTheme";
import useProduct from "../hooks/useProduct";

export default function Addedproduct() {
  const { theme } = useTheme();
  const { product } = useProduct();
  return (
    <div
      className={`rounded-lg border  ${
        theme === "light"
          ? "bg-white border-gray-100"
          : "bg-gray-800  border-gray-700"
      }`}
    >
      <div
        className={`${
          theme === "light"
            ? "border border-gray-100"
            : " border bg-gray-800 border-gray-700"
        }`}
      >
        <h1
          className={`font-medium text-md pl-5 py-3 ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          Recent Added Products
        </h1>
      </div>

      <div
        className={`py-6 px-6 grid grid-cols-3 gap-3 max-sm:grid-cols-1 max-md:grid-cols-2`}
      >
        {product.map((prod) => (
          <Product
            name={prod.name}
            category={prod.category}
            date={prod.date}
            status={prod.status}
            variant={prod.variant}
          />
        ))}
      </div>
    </div>
  );
}
