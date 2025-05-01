
import React, { useState, ChangeEvent } from "react";
import "../app/globals.css";

type MatchResult = "team1" | "team2" | "tie" | "future";

interface Match {
  id: number;
  team1: string;
  team2: string;
  result: MatchResult;
  upcoming: boolean;
}

interface TeamStats {
  team: string;
  played: number;
  won: number;
  lost: number;
  tied: number;
  points: number;
}

const initialMatchData: Match[] = [
  { id: 1,  team1: 'Kolkata Knight Riders',   team2: 'Royal Challengers Bengaluru', result: 'team2', upcoming: false },
  { id: 2,  team1: 'Sunrisers Hyderabad',      team2: 'Rajasthan Royals',            result: 'team1', upcoming: false },
  { id: 3,  team1: 'Mumbai Indians',           team2: 'Chennai Super Kings',        result: 'team2', upcoming: false },
  { id: 4,  team1: 'Lucknow Super Giants',     team2: 'Delhi Capitals',             result: 'team2', upcoming: false },
  { id: 5,  team1: 'Punjab Kings',             team2: 'Gujarat Titans',             result: 'team1', upcoming: false },
  { id: 6,  team1: 'Rajasthan Royals',         team2: 'Kolkata Knight Riders',      result: 'team2', upcoming: false },
  { id: 7,  team1: 'Sunrisers Hyderabad',      team2: 'Lucknow Super Giants',       result: 'team2', upcoming: false },
  { id: 8,  team1: 'Royal Challengers Bengaluru', team2: 'Chennai Super Kings',    result: 'team1', upcoming: false },
  { id: 9,  team1: 'Gujarat Titans',           team2: 'Mumbai Indians',             result: 'team1', upcoming: false },
  { id: 10, team1: 'Sunrisers Hyderabad',      team2: 'Delhi Capitals',             result: 'team2', upcoming: false },
  { id: 11, team1: 'Rajasthan Royals',         team2: 'Chennai Super Kings',        result: 'team1', upcoming: false },
  { id: 12, team1: 'Kolkata Knight Riders',    team2: 'Mumbai Indians',             result: 'team2', upcoming: false },
  { id: 13, team1: 'Lucknow Super Giants',     team2: 'Punjab Kings',               result: 'team2', upcoming: false },
  { id: 14, team1: 'Royal Challengers Bengaluru', team2: 'Gujarat Titans',        result: 'team2', upcoming: false },
  { id: 15, team1: 'Kolkata Knight Riders',    team2: 'Sunrisers Hyderabad',        result: 'team1', upcoming: false },
  { id: 16, team1: 'Lucknow Super Giants',     team2: 'Mumbai Indians',             result: 'team1', upcoming: false },
  { id: 17, team1: 'Delhi Capitals',           team2: 'Chennai Super Kings',        result: 'team1', upcoming: false },
  { id: 18, team1: 'Rajasthan Royals',         team2: 'Punjab Kings',               result: 'team1', upcoming: false },
  { id: 19, team1: 'Sunrisers Hyderabad',      team2: 'Gujarat Titans',             result: 'team2', upcoming: false },
  { id: 20, team1: 'Royal Challengers Bengaluru', team2: 'Mumbai Indians',        result: 'team1', upcoming: false },
  { id: 21, team1: 'Lucknow Super Giants',     team2: 'Kolkata Knight Riders',      result: 'team1', upcoming: false },
  { id: 22, team1: 'Punjab Kings',             team2: 'Chennai Super Kings',        result: 'team1', upcoming: false },
  { id: 23, team1: 'Gujarat Titans',           team2: 'Rajasthan Royals',           result: 'team1', upcoming: false },
  { id: 24, team1: 'Royal Challengers Bengaluru', team2: 'Delhi Capitals',        result: 'team2', upcoming: false },
  { id: 25, team1: 'Chennai Super Kings',      team2: 'Kolkata Knight Riders',      result: 'team2', upcoming: false },
  { id: 26, team1: 'Gujarat Titans',           team2: 'Lucknow Super Giants',       result: 'team2', upcoming: false },
  { id: 27, team1: 'Punjab Kings',             team2: 'Sunrisers Hyderabad',        result: 'team2', upcoming: false },
  { id: 28, team1: 'Rajasthan Royals',         team2: 'Royal Challengers Bengaluru', result: 'team2', upcoming: false },
  { id: 29, team1: 'Mumbai Indians',           team2: 'Delhi Capitals',             result: 'team1', upcoming: false },
  { id: 30, team1: 'Lucknow Super Giants',     team2: 'Chennai Super Kings',        result: 'team2', upcoming: false },
  { id: 31, team1: 'Punjab Kings',             team2: 'Kolkata Knight Riders',      result: 'team1', upcoming: false },
  { id: 32, team1: 'Delhi Capitals',           team2: 'Rajasthan Royals',           result: 'team1', upcoming: false }, // Super Over win
  { id: 33, team1: 'Sunrisers Hyderabad',      team2: 'Mumbai Indians',             result: 'team2', upcoming: false },
  { id: 34, team1: 'Royal Challengers Bengaluru', team2: 'Punjab Kings',          result: 'team2', upcoming: false },
  { id: 35, team1: 'Delhi Capitals',           team2: 'Gujarat Titans',             result: 'team2', upcoming: false },
  { id: 36, team1: 'Lucknow Super Giants',     team2: 'Rajasthan Royals',           result: 'team1', upcoming: false },
  { id: 37, team1: 'Punjab Kings',             team2: 'Royal Challengers Bengaluru', result: 'team2', upcoming: false },
  { id: 38, team1: 'Chennai Super Kings',      team2: 'Mumbai Indians',             result: 'team2', upcoming: false },
  { id: 39, team1: 'Gujarat Titans',           team2: 'Kolkata Knight Riders',      result: 'team1', upcoming: false },
  { id: 40, team1: 'Lucknow Super Giants',     team2: 'Delhi Capitals',             result: 'team2', upcoming: false },
  { id: 41, team1: 'Sunrisers Hyderabad',      team2: 'Mumbai Indians',             result: 'team2', upcoming: false },
  { id: 42, team1: 'Royal Challengers Bengaluru', team2: 'Rajasthan Royals',      result: 'team1', upcoming: false },
  { id: 43, team1: 'Chennai Super Kings',      team2: 'Sunrisers Hyderabad',        result: 'team2', upcoming: false },
  { id: 44, team1: 'Punjab Kings',             team2: 'Kolkata Knight Riders',      result: 'tie', upcoming: false }, // No result
  { id: 45, team1: 'Mumbai Indians',           team2: 'Lucknow Super Giants',       result: 'team1', upcoming: false },
  { id: 46, team1: 'Delhi Capitals',           team2: 'Royal Challengers Bengaluru', result: 'team2', upcoming: false },
  { id: 47, team1: 'Gujarat Titans',           team2: 'Rajasthan Royals',           result: 'team2', upcoming: false },
  { id: 48, team1: 'Kolkata Knight Riders',    team2: 'Delhi Capitals',             result: 'team1', upcoming: false },
  { id: 49, team1: 'Chennai Super Kings',      team2: 'Punjab Kings',               result: 'team2', upcoming: false },
  { id: 50, team1: 'Mumbai Indians',           team2: 'Rajasthan Royals',           result: 'team1', upcoming: false },
  { id: 51, team1: 'Gujarat Titans',           team2: 'Sunrisers Hyderabad',        result: 'future', upcoming: true },
  { id: 52, team1: 'Royal Challengers Bengaluru', team2: 'Chennai Super Kings',    result: 'future', upcoming: true },
  { id: 53, team1: 'Kolkata Knight Riders',    team2: 'Rajasthan Royals',           result: 'future', upcoming: true },
  { id: 54, team1: 'Punjab Kings',             team2: 'Lucknow Super Giants',       result: 'future', upcoming: true },
  { id: 55, team1: 'Sunrisers Hyderabad',      team2: 'Delhi Capitals',             result: 'future', upcoming: true },
  { id: 56, team1: 'Mumbai Indians',           team2: 'Gujarat Titans',             result: 'future', upcoming: true },
  { id: 57, team1: 'Kolkata Knight Riders',    team2: 'Chennai Super Kings',        result: 'future', upcoming: true },
  { id: 58, team1: 'Punjab Kings',             team2: 'Delhi Capitals',             result: 'future', upcoming: true },
  { id: 59, team1: 'Lucknow Super Giants',     team2: 'Royal Challengers Bengaluru', result: 'future', upcoming: true },
  { id: 60, team1: 'Sunrisers Hyderabad',      team2: 'Kolkata Knight Riders',      result: 'future', upcoming: true },
  { id: 61, team1: 'Punjab Kings',             team2: 'Mumbai Indians',             result: 'future', upcoming: true },
  { id: 62, team1: 'Delhi Capitals',           team2: 'Gujarat Titans',             result: 'future', upcoming: true },
  { id: 63, team1: 'Chennai Super Kings',      team2: 'Rajasthan Royals',           result: 'future', upcoming: true },
  { id: 64, team1: 'Royal Challengers Bengaluru', team2: 'Sunrisers Hyderabad',    result: 'future', upcoming: true },
  { id: 65, team1: 'Gujarat Titans',           team2: 'Lucknow Super Giants',       result: 'future', upcoming: true },
  { id: 66, team1: 'Mumbai Indians',           team2: 'Delhi Capitals',             result: 'future', upcoming: true },
  { id: 67, team1: 'Rajasthan Royals',         team2: 'Punjab Kings',               result: 'future', upcoming: true },
  { id: 68, team1: 'Royal Challengers Bengaluru', team2: 'Kolkata Knight Riders',  result: 'future', upcoming: true },
  { id: 69, team1: 'Gujarat Titans',           team2: 'Chennai Super Kings',        result: 'future', upcoming: true },
  { id: 70, team1: 'Lucknow Super Giants',     team2: 'Sunrisers Hyderabad',        result: 'future', upcoming: true }
];


