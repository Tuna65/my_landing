"use client";
import React from "react";
import Tab from "./Tab";
import RandomNumber from "./RandomNumber";
import { useSearchParams } from "next/navigation";
import RandomWheel from "./RandomWheel";

const Random = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  return (
    <div className="flex flex-col gap-4 px-2 md:px-0">
      <Tab />
      {type === "rn" && <RandomNumber />}
      {type === "rw" && <RandomWheel />}
    </div>
  );
};

export default React.memo(Random);
