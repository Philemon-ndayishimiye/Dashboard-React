import { useContext } from "react";
import { ConsumerContext } from "../context/ConsumerContext";

import React from "react";

export default function useConsumer() {
  const context = useContext(ConsumerContext);

  if (!context) {
    throw new Error("use useConsumer in correct way");
  } else {
    return context;
  }
}
