export interface Player {
  id: number;
  name: string;
  nationality: string;
  flagCode: string;
  position: string;
  goals: number;
  appearances: number;
  tournaments: number[];
  image?: string;
}

export interface TopScorer extends Player {
  rank: number;
  tournamentGoals: { year: number; goals: number }[];
}
