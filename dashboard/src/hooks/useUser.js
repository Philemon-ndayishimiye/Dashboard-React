import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error(" use useUser in correct way");
  } else {
    return context;
  }
}
