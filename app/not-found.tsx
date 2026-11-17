import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 sm:px-8">
      <h1 className="text-3xl font-bold tracking-tight">Game not found</h1>
      <p className="mt-3 text-zinc-600">
        That page or game is not in the collection.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block font-semibold text-emerald-800 hover:underline"
      >
        Return to the game shelf
      </Link>
    </main>
  );
}
