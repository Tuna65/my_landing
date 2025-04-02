import React from "react";
import Text from "@/components/Text";

type Props = {
  width?: number;
  height?: number;
};

const Advertisement = ({ width = 750, height = 100 }: Props) => {
  return (
    <div
      className="w-[60%] m-auto bg-gray-100 dark:bg-gray-700 rounded-lg flex flex-col items-center justify-center p-4 lg:my-10 my-4"
      style={{ minHeight: height }}
    >
      <Text className="text-gray-400 dark:text-gray-500 text-sm mb-1">
        Advertisement
      </Text>
      <Text className="text-gray-500 dark:text-gray-400 text-lg font-medium mb-1">
        You can place ads
      </Text>
      <Text className="text-gray-400 dark:text-gray-500 text-sm">
        {`${width}x${height}`}
      </Text>
    </div>
  );
};

export default React.memo(Advertisement);
