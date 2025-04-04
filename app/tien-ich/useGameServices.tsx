import { IoApertureOutline, IoCalculatorOutline } from "react-icons/io5";

export const getGameBySlug = async (slug: string) => {
  return [
    {
      id: 1,
      name: "Game 1",
    },
    {
      id: 2,
      name: "Game 2",
    },
  ];
};

export const listExtension = (them: string) => {
  const styleIcon = {
    color: them === "dark" ? "white" : "#000",
    width: "32px",
    height: "32px",
  };

  return [
    {
      name: "Tính điểm xâm lốc",
      slug: "tinh-diem-xam-loc",
      icon: <IoCalculatorOutline style={styleIcon} />,
    },
    {
      name: "Random",
      slug: "random",
      icon: <IoApertureOutline style={styleIcon} />,
    },
  ];
};

export const unitOptions = [
  { label: "none", value: "" },
  { label: "k", value: "k" },
  { label: "m", value: "m" },
];

export const randomOptions = [
  { label: "Random number", value: "rn" },
  { label: "Random wheel", value: "rw" },
];

export const COLORS = [
  "#2563eb",
  "#059669",
  "#d97706",
  "#dc2626",
  "#7c3aed",
  "#db2777",
  "#0891b2",
  "#65a30d",
  "#ea580c",
  "#4f46e5",
  "#9333ea",
  "#0ea5e9",
  "#f43f5e",
  "#14b8a6",
  "#84cc16",
];

export const optionNumberPerRound = [
  { label: "Tất cả", value: 0 },
  { label: "Lần lượt", value: 1 },
  { label: "2 số 1 lần", value: 2 },
  { label: "3 số 1 lần", value: 3 },
  { label: "5 số 1 lần", value: 5 },
  { label: "10 số 1 lần", value: 10 },
];
