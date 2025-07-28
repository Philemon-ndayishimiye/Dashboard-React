import React from "react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export default function useProduct() {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("use useProduct in correct way");
  } else {
    return context;
  }
}
