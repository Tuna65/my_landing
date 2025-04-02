import React from "react";
import Xamloc from "./components/Xamloc";

interface Props {
  params: {
    slug: string;
  };
}

const getGameBySlug = async (slug: string): Promise<any> => {
  switch (slug) {
    case "tinh-diem-xam-loc":
      return <Xamloc />;
    default:
      return null;
  }
};

const GameSlug = async (props: Props) => {
  const { slug } = await props.params;
  const game = await getGameBySlug(slug);
  return <div>{game}</div>;
};

export default GameSlug;
