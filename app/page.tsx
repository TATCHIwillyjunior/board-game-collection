import type { Metadata } from "next";
import Link from "next/link";
import { GameShelf } from "@/components/game-shelf";
import { games, playSessions } from "@/lib/games";

export const metadata: Metadata = {
  title: "Game Shelf",
  description: "Browse the board games in the shared collection.",
};

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10 sm:px-8">
      <section className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          The shared shelf
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">Game Shelf</h1>
        <p className="mt-3 max-w-2xl text-zinc-600">
          Browse the collection and revisit the stories behind each game night.
        </p>
      </section>

      <section
        aria-label="Collection summary"
        className="mb-10 grid gap-4 sm:grid-cols-2"
      >
        <div className="rounded-xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-sm">
          <p className="text-sm text-zinc-600">Games in the collection</p>
          <p className="mt-1 text-3xl font-semibold">{games.length}</p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-sm">
          <p className="text-sm text-zinc-600">Play sessions logged</p>
          <p className="mt-1 text-3xl font-semibold">{playSessions.length}</p>
        </div>
      </section>

      <section aria-labelledby="games-heading">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 id="games-heading" className="text-2xl font-semibold">
              All games
            </h2>
            <p className="mt-1 text-sm text-zinc-600">
              Player count and complexity help you find a game for the group.
            </p>
          </div>
          <Link
            href="/games/new"
            className="shrink-0 rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800"
          >
            Add a game
          </Link>
        </div>
        <GameShelf games={games} />
      </section>
    </main>
  );
}
