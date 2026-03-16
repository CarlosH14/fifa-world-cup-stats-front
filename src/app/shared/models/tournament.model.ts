export interface Tournament {
  id: number;
  year: number;
  host: string;
  hostFlagCode: string;
  champion: string;
  championFlagCode: string;
  runnerUp: string;
  runnerUpFlagCode: string;
  thirdPlace: string;
  teams: number;
  matches: number;
  totalGoals: number;
  topScorer: string;
  topScorerGoals: number;
  attendance: number;
}

export type StatCategory = 'top-scorers' | 'tournaments' | 'teams';

export interface StatsFilter {
  category: StatCategory;
  searchTerm: string;
  sortBy: string;
  sortDirection: 'asc' | 'desc';
  nationality?: string;
  minGoals?: number;
}
