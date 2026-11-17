import type { Metadata } from "next";
import { getGameBySlug, playSessions } from "@/lib/games";

export const metadata: Metadata = {
  title: "Play Log",
  description: "Review recent board-game sessions and scores.",
};

export default function SessionsPage() {
  const sessions = [...playSessions].sort(
    (a, b) => Date.parse(b.playedAt) - Date.parse(a.playedAt),
  );

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10 sm:px-8">
      <h1 className="text-3xl font-bold tracking-tight">Play log</h1>
      <p className="mt-2 text-zinc-600">
        Recent sessions, winners, and scores from the shared collection.
      </p>

      <ol className="mt-8 grid gap-4">
        {sessions.map((session) => {
          const game = getGameBySlug(session.gameSlug);
          if (!game) {
            throw new Error(
              `Play session ${session.id} references unknown game ${session.gameSlug}.`,
            );
          }

          return (
            <li
              key={session.id}
              className="rounded-xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-sm"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold">{game.title}</h2>
                  <time
                    dateTime={session.playedAt}
                    className="mt-1 block text-sm text-zinc-500"
                  >
                    {session.playedAt}
                  </time>
                </div>
                <p className="text-sm text-zinc-600">
                  {session.playerCount} players
                </p>
              </div>
              <p className="mt-3 text-sm">
                Winner: <span className="font-semibold">{session.winnerName}</span>
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-zinc-600">
                {session.scores.map((score) => (
                  <li key={score.playerName}>
                    {score.playerName}: {score.score} points
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-zinc-600">{session.notes}</p>
            </li>
          );
        })}
      </ol>
    </main>
  );
}
