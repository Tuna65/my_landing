import Image from "next/image";
import React from "react";
import banner from "@/assets/images/banner.png";
import Button from "@/components/Button";
import Text from "@/components/Text";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className=" md:mb-20 mb-4">
      <div className="flex justify-center relative">
        <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] relative">
          <Image
            alt="Banner"
            src={banner}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-4 rounded-md dark:bg-gray-900 bg-white shadow p-4 md:p-6 w-[280px] sm:w-[320px] md:w-[400px] absolute bottom-[-5%] md:bottom-[-8%] left-[5%] md:left-[10%]">
          <Button size="small" type="primary" className="md:hidden">
            Technology
          </Button>
          <Button
            size="middle"
            type="primary"
            className="hidden md:inline-block"
          >
            Technology
          </Button>
          <Text className="font-semibold text-[16px] sm:text-[18px] md:text-[20px] line-clamp-2 md:line-clamp-none">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </Text>
          <div>
            <Text className="text-[10px] md:text-[12px] text-gray-400">
              August 20, 2022
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Banner);
