import React, { useMemo } from "react";

type Props = {
  children: string | React.ReactNode;
  type?: "primary" | "default" | "outline";
  className?: string;
  size?: "large" | "middle" | "small";
  onClick?: () => void;
};

const Button = (props: Props) => {
  const { children, type, className, size, onClick } = props;

  const renderStyle = useMemo(() => {
    switch (type) {
      case "primary": {
        return `bg-blue-500 text-white`;
      }

      case "default": {
        return `bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600 text-gray-900 border border-black border-opacity-20 border-solid`;
      }

      case "outline": {
        return `bg-white text-blue-500 border border-blue-500  border-solid`;
      }

      default:
        return `bg-blue-500 text-white`;
    }
  }, [type]);

  const renderSize = useMemo(() => {
    switch (size) {
      case "large": {
        return `px-5 py-2 text-[15px]`;
      }
      case "middle": {
        return `px-5 py-[6px] text-[13px]`;
      }
      case "small": {
        return `px-2 py-[2px] text-[13px]`;
      }
      default:
        return `px-4 py-[3px] text-[13px]`;
    }
  }, [size]);

  return (
    <div>
      <button
        className={`${renderStyle} ${className} ${renderSize} rounded-md cursor-pointer`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default React.memo(Button);
