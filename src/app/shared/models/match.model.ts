export interface Match {
  id: number;
  team1: string;
  team1FlagCode: string;
  score1: number;
  team2: string;
  team2FlagCode: string;
  score2: number;
  penalties?: string;
  stage: string;
  date: string;
  stadium: string;
  city: string;
}

export interface GroupTeam {
  name: string;
  flagCode: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

export interface Group {
  name: string;
  teams: GroupTeam[];
  matches: Match[];
}

export interface KnockoutRound {
  name: string;
  matches: Match[];
}

export type TournamentFormat =
  | 'modern-32'
  | 'modern-24'
  | 'second-group-24'
  | 'second-group-16'
  | 'classic-16';

export interface TournamentMatches {
  tournamentId: number;
  year: number;
  host: string;
  hostFlagCode: string;
  champion: string;
  championFlagCode: string;
  format: TournamentFormat;
  groups: Group[];
  secondRoundGroups?: Group[];
  knockoutRounds: KnockoutRound[];
}
