export type BoardGame = {
  id: number;
  slug: string;
  title: string;
  description: string;
  minPlayers: number;
  maxPlayers: number;
  playTimeMinutes: number;
  complexity: "Light" | "Medium" | "Heavy";
  coverImageUrl: string | null;
};

export type PlaySession = {
  id: string;
  gameSlug: string;
  playedAt: string;
  playerCount: number;
  winnerName: string;
  scores: { playerName: string; score: number }[];
  notes: string;
};

export const games: BoardGame[] = [
  {
    id: 1,
    slug: "moonlit-market",
    title: "Moonlit Market",
    description:
      "Trade curious wares with traveling merchants before the night market closes.",
    minPlayers: 2,
    maxPlayers: 4,
    playTimeMinutes: 35,
    complexity: "Light",
    coverImageUrl: null,
  },
  {
    id: 2,
    slug: "skyward-signals",
    title: "Skyward Signals",
    description:
      "Coordinate a network of floating observatories to chart a shifting sky.",
    minPlayers: 1,
    maxPlayers: 5,
    playTimeMinutes: 50,
    complexity: "Medium",
    coverImageUrl: null,
  },
  {
    id: 3,
    slug: "lanternwood-trails",
    title: "Lanternwood Trails",
    description:
      "Explore a changing woodland, gather supplies, and find the safest route home.",
    minPlayers: 2,
    maxPlayers: 6,
    playTimeMinutes: 60,
    complexity: "Heavy",
    coverImageUrl: null,
  },
];

export const playSessions: PlaySession[] = [
  {
    id: "session-1",
    gameSlug: "moonlit-market",
    playedAt: "2026-10-24",
    playerCount: 3,
    winnerName: "Player A",
    scores: [
      { playerName: "Player A", score: 42 },
      { playerName: "Player B", score: 35 },
      { playerName: "Player C", score: 31 },
    ],
    notes: "A close finish after a late stall upgrade.",
  },
  {
    id: "session-2",
    gameSlug: "skyward-signals",
    playedAt: "2026-11-02",
    playerCount: 2,
    winnerName: "Player B",
    scores: [
      { playerName: "Player A", score: 28 },
      { playerName: "Player B", score: 34 },
    ],
    notes: "The western observatory completed the final constellation.",
  },
  {
    id: "session-3",
    gameSlug: "lanternwood-trails",
    playedAt: "2026-11-09",
    playerCount: 4,
    winnerName: "Player C",
    scores: [
      { playerName: "Player A", score: 19 },
      { playerName: "Player B", score: 22 },
      { playerName: "Player C", score: 27 },
      { playerName: "Player D", score: 21 },
    ],
    notes: "The group found the north trail just before dusk.",
  },
  {
    id: "session-4",
    gameSlug: "moonlit-market",
    playedAt: "2026-11-15",
    playerCount: 4,
    winnerName: "Player D",
    scores: [
      { playerName: "Player A", score: 36 },
      { playerName: "Player B", score: 39 },
      { playerName: "Player C", score: 33 },
      { playerName: "Player D", score: 41 },
    ],
    notes: "A new market route made the final round unpredictable.",
  },
];

export function getGameBySlug(slug: string): BoardGame | undefined {
  return games.find((game) => game.slug === slug);
}

export async function getGameDetails(
  slug: string,
): Promise<BoardGame | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return getGameBySlug(slug);
}

export function getSessionsByGameSlug(gameSlug: string): PlaySession[] {
  return playSessions.filter((session) => session.gameSlug === gameSlug);
}
