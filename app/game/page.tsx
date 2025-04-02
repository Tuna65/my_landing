import React from "react";
import { listGame } from "./useGameServices";
import Link from "next/link";
import Text from "@/components/Text";
type Props = {};

const Game = (props: Props) => {
  return (
    <div className="xl:px-0 px-2 py-4">
      <div className="grid grid-cols-12 gap-4">
        {listGame.map((game) => (
          <div
            key={game.slug}
            className="col-span-4 shadow-md rounded-lg p-4 border border-gray-200 dark:border-gray-700"
          >
            <Link href={`/game/${game.slug}`}>
              <Text>{game.name}</Text>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Game);
