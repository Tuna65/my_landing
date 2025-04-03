import iconSearch from "@/assets/icons/icon-search.svg";
import Image from "next/image";
import React, { useCallback, useLayoutEffect, useRef, useState } from "react";

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  showSearchIcon?: boolean;
  onChange?: (value: string) => void;
  debounceTime?: number;
  value?: string;
}

const Input = ({
  placeholder,
  className,
  showSearchIcon = true,
  onChange,
  debounceTime = 500,
  value,
  ...props
}: Props) => {
  const [currentValue, setCurrentValue] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSetQuery = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setCurrentValue(newValue);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        onChange?.(newValue);
      }, debounceTime);
    },
    [onChange, debounceTime]
  );

  useLayoutEffect(() => {
    if (!value) setCurrentValue("");
    else setCurrentValue(value);
  }, [value]);

  return (
    <div className="px-4 rounded-md dark:border-gray-700 border border-gray-200 bg-gray-100 dark:bg-gray-800 flex justify-between">
      <input
        className={`${className} py-2 flex-1 bg-transparent outline-none text-gray-900 dark:text-gray-100`}
        placeholder={placeholder ?? "Search"}
        value={currentValue}
        onChange={handleSetQuery}
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
