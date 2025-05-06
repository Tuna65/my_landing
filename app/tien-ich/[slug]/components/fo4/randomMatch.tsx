import React, { useState } from "react";
import { fo4List } from "./data";

type Props = {};

const randomMatch = (props: Props) => {
  const [schedule, setSchedule] = useState<
    Array<{ round: number; matches: Array<{ home: any; away: any }> }>
  >([]);

  const generateSchedule = () => {
    const teams = [...fo4List];
    if (teams.length % 2 !== 0) {
      teams.push({ lable: "Bye", value: "bye", link: "", score: 0, match: 0 }); // Add dummy team if odd number
    }

    const rounds = [];
    const n = teams.length;
    const roundCount = n - 1;

    for (let round = 0; round < roundCount; round++) {
      const roundMatches = [];
      for (let i = 0; i < n / 2; i++) {
        const home = teams[i];
        const away = teams[n - 1 - i];
        if (home.lable !== "Bye" && away.lable !== "Bye") {
          roundMatches.push({ home, away });
        }
      }
      rounds.push({ round: round + 1, matches: roundMatches });

      // Rotate teams for next round (keep first team fixed)
      teams.splice(1, 0, teams.pop()!);
    }

    // Generate return legs (reverse home/away)
    const returnRounds = rounds.map((round, idx) => ({
      round: idx + 1 + roundCount,
      matches: round.matches.map((match) => ({
        home: match.away,
        away: match.home,
      })),
    }));

    setSchedule([...rounds, ...returnRounds]);
  };

  return (
    <div>
      <div className="mb-4">
        <button
          onClick={generateSchedule}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Random lịch thi đấu vòng tròn
        </button>
      </div>
    </div>
  );
};

export default randomMatch;
