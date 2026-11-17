"use client";

import { useEffect } from "react";

export default function GameDetailsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="py-8">
      <section role="alert" className="rounded-xl border border-red-200 bg-red-50 p-6">
        <h1 className="text-2xl font-bold text-red-900">
          Game details could not be loaded
        </h1>
        <p className="mt-2 text-red-800">
          Something went wrong while loading this game. Please try again.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-5 rounded-lg bg-red-800 px-4 py-2 font-semibold text-white hover:bg-red-900"
        >
          Try again
        </button>
      </section>
    </main>
  );
}
