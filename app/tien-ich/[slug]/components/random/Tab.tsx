"use client";
import { randomOptions } from "@/app/tien-ich/useGameServices";
import Text from "@/components/Text";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Tab = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onChangeType = (type: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("type", type);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex gap-2 border-b border-gray-200 dark:border-gray-700">
      {randomOptions.map((item) => {
        const active = searchParams.get("type") === item.value;
        return (
          <Text
            key={item.value}
            className={`${
              active
                ? "!dark:text-blue-500 text-blue-500 font-semibold dark:border-blue-500"
                : ""
            } cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 border-t border-r border-l border-gray-200 dark:border-gray-700 rounded-tr-md rounded-tl-md p-2`}
            onClick={() => onChangeType(item.value)}
          >
            {item.label}
          </Text>
        );
      })}
    </div>
  );
};

export default React.memo(Tab);
