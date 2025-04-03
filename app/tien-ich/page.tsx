"use client";
import Text from "@/components/Text";
import { themeSelector } from "@/lib/slides/theme/selector";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { listExtension } from "./useGameServices";

const Game = () => {
  const them = useSelector(themeSelector);
  return (
    <div className="xl:px-0 px-2 py-4">
      <div className="grid grid-cols-12 gap-4">
        {listExtension(them).map((extension) => (
          <div
            key={extension.slug}
            className="md:col-span-4 col-span-6 shadow-md rounded-lg p-4 border border-gray-200 dark:border-gray-700"
          >
            <Link href={`/tien-ich/${extension.slug}`}>
              <div className="">
                <div className="flex items-center gap-2">
                  {extension.icon}

                  <div className="">
                    <Text>{extension.name}</Text>
                    <Text className="text-[12px] !dark:text-gray-50 !text-gray-400">
                      {extension.name}
                    </Text>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Game);
