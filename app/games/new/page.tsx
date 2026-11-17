import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add a Game",
  description: "Add a board game to the shared collection.",
};

export default function NewGamePage() {
  return (
    <main className="py-8">
      <h1 className="text-3xl font-bold tracking-tight">Add a game</h1>
      <p className="mt-2 max-w-2xl text-zinc-600">
        Enter the game details. Saving will be connected in a later milestone.
      </p>

      <form className="mt-8 grid max-w-2xl gap-5 rounded-xl border border-zinc-200 bg-white p-6 text-zinc-900 shadow-sm">
        <label className="grid gap-2 text-sm font-medium">
          Title
          <input
            name="title"
            type="text"
            required
            className="rounded-lg border border-zinc-300 px-3 py-2 font-normal"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium">
          Description
          <textarea
            name="description"
            rows={3}
            required
            className="rounded-lg border border-zinc-300 px-3 py-2 font-normal"
          />
        </label>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium">
            Minimum players
            <input
              name="minPlayers"
              type="number"
              min={1}
              required
              className="rounded-lg border border-zinc-300 px-3 py-2 font-normal"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            Maximum players
            <input
              name="maxPlayers"
              type="number"
              min={1}
              required
              className="rounded-lg border border-zinc-300 px-3 py-2 font-normal"
            />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium">
            Play time (minutes)
            <input
              name="playTimeMinutes"
              type="number"
              min={1}
              required
              className="rounded-lg border border-zinc-300 px-3 py-2 font-normal"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            Complexity
            <select
              name="complexity"
              defaultValue=""
              required
              className="rounded-lg border border-zinc-300 bg-white px-3 py-2 font-normal"
            >
              <option value="" disabled>
                Choose a level
              </option>
              <option>Light</option>
              <option>Medium</option>
              <option>Heavy</option>
            </select>
          </label>
        </div>

        <label className="grid gap-2 text-sm font-medium">
          Cover image URL
          <input
            name="coverImageUrl"
            type="url"
            className="rounded-lg border border-zinc-300 px-3 py-2 font-normal"
          />
        </label>

        <button
          type="button"
          disabled
          className="w-fit rounded-lg bg-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-600"
        >
          Saving will be available later
        </button>
      </form>
    </main>
  );
}
