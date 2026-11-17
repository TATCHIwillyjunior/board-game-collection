"use client";

import { useState } from "react";
import Link from "next/link";
import type { BoardGame } from "@/lib/games";

export function GameShelf({ games }: { games: BoardGame[] }) {
  const [playerCount, setPlayerCount] = useState("all");
  const [complexity, setComplexity] = useState("all");

  const filteredGames = games.filter((game) => {
    const matchesPlayerCount =
      playerCount === "all" ||
      (game.minPlayers <= Number(playerCount) &&
        Number(playerCount) <= game.maxPlayers);
    const matchesComplexity =
      complexity === "all" || game.complexity === complexity;

    return matchesPlayerCount && matchesComplexity;
  });

  return (
    <>
      <div className="mb-5 grid gap-4 rounded-xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-sm sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          Number of players
          <select
            value={playerCount}
            onChange={(event) => setPlayerCount(event.target.value)}
            className="rounded-lg border border-zinc-300 bg-white px-3 py-2"
          >
            <option value="all">Any group size</option>
            {[1, 2, 3, 4, 5, 6].map((count) => (
              <option key={count} value={count}>
                {count} {count === 1 ? "player" : "players"}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-medium">
          Complexity
          <select
            value={complexity}
            onChange={(event) => setComplexity(event.target.value)}
            className="rounded-lg border border-zinc-300 bg-white px-3 py-2"
          >
            <option value="all">Any complexity</option>
            <option value="Light">Light</option>
            <option value="Medium">Medium</option>
            <option value="Heavy">Heavy</option>
          </select>
        </label>
      </div>

      <p role="status" className="mb-3 text-sm text-zinc-600">
        {filteredGames.length}{" "}
        {filteredGames.length === 1 ? "game matches" : "games match"} these
        filters.
      </p>

      {filteredGames.length === 0 ? (
        <p className="rounded-xl border border-dashed border-zinc-300 p-5 text-zinc-600">
          No games match both filters. Try changing your selection.
        </p>
      ) : (
        <ul className="grid gap-4 md:grid-cols-2">
          {filteredGames.map((game) => (
            <li key={game.id}>
              <Link
                href={`/games/${game.slug}`}
                className="block h-full rounded-xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-sm transition hover:border-emerald-600 hover:shadow-md"
              >
                <h3 className="text-xl font-semibold">{game.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {game.description}
                </p>
                <p className="mt-4 text-sm font-medium text-zinc-700">
                  {game.minPlayers}–{game.maxPlayers} players
                  <span aria-hidden="true"> · </span>
                  {game.playTimeMinutes} min
                  <span aria-hidden="true"> · </span>
                  {game.complexity}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-emerald-800">
                  View game and play history
                  <span aria-hidden="true"> →</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
