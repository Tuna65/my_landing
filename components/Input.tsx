import React from "react";
import iconSearch from "@/assets/icons/icon-search.svg";
import Image from "next/image";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  showSearchIcon?: boolean;
}

const Input = ({ placeholder, className, showSearchIcon = true, ...props }: Props) => {
  return (
    <div className="px-4 rounded-md dark:border-gray-700 border border-gray-200 bg-gray-100 dark:bg-gray-800 flex justify-between">
      <input
        className={`${className} py-2 flex-1 bg-transparent outline-none text-gray-900 dark:text-gray-100`}
        placeholder={placeholder ?? "Search"}
        {...props}
      />
      {showSearchIcon && (
        <Image
          src={iconSearch}
          alt=""
          style={{ width: "auto", height: "auto" }}
          width={20}
          height={20}
          className="opacity-50"
        />
      )}
    </div>
  );
};

export default Input;
