import React, { useContext } from "react";
import { LoginCheckContext } from "../context/LoginCheck";

export default function useLogin() {
  const context = useContext(LoginCheckContext);

  if (!context) {
    throw new Error("use useLogin in correct way");
  } else {
    return context;
  }
}
