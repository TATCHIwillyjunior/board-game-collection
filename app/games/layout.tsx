import type { ReactNode } from "react";

export default function GamesLayout({ children }: { children: ReactNode }) {
  return (
    <section className="mx-auto w-full max-w-5xl flex-1 px-6 pb-10 sm:px-8">
      <p className="border-b border-zinc-200 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
        Games
      </p>
      {children}
    </section>
  );
}
