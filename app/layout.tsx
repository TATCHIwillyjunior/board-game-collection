import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { NavLink } from "@/components/nav-link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Board Game Collection",
    template: "%s | Board Game Collection",
  },
  description: "A shared shelf for board games and play history.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="border-b border-zinc-200 bg-white text-zinc-900">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <Link href="/" className="text-lg font-bold tracking-tight">
              Board Game Collection
            </Link>
            <nav aria-label="Main navigation" className="flex flex-wrap gap-5">
              <NavLink href="/" sectionPrefix="/games">
                Game shelf
              </NavLink>
              <NavLink href="/games/new">Add a game</NavLink>
              <NavLink href="/sessions">Play log</NavLink>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
