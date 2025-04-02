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

export const listGame = [
  {
    name: "Tính điểm xâm lốc",
    slug: "tinh-diem-xam-loc",
  },
  // {
  //   name: "Game 2",
  //   slug: "game-2",
  // },
];

export const unitOptions = [
  { label: "none", value: "" },
  { label: "k", value: "k" },
  { label: "m", value: "m" },
];
