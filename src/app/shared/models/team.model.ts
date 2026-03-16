export interface Team {
  id: number;
  name: string;
  flagCode: string;
  confederation: string;
  titles: number;
  appearances: number;
  wins: number;
  draws: number;
  losses: number;
  goalsScored: number;
  goalsConceded: number;
  titleYears: number[];
}