const IPLSimulator: React.FC = () => {
  const [matchData, setMatchData] = useState<Match[]>(initialMatchData);

  const unique = matchData.filter(
    (m, i, a) => i === a.findIndex((x) => x.id === m.id)
  );
  const completed = unique.filter((m) =>
    ["team1", "team2", "tie"].includes(m.result)
  );
  const upcoming = unique.filter((m) => m.upcoming);

  const stats = completed.reduce<Record<string, TeamStats>>(
    (acc, { team1, team2, result }) => {
      if (!acc[team1])
        acc[team1] = {
          team: team1,
          played: 0,
          won: 0,
          lost: 0,
          tied: 0,
          points: 0,
        };
      if (!acc[team2])
        acc[team2] = {
          team: team2,
          played: 0,
          won: 0,
          lost: 0,
          tied: 0,
          points: 0,
        };
      acc[team1].played++;
      acc[team2].played++;
      if (result === "team1") {
        acc[team1].won++;
        acc[team1].points += 2;
        acc[team2].lost++;
      }
      if (result === "team2") {
        acc[team2].won++;
        acc[team2].points += 2;
        acc[team1].lost++;
      }
      if (result === "tie") {
        acc[team1].tied++;
        acc[team2].tied++;
        acc[team1].points++;
        acc[team2].points++;
      }
      return acc;
    },
    {}
  );

  const tableData = Object.values(stats).sort(
    (a, b) => b.points - a.points
  );

  const handleResultChange = (id: number, res: MatchResult) => {
    setMatchData((prev) =>
      prev.map((m) => (m.id === id ? { ...m, result: res } : m))
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-10 px-2 md:px-0">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-indigo-800 mb-8 drop-shadow-sm tracking-tight">
          IPL Points Table Simulator
        </h1>

        <div className="overflow-x-auto bg-white shadow-2xl rounded-2xl mb-10 border border-indigo-100">
          <table className="w-full text-base text-left">
            <thead className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
              <tr>
                {["Team", "Played", "Points", "Won", "Lost", "Tied"].map((h) => (
                  <th
                    key={h}
                    className="py-4 px-5 uppercase tracking-wider font-semibold text-center"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((t, idx) => (
                <tr
                  key={t.team}
                  className={`border-b last:border-0 transition-colors ${
                    idx < 4
                      ? "bg-gradient-to-r from-yellow-50 to-yellow-100"
                      : "hover:bg-indigo-50"
                  }`}
                >
                  <td className="py-3 px-5 font-bold text-indigo-700">
                    {t.team}
                  </td>
                  <td className="py-3 px-5 text-blue-600 text-center">{t.played}</td>
                  <td className="py-3 px-5 font-bold text-indigo-900 text-center">
                    {t.points}
                  </td>
                  <td className="py-3 px-5 text-green-600 font-semibold text-center">
                    {t.won}
                  </td>
                  <td className="py-3 px-5 text-red-500 font-semibold text-center">
                    {t.lost}
                  </td>
                  <td className="py-3 px-5 text-yellow-600 font-semibold text-center">
                    {t.tied}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-extrabold text-indigo-800 mb-10 text-center tracking-tight drop-shadow">
            <span className="inline-block align-middle">
              <svg className="inline-block w-8 h-8 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.77 7.82 20 9 12.91l-5-3.64 5.91-.01z"/>
              </svg>
            </span>
            Upcoming Matches
          </h2>
          <div className="flex flex-col gap-8">
            {upcoming.map((m) => (
              <div
                key={m.id}
                className="relative bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-7 rounded-2xl shadow-xl border border-indigo-100 flex flex-col items-center gap-6 transition-transform hover:scale-[1.025] hover:shadow-2xl group"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow group-hover:bg-indigo-700 transition">
                    Match #{m.id}
                  </span>
                </div>
                <span className="font-semibold text-xl text-indigo-900 flex items-center justify-center gap-3 mb-4 mt-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-100 text-indigo-700 font-bold shadow-sm border border-indigo-200">
                    <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
                    {m.team1}
                  </span>
                  <span className="text-indigo-400 font-extrabold text-lg px-2">vs</span>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-100 text-indigo-700 font-bold shadow-sm border border-indigo-200">
                    <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
                    {m.team2}
                  </span>
                </span>
                <select
                  className="border border-indigo-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white text-indigo-900 font-semibold shadow transition group-hover:border-indigo-400 w-full max-w-xs"
                  value={m.result}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    handleResultChange(m.id, e.target.value as MatchResult)
                  }
                >
                  <option value="future" className="text-gray-400" disabled>
                    Select result
                  </option>
                  <option value="team1">{m.team1} wins</option>
                  <option value="team2">{m.team2} wins</option>
                  <option value="tie">Tie</option>
                </select>
              </div>
            ))}
            {upcoming.length === 0 && (
              <div className="text-center text-gray-400 py-12 flex flex-col items-center justify-center">
                <svg className="w-12 h-12 mb-3 text-indigo-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 0 1 8 0v2M12 19h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>
                </svg>
                <span className="text-lg font-medium">All matches completed!</span>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default IPLSimulator;
