export interface SportsDbTeam {
  idTeam: string;
  strTeam: string;
  strCountry: string;
  strTeamBadge: string | null;
  strTeamJersey: string | null;
  strTeamLogo: string | null;
  strDescriptionEN: string | null;
  strLeague: string | null;
  idLeague: string | null;
}

export interface SportsDbTeamsResponse {
  teams: SportsDbTeam[] | null;
}

export interface SportsDbLeague {
  idLeague: string;
  strLeague: string;
  strSport: string;
  strLeagueAlternate: string | null;
  strDescriptionEN: string | null;
  strBadge: string | null;
  strLogo: string | null;
  strTrophy: string | null;
  strCountry: string | null;
}

export interface SportsDbLeagueResponse {
  leagues: SportsDbLeague[] | null;
}
