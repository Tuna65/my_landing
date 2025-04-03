import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  title?: string;
};

const Text = ({ children, className, onClick, style, title }: Props) => {
  return (
    <p
      className={cn("text-gray-800 dark:text-white", className)}
      onClick={onClick}
      style={style}
      title={title}
    >
      {children}
    </p>
  );
};

export default Text;
