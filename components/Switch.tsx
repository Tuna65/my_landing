"use client";
import React, { useEffect, useState, useMemo } from "react";
import iconLight from "@/assets/icons/icon-light.svg";
import Image from "next/image";
import { SuccessFunc } from "@/models";

type Props = {
  onChange?: SuccessFunc<boolean>;
  value?: boolean;
  icon?: React.ReactNode;
};

const Switch = (props: Props) => {
  const { onChange, value, icon } = props;

  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const data = useMemo(() => {
    return value !== undefined ? value : isDarkTheme;
  }, [value, isDarkTheme]);

  return (
    <div className="">
      <div
        className={`${
          !data ? "bg-gray-200" : "bg-blue-400"
        }  w-[50px] rounded-full cursor-pointer effect flex items-center`}
        onClick={() => {
          onChange?.(!data);
          setIsDarkTheme(!data);
        }}
      >
        <div
          className={`relative ${data ? "right-[-22px]" : "right-0"} effect`}
        >
          {icon ? icon : <Image src={iconLight} alt="" className="mt-[1px]" />}
        </div>
      </div>
    </div>
  );
};

export default Switch;
