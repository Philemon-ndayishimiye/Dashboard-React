import React from "react";
import { BsBoxSeam } from "react-icons/bs"; // box icon
import { FiUsers } from "react-icons/fi"; // user icon
import { SiTicktick } from "react-icons/si";
import { RxExclamationTriangle } from "react-icons/rx";
import Card from "./Card";

export default function Cardsection() {
  return (
    <div className=" flex justify-between gap-4  mb-[30px] max-sm:grid-cols-1 max-md:grid max-md:grid-cols-2 max-lg:grid max-lg:grid-cols-2 max-xl:grid max-xl:grid-cols-3">
      <Card icon={<FiUsers />} quantity={"116"} description={"Total Users"} />

      <Card
        icon={<BsBoxSeam />}
        quantity={"100"}
        description={"Total Products"}
      />

      <Card
        icon={<SiTicktick />}
        quantity={"10"}
        description={"Assigned Products"}
        variant={"primary"}
      />

      <Card
        icon={<RxExclamationTriangle />}
        quantity={"90"}
        description={"Unassigned Products"}
        variant={"secondary"}
      />
    </div>
  );
}
