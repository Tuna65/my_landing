import React from "react";
import { listGame } from "./useGameServices";
import Link from "next/link";
import Text from "@/components/Text";
type Props = {};

const Game = (props: Props) => {
  return <div className="xl:px-0 px-2 py-4">game</div>;
};

export default React.memo(Game);
