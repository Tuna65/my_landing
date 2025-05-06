import React from "react";
import Xamloc from "./components/Xamloc";
import Random from "./components/random";
import FO4 from "./components/fo4";
interface Props {
  params: {
    slug: string;
  };
}

const getGameBySlug = async (slug: string): Promise<any> => {
  switch (slug) {
    case "tinh-diem-xam-loc":
      return <Xamloc />;
    case "random":
      return <Random />;
    case "fo4":
      return <FO4 />;
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
