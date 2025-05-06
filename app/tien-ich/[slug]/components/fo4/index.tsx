"use client";

import Text from "@/components/Text";
import Image from "next/image";
import React, { useState } from "react";
import { fo4List, match } from "./data";

const FO4 = () => {
  const [activeTab, setActiveTab] = useState<'schedule' | 'teams'>('schedule');

  return (
    <div>
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('schedule')}
          className={`px-4 py-2 rounded-md ${
            activeTab === 'schedule'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          Lịch thi đấu
        </button>
        <button
          onClick={() => setActiveTab('teams')}
          className={`px-4 py-2 rounded-md ${
            activeTab === 'teams'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          Danh sách đội
        </button>
      </div>

      {activeTab === 'schedule' && (
        <div className="mb-6 space-y-4">
          {match.map((round) => (
            <div key={round.round} className="border rounded-md p-4">
              <Text className="font-bold mb-2">Vòng {round.round}</Text>
              <div className="grid gap-2">
                {round.matches.map((match, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 border rounded-md"
                  >
                    <div className="flex items-center gap-2">
                      <Image alt="" src={match.home.link} width={25} height={25} />
                      <Text>{match.home.lable}</Text>
                    </div>
                    <Text>VS</Text>
                    <div className="flex items-center gap-2">
                      <Text>{match.away.lable}</Text>
                      <Image alt="" src={match.away.link} width={25} height={25} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'teams' && (
        <div className="grid grid-cols-10 xl:gap-4 gap-2">
          {fo4List.map((f, idx) => (
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
          ))}
        </div>
      )}
    </div>
  );
};

export default FO4;
