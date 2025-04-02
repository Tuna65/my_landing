import React from "react";

type Props = {
  children: string;
  className?: string;
};

const Text = (props: Props) => {
  const { children, className } = props;

  return (
    <div>
      <p className={`${className} text-black dark:text-gray-300`} title={children}>
        {children}
      </p>
    </div>
  );
};

export default Text;
