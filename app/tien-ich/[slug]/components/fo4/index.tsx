"use client";

import Text from "@/components/Text";
import Image from "next/image";
import React, { useState } from "react";
import { fo4List, match } from "./data";

const FO4 = () => {
  const [activeTab, setActiveTab] = useState<"schedule" | "teams">("schedule");

  return (
    <div>
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("schedule")}
          className={`px-4 py-2 rounded-md ${
            activeTab === "schedule"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Lịch thi đấu
        </button>
        <button
          onClick={() => setActiveTab("teams")}
          className={`px-4 py-2 rounded-md ${
            activeTab === "teams"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Bảng xếp hạng
        </button>
      </div>

      {activeTab === "schedule" && (
        <div className="mb-6 space-y-4">
          {match.map((round) => (
            <div key={round.round} className="border rounded-md p-4">
              <Text className="font-bold mb-2">Vòng {round.round}</Text>
              <div className="grid gap-2">
                {round.matches.map((match, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-3 items-center p-3  rounded-md"
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        alt=""
                        src={match.home.link}
                        width={25}
                        height={25}
                      />
                      <Text>{match.home.lable}</Text>
                    </div>
                    <div className="flex items-center gap-8 justify-center">
                      {match.home.score !== null && (
                        <Text className=" !dark:text-red-600 font-semibold">
                          {match.home.score}
                        </Text>
                      )}
                      <Text>VS</Text>
                      {match.away.score !== null && (
                        <Text className=" !dark:text-red-600 font-semibold">
                          {match.away.score}
                        </Text>
                      )}
                    </div>
                    <div className="flex items-center gap-2 justify-end">
                      <Text>{match.away.lable}</Text>
                      <Image
                        alt=""
                        src={match.away.link}
                        width={25}
                        height={25}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "teams" && (
        <div className=" xl:gap-4 gap-2">
          <div className="border border-gray-700  dark:border-gray-400 p-2 xl:p-4">
            <div className="grid grid-cols-12">
              <div className="flex items-center gap-2 col-span-10">
                <Text>Đội</Text>
              </div>
              <Text className="col-span-1 text-center">Số trận</Text>
              <Text className="col-span-1 text-center">Điểm số</Text>
            </div>
          </div>
          {fo4List
            .sort((a: any, b: any) => b.score - a.score)
            .map((f, idx) => (
              <div
                key={`for-${idx}`}
                className="border border-gray-700  dark:border-gray-400 p-2 xl:p-4"
              >
                <div className="grid grid-cols-12">
                  <div className="flex items-center gap-2 col-span-10">
                    <Image alt="" src={f.link} width={25} height={25} />
                    <Text>{f.lable}</Text>
                  </div>
                  <Text className="col-span-1 text-center">{f.match}</Text>
                  <Text className="col-span-1 text-center">{f.score}</Text>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default FO4;
