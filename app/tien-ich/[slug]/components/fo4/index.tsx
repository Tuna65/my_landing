import Text from "@/components/Text";
import Image from "next/image";
import React from "react";
import { fo4List } from "./data";

type Props = {};

const FO4 = (props: Props) => {
  return (
    <div>
      <div className="">
        <div className="grid grid-cols-10 xl:gap-4 gap-2">
          {fo4List.map((f, idx) => {
            return (
              <div
                key={`for-${idx}`}
                className="col-span-2 border border-gray-700 rounded-md dark:border-gray-400 p-2 xl:p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image alt="" src={f.link} width={25} height={25} />
                    <Text>{f.lable}</Text>
                  </div>
                  <Text>{f.score}</Text>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FO4;
