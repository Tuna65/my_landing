"use client";
import React, { useState, useRef } from "react";
import Text from "@/components/Text";
import Input from "@/components/Input";
import { func } from "@/utils/func";
import Button from "@/components/Button";
import { Select } from "@/components/Select";

const RandomNumber = () => {
  const [number, setNumber] = useState({ min: 0, max: 1000 });
  const [result, setResult] = useState<string[]>(["0"]);
  const [totalNumber, setTotalNumber] = useState(1);
  const [numberPerRound, setNumberPerRound] = useState(1);

  const [isCounting, setIsCounting] = useState(false);
  const countInterval = useRef<NodeJS.Timeout | null>(null);

  const handleRandom = () => {
    if (isCounting) return;
    const newResult: string[] = result.map(() => {
      return padNumber(func.getRandomNumber(number.min, number.max));
    });
    if (numberPerRound === 0) {
      setResult(newResult);
      return;
    }

    setIsCounting(true);
    let currentNumber = number.min;
    let round = 0;

    const step = Math.max(1, Math.floor(number.max - number.min) / 20).toFixed(
      0
    );
    countInterval.current = setInterval(() => {
      currentNumber += Number(step);
      if (currentNumber >= number.max) {
        currentNumber = number.min;
        round += numberPerRound;
        if (round >= totalNumber) {
          setIsCounting(false);
          if (countInterval.current) clearInterval(countInterval.current);
          return;
        }
      }
      setResult(
        newResult.map((item, idx) => {
          if (idx < round) return padNumber(Number(item));
          return padNumber(currentNumber);
        })
      );
    }, 40);
  };

  const padNumber = (v: number) => {
    return v.toString().padStart(number.max.toString().length - 1, "0");
  };

  return (
    <div className="flex gap-12 flex-col">
      <div className="flex gap-4 flex-col">
        <div className="flex gap-2">
          <div className="md:w-[230px] w-full flex gap-2 flex-col">
            <Text>Total number</Text>
            <Input
              onChange={(e) => {
                setTotalNumber(Number(e));
                setResult(new Array(Number(e)).fill({}).map(() => "0"));
              }}
              value={func.numberWithDots(totalNumber.toString()) as string}
              placeholder="Nhập số lượng"
              showSearchIcon={false}
              className=""
            />
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            <Text>Min</Text>
            <Input
              onChange={(e) => setNumber({ ...number, min: Number(e) })}
              value={func.numberWithDots(number.min.toString()) as string}
              placeholder="Nhập số lượng"
              showSearchIcon={false}
              className="text-right md:w-[100px] w-[50%]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Text>Max</Text>
            <Input
              onChange={(e) => setNumber({ ...number, max: Number(e) })}
              value={func.numberWithDots(number.max.toString()) as string}
              placeholder="Nhập số lượng"
              showSearchIcon={false}
              className="text-right md:w-[100px] w-[50%]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col gap-6 items-center">
        <div className="flex gap-8 flex-wrap justify-center">
          {result.map((item, index) => {
            return (
              <Text
                key={index}
                className="text-center md:text-2xl text-md font-bold transition-all duration-200 border border-gray-200 dark:border-gray-700 rounded-md p-2"
              >
                {item.toString()}
              </Text>
            );
          })}
        </div>

        <div className="flex gap-2 items-center">
          <Select
            options={[
              { label: "Tất cả", value: 0 },
              { label: "Lần lượt", value: 1 },
              { label: "2 số 1 lần", value: 2 },
              { label: "3 số 1 lần", value: 3 },
              { label: "5 số 1 lần", value: 5 },
              { label: "10 số 1 lần", value: 10 },
            ]}
            className="w-[200px]"
            value={numberPerRound}
            onChange={(e) => setNumberPerRound(Number(e))}
          />
          <Button
            className=""
            size="large"
            onClick={handleRandom}
            disabled={isCounting}
            type="primary"
          >
            {isCounting ? "Đang đếm..." : "Lấy số"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(RandomNumber);
