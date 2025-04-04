import React, { useState, useRef, useEffect } from "react";
import Text from "./Text";

interface Option {
  label: string;
  value: string | number;
}

interface SelectProps {
  options: Option[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  placeholder?: string;
  size?: "small" | "medium" | "large";
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Chọn...",
  size = "medium",
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const selectedOption = options.find((option) => option.value === value);

  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "py-1 px-2 text-sm";
      case "large":
        return "py-3 px-4 text-lg";
      default:
        return "py-2 px-3 text-base";
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={selectRef}>
      <div
        className={`${className} border border-gray-300 rounded-md cursor-pointer ${getSizeClasses()} flex items-center justify-between`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Text>{selectedOption ? selectedOption.label : placeholder}</Text>
        <svg
          className={`w-4 h-4 transition-transform dark:text-gray-100 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg dark:border-gray-700 dark:bg-gray-800 ">
          {options.map((option) => (
            <div
              key={option.value}
              className={`${getSizeClasses()} cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${
                value === option.value
                  ? "bg-blue-50 text-blue-600 dark:bg-gray-700"
                  : ""
              }`}
              onClick={() => {
                onChange?.(option.value);
                setIsOpen(false);
              }}
            >
              <Text>{option.label}</Text>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
