import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  games,
  getGameBySlug,
  getSessionsByGameSlug,
} from "@/lib/games";

type GamePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({
  params,
}: GamePageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    return { title: "Game not found" };
  }

  return {
    title: game.title,
    description: game.description,
  };
}

export default async function GameDetailsPage({ params }: GamePageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  const sessions = getSessionsByGameSlug(game.slug).sort(
    (a, b) => Date.parse(b.playedAt) - Date.parse(a.playedAt),
  );

  return (
    <main className="py-8">
      <Link
        href="/"
        className="text-sm font-semibold text-emerald-800 hover:underline"
      >
        ← Back to the game shelf
      </Link>

      <section className="mt-6 rounded-xl border border-zinc-200 bg-white p-6 text-zinc-900 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          {game.complexity} complexity
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">{game.title}</h1>
        <p className="mt-3 max-w-2xl leading-7 text-zinc-600">
          {game.description}
        </p>
        <dl className="mt-6 grid gap-4 sm:grid-cols-3">
          <div>
            <dt className="text-sm text-zinc-500">Players</dt>
            <dd className="mt-1 font-semibold">
              {game.minPlayers}–{game.maxPlayers}
            </dd>
          </div>
          <div>
            <dt className="text-sm text-zinc-500">Play time</dt>
            <dd className="mt-1 font-semibold">{game.playTimeMinutes} min</dd>
          </div>
          <div>
            <dt className="text-sm text-zinc-500">Complexity</dt>
            <dd className="mt-1 font-semibold">{game.complexity}</dd>
          </div>
        </dl>
      </section>

      <section className="mt-10" aria-labelledby="history-heading">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 id="history-heading" className="text-2xl font-semibold">
              Play history
            </h2>
            <p className="mt-1 text-sm text-zinc-600">
              {sessions.length} {sessions.length === 1 ? "session" : "sessions"}{" "}
              recorded
            </p>
          </div>
          <Link
            href="/sessions"
            className="text-sm font-semibold text-emerald-800 hover:underline"
          >
            View the complete play log
          </Link>
        </div>

        {sessions.length === 0 ? (
          <p className="rounded-xl border border-dashed border-zinc-300 p-5 text-zinc-600">
            No play sessions have been logged for this game yet.
          </p>
        ) : (
          <ul className="grid gap-4">
            {sessions.map((session) => (
              <li
                key={session.id}
                className="rounded-xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-sm"
              >
                <div className="flex flex-wrap justify-between gap-2">
                  <h3 className="font-semibold">
                    Played on{" "}
                    <time dateTime={session.playedAt}>{session.playedAt}</time>
                  </h3>
                  <p className="text-sm text-zinc-600">
                    {session.playerCount} players
                  </p>
                </div>
                <p className="mt-2 text-sm">
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
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
