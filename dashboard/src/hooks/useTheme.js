import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("use UseTheme in proper way");
  } else {
    return context;
  }
}
