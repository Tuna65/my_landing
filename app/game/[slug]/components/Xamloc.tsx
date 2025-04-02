"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { Select } from "@/components/Select";
import Text from "@/components/Text";
import React, { useEffect, useMemo, useState } from "react";
import { unitOptions } from "../../useGameServices";

type Member = {
  name: string;
  point: number[];
  currentPoint: number | string;
};

const Xamloc = () => {
  const [memberHistory, setMemberHistory] = useState<Member[]>([]);
  const [memberName, setMemberName] = useState<Member[]>([]);
  const [memberNameInput, setMemberNameInput] = useState<string>("");
  const [unit, setUnit] = useState<string>("");

  const handleAddMember = () => {
    if (memberNameInput) {
      const newMember = [
        ...memberName,
        { name: memberNameInput, point: [0], currentPoint: 0 },
      ];
      setMemberName(newMember);
      setMemberHistory([
        ...memberHistory,
        { name: memberNameInput, point: [0], currentPoint: 0 },
      ]);
      setMemberNameInput("");
      localStorage.setItem("memberName", JSON.stringify(newMember));
    }
  };

  const colValue = useMemo(() => {
    if (memberName.length >= 5) return "col-span-12 md:col-span-4 lg:col-span-3";
    if (memberName.length === 4) return "col-span-12 md:col-span-6 lg:col-span-3";
    if (memberName.length === 3) return "col-span-12 md:col-span-6 lg:col-span-4";
    if (memberName.length === 2) return "col-span-12 md:col-span-6";
    return "col-span-12";
  }, [memberName.length]);

  useEffect(() => {
    const memberNameHistory = localStorage.getItem("memberName");

    if (memberNameHistory) {
      setMemberName(JSON.parse(memberNameHistory));
    }
  }, []);

  return (
    <div>
      <div className=" flex flex-col gap-4 lg:px-0 px-2">
        <div className="flex gap-2 overflow-hidden w-full">
          <Input
            showSearchIcon={false}
            placeholder="Nhập tên thành viên"
            onChange={(e) => setMemberNameInput(e.target.value)}
            value={memberNameInput}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAddMember();
            }}
          />

          <Button size="large" onClick={handleAddMember}>
            Thêm thành viên
          </Button>
        </div>
        <div className="">
          <Select
            options={unitOptions}
            value={unit}
            className="w-[200px]"
            placeholder="Đơn vị tính"
            onChange={(value) => setUnit(value as string)}
          />
        </div>
        <div className="grid grid-cols-12 gap-4">
          {memberName.map((item) => {
            return (
              <div
                key={item.name}
                className={`min-h-[100px] ${colValue} border border-gray-200 dark:border-gray-700 rounded-lg p-4 relative group flex flex-col justify-between gap-4`}
              >
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                  <Text className="">{item.name}</Text>
                  <Text className="font-bold text-[20px]">{`${
                    item.point?.reduce((acc, curr) => acc + curr, 0) ?? 0
                  } ${unit}`}</Text>
                </div>

                {item.point.length > 0 && (
                  <Text className="text-sm italic">{`(${item.point.join(
                    ", "
                  )})`}</Text>
                )}

                <Input
                  showSearchIcon={false}
                  placeholder="Nhập số điểm"
                  onFocus={(e) => e.target.select()}
                  value={item.currentPoint}
                  onChange={(e) => {
                    setMemberName(
                      memberName.map((i) => {
                        if (i.name === item.name) {
                          return {
                            ...i,
                            point: !isNaN(Number(e.target.value))
                              ? [...i.point, Number(e.target.value)]
                              : i.point,
                            currentPoint: e.target.value,
                          };
                        }
                        return i;
                      })
                    );
                  }}
                />

                <div className="flex gap-2 justify-end">
                  <Button
                    size="large"
                    type="default"
                    onClick={() =>
                      setMemberName(
                        memberName.filter((i) => i.name !== item.name)
                      )
                    }
                  >
                    Delete
                  </Button>
                  <Button
                    size="large"
                    type="outline"
                    onClick={() => {
                      setMemberName(
                        memberName.map((i) => {
                          if (i.name === item.name)
                            return { ...i, point: [0], currentPoint: 0 };
                          return i;
                        })
                      );
                    }}
                  >
                    Reset
                  </Button>
                  <Button
                    type="primary"
                    size="large"
                    onClick={() => {
                      setMemberName(
                        memberName.map((i) => {
                          if (i.name === item.name)
                            return {
                              ...i,
                              point: i.point.slice(0, -1),
                              currentPoint: 0,
                            };
                          return i;
                        })
                      );
                    }}
                  >
                    Undo
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Xamloc);
