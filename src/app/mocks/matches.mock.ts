import { TournamentMatches } from '../shared/models/match.model';

export const MATCHES_MOCK: TournamentMatches[] = [
  // ========================
  // 2022 FIFA World Cup - Qatar (32 teams, modern format)
  // ========================
  {
    tournamentId: 1,
    year: 2022,
    host: 'Qatar',
    hostFlagCode: 'qa',
    champion: 'Argentina',
    championFlagCode: 'ar',
    format: 'modern-32',
    groups: [
      {
        name: 'A',
        teams: [
          { name: 'Netherlands', flagCode: 'nl', played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 5, goalsAgainst: 1, points: 7 },
          { name: 'Senegal', flagCode: 'sn', played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 5, goalsAgainst: 4, points: 6 },
          { name: 'Ecuador', flagCode: 'ec', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 4, goalsAgainst: 3, points: 4 },
          { name: 'Qatar', flagCode: 'qa', played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 1, goalsAgainst: 7, points: 0 }
        ],
        matches: [
          { id: 101, team1: 'Qatar', team1FlagCode: 'qa', score1: 0, team2: 'Ecuador', team2FlagCode: 'ec', score2: 2, stage: 'Group A', date: '2022-11-20', stadium: 'Al Bayt Stadium', city: 'Al Khor' },
          { id: 102, team1: 'Senegal', team1FlagCode: 'sn', score1: 0, team2: 'Netherlands', team2FlagCode: 'nl', score2: 2, stage: 'Group A', date: '2022-11-21', stadium: 'Al Thumama Stadium', city: 'Doha' },
          { id: 103, team1: 'Qatar', team1FlagCode: 'qa', score1: 1, team2: 'Senegal', team2FlagCode: 'sn', score2: 3, stage: 'Group A', date: '2022-11-25', stadium: 'Al Thumama Stadium', city: 'Doha' },
          { id: 104, team1: 'Netherlands', team1FlagCode: 'nl', score1: 1, team2: 'Ecuador', team2FlagCode: 'ec', score2: 1, stage: 'Group A', date: '2022-11-25', stadium: 'Khalifa International Stadium', city: 'Doha' },
          { id: 105, team1: 'Ecuador', team1FlagCode: 'ec', score1: 1, team2: 'Senegal', team2FlagCode: 'sn', score2: 2, stage: 'Group A', date: '2022-11-29', stadium: 'Khalifa International Stadium', city: 'Doha' },
          { id: 106, team1: 'Netherlands', team1FlagCode: 'nl', score1: 2, team2: 'Qatar', team2FlagCode: 'qa', score2: 0, stage: 'Group A', date: '2022-11-29', stadium: 'Al Bayt Stadium', city: 'Al Khor' }
        ]
      },
      {
        name: 'B',
        teams: [
          { name: 'England', flagCode: 'gb-eng', played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 9, goalsAgainst: 2, points: 7 },
          { name: 'USA', flagCode: 'us', played: 3, won: 1, drawn: 2, lost: 0, goalsFor: 2, goalsAgainst: 1, points: 5 },
          { name: 'Iran', flagCode: 'ir', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 4, goalsAgainst: 7, points: 3 },
          { name: 'Wales', flagCode: 'gb-wls', played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 1, goalsAgainst: 6, points: 1 }
        ],
        matches: [
          { id: 107, team1: 'England', team1FlagCode: 'gb-eng', score1: 6, team2: 'Iran', team2FlagCode: 'ir', score2: 2, stage: 'Group B', date: '2022-11-21', stadium: 'Khalifa International Stadium', city: 'Doha' },
          { id: 108, team1: 'USA', team1FlagCode: 'us', score1: 1, team2: 'Wales', team2FlagCode: 'gb-wls', score2: 1, stage: 'Group B', date: '2022-11-21', stadium: 'Ahmad Bin Ali Stadium', city: 'Al Rayyan' },
          { id: 109, team1: 'Wales', team1FlagCode: 'gb-wls', score1: 0, team2: 'Iran', team2FlagCode: 'ir', score2: 2, stage: 'Group B', date: '2022-11-25', stadium: 'Ahmad Bin Ali Stadium', city: 'Al Rayyan' },
          { id: 110, team1: 'England', team1FlagCode: 'gb-eng', score1: 0, team2: 'USA', team2FlagCode: 'us', score2: 0, stage: 'Group B', date: '2022-11-25', stadium: 'Al Bayt Stadium', city: 'Al Khor' },
          { id: 111, team1: 'Iran', team1FlagCode: 'ir', score1: 0, team2: 'USA', team2FlagCode: 'us', score2: 1, stage: 'Group B', date: '2022-11-29', stadium: 'Al Thumama Stadium', city: 'Doha' },
          { id: 112, team1: 'Wales', team1FlagCode: 'gb-wls', score1: 0, team2: 'England', team2FlagCode: 'gb-eng', score2: 3, stage: 'Group B', date: '2022-11-29', stadium: 'Ahmad Bin Ali Stadium', city: 'Al Rayyan' }
        ]
      },
      {
        name: 'C',
        teams: [
          { name: 'Argentina', flagCode: 'ar', played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 5, goalsAgainst: 2, points: 6 },
          { name: 'Poland', flagCode: 'pl', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 2, points: 4 },
          { name: 'Mexico', flagCode: 'mx', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 3, points: 4 },
          { name: 'Saudi Arabia', flagCode: 'sa', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 3, goalsAgainst: 5, points: 3 }
        ],
        matches: [
          { id: 113, team1: 'Argentina', team1FlagCode: 'ar', score1: 1, team2: 'Saudi Arabia', team2FlagCode: 'sa', score2: 2, stage: 'Group C', date: '2022-11-22', stadium: 'Lusail Stadium', city: 'Lusail' },
          { id: 114, team1: 'Mexico', team1FlagCode: 'mx', score1: 0, team2: 'Poland', team2FlagCode: 'pl', score2: 0, stage: 'Group C', date: '2022-11-22', stadium: 'Stadium 974', city: 'Doha' },
          { id: 115, team1: 'Poland', team1FlagCode: 'pl', score1: 2, team2: 'Saudi Arabia', team2FlagCode: 'sa', score2: 0, stage: 'Group C', date: '2022-11-26', stadium: 'Education City Stadium', city: 'Al Rayyan' },
          { id: 116, team1: 'Argentina', team1FlagCode: 'ar', score1: 2, team2: 'Mexico', team2FlagCode: 'mx', score2: 0, stage: 'Group C', date: '2022-11-26', stadium: 'Lusail Stadium', city: 'Lusail' },
          { id: 117, team1: 'Poland', team1FlagCode: 'pl', score1: 0, team2: 'Argentina', team2FlagCode: 'ar', score2: 2, stage: 'Group C', date: '2022-11-30', stadium: 'Stadium 974', city: 'Doha' },
          { id: 118, team1: 'Saudi Arabia', team1FlagCode: 'sa', score1: 1, team2: 'Mexico', team2FlagCode: 'mx', score2: 2, stage: 'Group C', date: '2022-11-30', stadium: 'Lusail Stadium', city: 'Lusail' }
        ]
      },
      {
        name: 'D',
        teams: [
          { name: 'France', flagCode: 'fr', played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 6, goalsAgainst: 3, points: 6 },
          { name: 'Australia', flagCode: 'au', played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 3, goalsAgainst: 4, points: 6 },
          { name: 'Tunisia', flagCode: 'tn', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 1, goalsAgainst: 1, points: 4 },
          { name: 'Denmark', flagCode: 'dk', played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 1, goalsAgainst: 3, points: 1 }
        ],
        matches: [
          { id: 119, team1: 'Denmark', team1FlagCode: 'dk', score1: 0, team2: 'Tunisia', team2FlagCode: 'tn', score2: 0, stage: 'Group D', date: '2022-11-22', stadium: 'Education City Stadium', city: 'Al Rayyan' },
          { id: 120, team1: 'France', team1FlagCode: 'fr', score1: 4, team2: 'Australia', team2FlagCode: 'au', score2: 1, stage: 'Group D', date: '2022-11-22', stadium: 'Al Janoub Stadium', city: 'Al Wakrah' },
          { id: 121, team1: 'Tunisia', team1FlagCode: 'tn', score1: 0, team2: 'Australia', team2FlagCode: 'au', score2: 1, stage: 'Group D', date: '2022-11-26', stadium: 'Al Janoub Stadium', city: 'Al Wakrah' },
          { id: 122, team1: 'France', team1FlagCode: 'fr', score1: 2, team2: 'Denmark', team2FlagCode: 'dk', score2: 1, stage: 'Group D', date: '2022-11-26', stadium: 'Stadium 974', city: 'Doha' },
          { id: 123, team1: 'Australia', team1FlagCode: 'au', score1: 1, team2: 'Denmark', team2FlagCode: 'dk', score2: 0, stage: 'Group D', date: '2022-11-30', stadium: 'Al Janoub Stadium', city: 'Al Wakrah' },
          { id: 124, team1: 'Tunisia', team1FlagCode: 'tn', score1: 1, team2: 'France', team2FlagCode: 'fr', score2: 0, stage: 'Group D', date: '2022-11-30', stadium: 'Education City Stadium', city: 'Al Rayyan' }
        ]
      },
      {
        name: 'E',
        teams: [
          { name: 'Japan', flagCode: 'jp', played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 4, goalsAgainst: 3, points: 6 },
          { name: 'Spain', flagCode: 'es', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 9, goalsAgainst: 3, points: 4 },
          { name: 'Germany', flagCode: 'de', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 6, goalsAgainst: 5, points: 4 },
          { name: 'Costa Rica', flagCode: 'cr', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 3, goalsAgainst: 11, points: 3 }
        ],
        matches: [
          { id: 125, team1: 'Germany', team1FlagCode: 'de', score1: 1, team2: 'Japan', team2FlagCode: 'jp', score2: 2, stage: 'Group E', date: '2022-11-23', stadium: 'Khalifa International Stadium', city: 'Doha' },
          { id: 126, team1: 'Spain', team1FlagCode: 'es', score1: 7, team2: 'Costa Rica', team2FlagCode: 'cr', score2: 0, stage: 'Group E', date: '2022-11-23', stadium: 'Al Thumama Stadium', city: 'Doha' },
          { id: 127, team1: 'Japan', team1FlagCode: 'jp', score1: 0, team2: 'Costa Rica', team2FlagCode: 'cr', score2: 1, stage: 'Group E', date: '2022-11-27', stadium: 'Ahmad Bin Ali Stadium', city: 'Al Rayyan' },
          { id: 128, team1: 'Spain', team1FlagCode: 'es', score1: 1, team2: 'Germany', team2FlagCode: 'de', score2: 1, stage: 'Group E', date: '2022-11-27', stadium: 'Al Bayt Stadium', city: 'Al Khor' },
          { id: 129, team1: 'Japan', team1FlagCode: 'jp', score1: 2, team2: 'Spain', team2FlagCode: 'es', score2: 1, stage: 'Group E', date: '2022-12-01', stadium: 'Khalifa International Stadium', city: 'Doha' },
          { id: 130, team1: 'Costa Rica', team1FlagCode: 'cr', score1: 2, team2: 'Germany', team2FlagCode: 'de', score2: 4, stage: 'Group E', date: '2022-12-01', stadium: 'Al Bayt Stadium', city: 'Al Khor' }
        ]
      },
      {
        name: 'F',
        teams: [
          { name: 'Morocco', flagCode: 'ma', played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 4, goalsAgainst: 1, points: 7 },
          { name: 'Croatia', flagCode: 'hr', played: 3, won: 1, drawn: 2, lost: 0, goalsFor: 4, goalsAgainst: 1, points: 5 },
          { name: 'Belgium', flagCode: 'be', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 1, goalsAgainst: 2, points: 4 },
          { name: 'Canada', flagCode: 'ca', played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 2, goalsAgainst: 7, points: 0 }
        ],
        matches: [
          { id: 131, team1: 'Morocco', team1FlagCode: 'ma', score1: 0, team2: 'Croatia', team2FlagCode: 'hr', score2: 0, stage: 'Group F', date: '2022-11-23', stadium: 'Al Bayt Stadium', city: 'Al Khor' },
          { id: 132, team1: 'Belgium', team1FlagCode: 'be', score1: 1, team2: 'Canada', team2FlagCode: 'ca', score2: 0, stage: 'Group F', date: '2022-11-23', stadium: 'Ahmad Bin Ali Stadium', city: 'Al Rayyan' },
          { id: 133, team1: 'Belgium', team1FlagCode: 'be', score1: 0, team2: 'Morocco', team2FlagCode: 'ma', score2: 2, stage: 'Group F', date: '2022-11-27', stadium: 'Al Thumama Stadium', city: 'Doha' },
          { id: 134, team1: 'Croatia', team1FlagCode: 'hr', score1: 4, team2: 'Canada', team2FlagCode: 'ca', score2: 1, stage: 'Group F', date: '2022-11-27', stadium: 'Khalifa International Stadium', city: 'Doha' },
          { id: 135, team1: 'Croatia', team1FlagCode: 'hr', score1: 0, team2: 'Belgium', team2FlagCode: 'be', score2: 0, stage: 'Group F', date: '2022-12-01', stadium: 'Ahmad Bin Ali Stadium', city: 'Al Rayyan' },
          { id: 136, team1: 'Canada', team1FlagCode: 'ca', score1: 1, team2: 'Morocco', team2FlagCode: 'ma', score2: 2, stage: 'Group F', date: '2022-12-01', stadium: 'Al Thumama Stadium', city: 'Doha' }
        ]
      },
      {
        name: 'G',
        teams: [
          { name: 'Brazil', flagCode: 'br', played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 3, goalsAgainst: 1, points: 6 },
          { name: 'Switzerland', flagCode: 'ch', played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 4, goalsAgainst: 3, points: 6 },
          { name: 'Cameroon', flagCode: 'cm', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 4, goalsAgainst: 4, points: 4 },
          { name: 'Serbia', flagCode: 'rs', played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 5, goalsAgainst: 8, points: 1 }
        ],
        matches: [
          { id: 137, team1: 'Switzerland', team1FlagCode: 'ch', score1: 1, team2: 'Cameroon', team2FlagCode: 'cm', score2: 0, stage: 'Group G', date: '2022-11-24', stadium: 'Al Janoub Stadium', city: 'Al Wakrah' },
          { id: 138, team1: 'Brazil', team1FlagCode: 'br', score1: 2, team2: 'Serbia', team2FlagCode: 'rs', score2: 0, stage: 'Group G', date: '2022-11-24', stadium: 'Lusail Stadium', city: 'Lusail' },
          { id: 139, team1: 'Cameroon', team1FlagCode: 'cm', score1: 3, team2: 'Serbia', team2FlagCode: 'rs', score2: 3, stage: 'Group G', date: '2022-11-28', stadium: 'Al Janoub Stadium', city: 'Al Wakrah' },
          { id: 140, team1: 'Brazil', team1FlagCode: 'br', score1: 1, team2: 'Switzerland', team2FlagCode: 'ch', score2: 0, stage: 'Group G', date: '2022-11-28', stadium: 'Stadium 974', city: 'Doha' },
          { id: 141, team1: 'Serbia', team1FlagCode: 'rs', score1: 2, team2: 'Switzerland', team2FlagCode: 'ch', score2: 3, stage: 'Group G', date: '2022-12-02', stadium: 'Stadium 974', city: 'Doha' },
          { id: 142, team1: 'Cameroon', team1FlagCode: 'cm', score1: 1, team2: 'Brazil', team2FlagCode: 'br', score2: 0, stage: 'Group G', date: '2022-12-02', stadium: 'Lusail Stadium', city: 'Lusail' }
        ]
      },
      {
        name: 'H',
        teams: [
          { name: 'Portugal', flagCode: 'pt', played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 6, goalsAgainst: 4, points: 6 },
          { name: 'South Korea', flagCode: 'kr', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 4, goalsAgainst: 3, points: 4 },
          { name: 'Uruguay', flagCode: 'uy', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 2, points: 4 },
          { name: 'Ghana', flagCode: 'gh', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 5, goalsAgainst: 7, points: 3 }
        ],
        matches: [
          { id: 143, team1: 'Uruguay', team1FlagCode: 'uy', score1: 0, team2: 'South Korea', team2FlagCode: 'kr', score2: 0, stage: 'Group H', date: '2022-11-24', stadium: 'Education City Stadium', city: 'Al Rayyan' },
          { id: 144, team1: 'Portugal', team1FlagCode: 'pt', score1: 3, team2: 'Ghana', team2FlagCode: 'gh', score2: 2, stage: 'Group H', date: '2022-11-24', stadium: 'Stadium 974', city: 'Doha' },
          { id: 145, team1: 'South Korea', team1FlagCode: 'kr', score1: 2, team2: 'Ghana', team2FlagCode: 'gh', score2: 3, stage: 'Group H', date: '2022-11-28', stadium: 'Education City Stadium', city: 'Al Rayyan' },
          { id: 146, team1: 'Portugal', team1FlagCode: 'pt', score1: 2, team2: 'Uruguay', team2FlagCode: 'uy', score2: 0, stage: 'Group H', date: '2022-11-28', stadium: 'Lusail Stadium', city: 'Lusail' },
          { id: 147, team1: 'Ghana', team1FlagCode: 'gh', score1: 0, team2: 'Uruguay', team2FlagCode: 'uy', score2: 2, stage: 'Group H', date: '2022-12-02', stadium: 'Al Janoub Stadium', city: 'Al Wakrah' },
          { id: 148, team1: 'South Korea', team1FlagCode: 'kr', score1: 2, team2: 'Portugal', team2FlagCode: 'pt', score2: 1, stage: 'Group H', date: '2022-12-02', stadium: 'Education City Stadium', city: 'Al Rayyan' }
        ]
      }
    ],
    knockoutRounds: [
      {
        name: 'Round of 16',
        matches: [
          { id: 201, team1: 'Netherlands', team1FlagCode: 'nl', score1: 3, team2: 'USA', team2FlagCode: 'us', score2: 1, stage: 'Round of 16', date: '2022-12-03', stadium: 'Khalifa International Stadium', city: 'Doha' },
          { id: 202, team1: 'Argentina', team1FlagCode: 'ar', score1: 2, team2: 'Australia', team2FlagCode: 'au', score2: 1, stage: 'Round of 16', date: '2022-12-03', stadium: 'Ahmad Bin Ali Stadium', city: 'Al Rayyan' },
          { id: 203, team1: 'Japan', team1FlagCode: 'jp', score1: 1, team2: 'Croatia', team2FlagCode: 'hr', score2: 1, penalties: '1-3', stage: 'Round of 16', date: '2022-12-05', stadium: 'Al Janoub Stadium', city: 'Al Wakrah' },
          { id: 204, team1: 'Brazil', team1FlagCode: 'br', score1: 4, team2: 'South Korea', team2FlagCode: 'kr', score2: 1, stage: 'Round of 16', date: '2022-12-05', stadium: 'Stadium 974', city: 'Doha' },
          { id: 205, team1: 'England', team1FlagCode: 'gb-eng', score1: 3, team2: 'Senegal', team2FlagCode: 'sn', score2: 0, stage: 'Round of 16', date: '2022-12-04', stadium: 'Al Bayt Stadium', city: 'Al Khor' },
          { id: 206, team1: 'France', team1FlagCode: 'fr', score1: 3, team2: 'Poland', team2FlagCode: 'pl', score2: 1, stage: 'Round of 16', date: '2022-12-04', stadium: 'Al Thumama Stadium', city: 'Doha' },
          { id: 207, team1: 'Morocco', team1FlagCode: 'ma', score1: 0, team2: 'Spain', team2FlagCode: 'es', score2: 0, penalties: '3-0', stage: 'Round of 16', date: '2022-12-06', stadium: 'Education City Stadium', city: 'Al Rayyan' },
          { id: 208, team1: 'Portugal', team1FlagCode: 'pt', score1: 6, team2: 'Switzerland', team2FlagCode: 'ch', score2: 1, stage: 'Round of 16', date: '2022-12-06', stadium: 'Lusail Stadium', city: 'Lusail' }
        ]
      },
      {
        name: 'Quarter-finals',
        matches: [
          { id: 301, team1: 'Netherlands', team1FlagCode: 'nl', score1: 2, team2: 'Argentina', team2FlagCode: 'ar', score2: 2, penalties: '3-4', stage: 'Quarter-finals', date: '2022-12-09', stadium: 'Lusail Stadium', city: 'Lusail' },
          { id: 302, team1: 'Croatia', team1FlagCode: 'hr', score1: 1, team2: 'Brazil', team2FlagCode: 'br', score2: 1, penalties: '4-2', stage: 'Quarter-finals', date: '2022-12-09', stadium: 'Education City Stadium', city: 'Al Rayyan' },
          { id: 303, team1: 'England', team1FlagCode: 'gb-eng', score1: 1, team2: 'France', team2FlagCode: 'fr', score2: 2, stage: 'Quarter-finals', date: '2022-12-10', stadium: 'Al Bayt Stadium', city: 'Al Khor' },
          { id: 304, team1: 'Morocco', team1FlagCode: 'ma', score1: 1, team2: 'Portugal', team2FlagCode: 'pt', score2: 0, stage: 'Quarter-finals', date: '2022-12-10', stadium: 'Al Thumama Stadium', city: 'Doha' }
        ]
      },
      {
        name: 'Semi-finals',
        matches: [
          { id: 401, team1: 'Argentina', team1FlagCode: 'ar', score1: 3, team2: 'Croatia', team2FlagCode: 'hr', score2: 0, stage: 'Semi-finals', date: '2022-12-13', stadium: 'Lusail Stadium', city: 'Lusail' },
          { id: 402, team1: 'France', team1FlagCode: 'fr', score1: 2, team2: 'Morocco', team2FlagCode: 'ma', score2: 0, stage: 'Semi-finals', date: '2022-12-14', stadium: 'Al Bayt Stadium', city: 'Al Khor' }
        ]
      },
      {
        name: 'Third place',
        matches: [
          { id: 501, team1: 'Croatia', team1FlagCode: 'hr', score1: 2, team2: 'Morocco', team2FlagCode: 'ma', score2: 1, stage: 'Third place', date: '2022-12-17', stadium: 'Khalifa International Stadium', city: 'Doha' }
        ]
      },
      {
        name: 'Final',
        matches: [
          { id: 601, team1: 'Argentina', team1FlagCode: 'ar', score1: 3, team2: 'France', team2FlagCode: 'fr', score2: 3, penalties: '4-2', stage: 'Final', date: '2022-12-18', stadium: 'Lusail Stadium', city: 'Lusail' }
        ]
      }
    ]
  },

  // ========================
  // 2018 FIFA World Cup - Russia
  // ========================
  {
    tournamentId: 2,
    year: 2018,
    host: 'Russia',
    hostFlagCode: 'ru',
    champion: 'France',
    championFlagCode: 'fr',
    format: 'modern-32',
    groups: [
      {
        name: 'A',
        teams: [
          { name: 'Uruguay', flagCode: 'uy', played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 5, goalsAgainst: 0, points: 9 },
          { name: 'Russia', flagCode: 'ru', played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 8, goalsAgainst: 4, points: 6 },
          { name: 'Saudi Arabia', flagCode: 'sa', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 2, goalsAgainst: 7, points: 3 },
          { name: 'Egypt', flagCode: 'eg', played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 2, goalsAgainst: 6, points: 0 }
        ],
        matches: []
      },
      {
        name: 'B',
        teams: [
          { name: 'Spain', flagCode: 'es', played: 3, won: 1, drawn: 2, lost: 0, goalsFor: 6, goalsAgainst: 5, points: 5 },
          { name: 'Portugal', flagCode: 'pt', played: 3, won: 1, drawn: 2, lost: 0, goalsFor: 5, goalsAgainst: 4, points: 5 },
          { name: 'Iran', flagCode: 'ir', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 2, points: 4 },
          { name: 'Morocco', flagCode: 'ma', played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 2, goalsAgainst: 4, points: 1 }
        ],
        matches: []
      },
      {
        name: 'C',
        teams: [
          { name: 'France', flagCode: 'fr', played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 3, goalsAgainst: 1, points: 7 },
          { name: 'Denmark', flagCode: 'dk', played: 3, won: 1, drawn: 2, lost: 0, goalsFor: 2, goalsAgainst: 1, points: 5 },
          { name: 'Peru', flagCode: 'pe', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 2, goalsAgainst: 2, points: 3 },
          { name: 'Australia', flagCode: 'au', played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 2, goalsAgainst: 5, points: 1 }
        ],
        matches: []
      },
      {
        name: 'D',
        teams: [
          { name: 'Croatia', flagCode: 'hr', played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 7, goalsAgainst: 1, points: 9 },
          { name: 'Argentina', flagCode: 'ar', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 3, goalsAgainst: 5, points: 4 },
          { name: 'Nigeria', flagCode: 'ng', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 3, goalsAgainst: 4, points: 3 },
          { name: 'Iceland', flagCode: 'is', played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 2, goalsAgainst: 5, points: 1 }
        ],
        matches: []
      },
      {
        name: 'E',
        teams: [
          { name: 'Brazil', flagCode: 'br', played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 5, goalsAgainst: 1, points: 7 },
          { name: 'Switzerland', flagCode: 'ch', played: 3, won: 1, drawn: 2, lost: 0, goalsFor: 5, goalsAgainst: 4, points: 5 },
          { name: 'Serbia', flagCode: 'rs', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 2, goalsAgainst: 4, points: 3 },
          { name: 'Costa Rica', flagCode: 'cr', played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 2, goalsAgainst: 5, points: 1 }
        ],
        matches: []
      },
      {
        name: 'F',
        teams: [
          { name: 'Sweden', flagCode: 'se', played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 5, goalsAgainst: 2, points: 6 },
          { name: 'Mexico', flagCode: 'mx', played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 3, goalsAgainst: 4, points: 6 },
          { name: 'South Korea', flagCode: 'kr', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 3, goalsAgainst: 3, points: 3 },
          { name: 'Germany', flagCode: 'de', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 2, goalsAgainst: 4, points: 3 }
        ],
        matches: []
      },
      {
        name: 'G',
        teams: [
          { name: 'Belgium', flagCode: 'be', played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 9, goalsAgainst: 2, points: 9 },
          { name: 'England', flagCode: 'gb-eng', played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 8, goalsAgainst: 3, points: 6 },
          { name: 'Tunisia', flagCode: 'tn', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 5, goalsAgainst: 8, points: 3 },
          { name: 'Panama', flagCode: 'pa', played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 2, goalsAgainst: 11, points: 0 }
        ],
        matches: []
      },
      {
        name: 'H',
        teams: [
          { name: 'Colombia', flagCode: 'co', played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 5, goalsAgainst: 2, points: 6 },
          { name: 'Japan', flagCode: 'jp', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 4, goalsAgainst: 4, points: 4 },
          { name: 'Senegal', flagCode: 'sn', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 4, goalsAgainst: 4, points: 4 },
          { name: 'Poland', flagCode: 'pl', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 2, goalsAgainst: 5, points: 3 }
        ],
        matches: []
      }
    ],
    knockoutRounds: [
      {
        name: 'Round of 16',
        matches: [
          { id: 1201, team1: 'Uruguay', team1FlagCode: 'uy', score1: 2, team2: 'Portugal', team2FlagCode: 'pt', score2: 1, stage: 'Round of 16', date: '2018-06-30', stadium: 'Fisht Olympic Stadium', city: 'Sochi' },
          { id: 1202, team1: 'France', team1FlagCode: 'fr', score1: 4, team2: 'Argentina', team2FlagCode: 'ar', score2: 3, stage: 'Round of 16', date: '2018-06-30', stadium: 'Kazan Arena', city: 'Kazan' },
          { id: 1203, team1: 'Spain', team1FlagCode: 'es', score1: 1, team2: 'Russia', team2FlagCode: 'ru', score2: 1, penalties: '3-4', stage: 'Round of 16', date: '2018-07-01', stadium: 'Luzhniki Stadium', city: 'Moscow' },
          { id: 1204, team1: 'Croatia', team1FlagCode: 'hr', score1: 1, team2: 'Denmark', team2FlagCode: 'dk', score2: 1, penalties: '3-2', stage: 'Round of 16', date: '2018-07-01', stadium: 'Nizhny Novgorod Stadium', city: 'Nizhny Novgorod' },
          { id: 1205, team1: 'Brazil', team1FlagCode: 'br', score1: 2, team2: 'Mexico', team2FlagCode: 'mx', score2: 0, stage: 'Round of 16', date: '2018-07-02', stadium: 'Samara Arena', city: 'Samara' },
          { id: 1206, team1: 'Belgium', team1FlagCode: 'be', score1: 3, team2: 'Japan', team2FlagCode: 'jp', score2: 2, stage: 'Round of 16', date: '2018-07-02', stadium: 'Rostov Arena', city: 'Rostov-on-Don' },
          { id: 1207, team1: 'Sweden', team1FlagCode: 'se', score1: 1, team2: 'Switzerland', team2FlagCode: 'ch', score2: 0, stage: 'Round of 16', date: '2018-07-03', stadium: 'Saint Petersburg Stadium', city: 'Saint Petersburg' },
          { id: 1208, team1: 'Colombia', team1FlagCode: 'co', score1: 1, team2: 'England', team2FlagCode: 'gb-eng', score2: 1, penalties: '3-4', stage: 'Round of 16', date: '2018-07-03', stadium: 'Spartak Stadium', city: 'Moscow' }
        ]
      },
      {
        name: 'Quarter-finals',
        matches: [
          { id: 1301, team1: 'Uruguay', team1FlagCode: 'uy', score1: 0, team2: 'France', team2FlagCode: 'fr', score2: 2, stage: 'Quarter-finals', date: '2018-07-06', stadium: 'Nizhny Novgorod Stadium', city: 'Nizhny Novgorod' },
          { id: 1302, team1: 'Russia', team1FlagCode: 'ru', score1: 2, team2: 'Croatia', team2FlagCode: 'hr', score2: 2, penalties: '3-4', stage: 'Quarter-finals', date: '2018-07-07', stadium: 'Fisht Olympic Stadium', city: 'Sochi' },
          { id: 1303, team1: 'Brazil', team1FlagCode: 'br', score1: 1, team2: 'Belgium', team2FlagCode: 'be', score2: 2, stage: 'Quarter-finals', date: '2018-07-06', stadium: 'Kazan Arena', city: 'Kazan' },
          { id: 1304, team1: 'Sweden', team1FlagCode: 'se', score1: 0, team2: 'England', team2FlagCode: 'gb-eng', score2: 2, stage: 'Quarter-finals', date: '2018-07-07', stadium: 'Samara Arena', city: 'Samara' }
        ]
      },
      {
        name: 'Semi-finals',
        matches: [
          { id: 1401, team1: 'France', team1FlagCode: 'fr', score1: 1, team2: 'Belgium', team2FlagCode: 'be', score2: 0, stage: 'Semi-finals', date: '2018-07-10', stadium: 'Saint Petersburg Stadium', city: 'Saint Petersburg' },
          { id: 1402, team1: 'Croatia', team1FlagCode: 'hr', score1: 2, team2: 'England', team2FlagCode: 'gb-eng', score2: 1, stage: 'Semi-finals', date: '2018-07-11', stadium: 'Luzhniki Stadium', city: 'Moscow' }
        ]
      },
      {
        name: 'Third place',
        matches: [
          { id: 1501, team1: 'Belgium', team1FlagCode: 'be', score1: 2, team2: 'England', team2FlagCode: 'gb-eng', score2: 0, stage: 'Third place', date: '2018-07-14', stadium: 'Saint Petersburg Stadium', city: 'Saint Petersburg' }
        ]
      },
      {
        name: 'Final',
        matches: [
          { id: 1601, team1: 'France', team1FlagCode: 'fr', score1: 4, team2: 'Croatia', team2FlagCode: 'hr', score2: 2, stage: 'Final', date: '2018-07-15', stadium: 'Luzhniki Stadium', city: 'Moscow' }
        ]
      }
    ]
  },

  // ========================
  // 2014 FIFA World Cup - Brazil
  // ========================
  {
    tournamentId: 3,
    year: 2014,
    host: 'Brazil',
    hostFlagCode: 'br',
    champion: 'Germany',
    championFlagCode: 'de',
    format: 'modern-32',
    groups: [
      {
        name: 'A',
        teams: [
          { name: 'Brazil', flagCode: 'br', played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 7, goalsAgainst: 2, points: 7 },
          { name: 'Mexico', flagCode: 'mx', played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 4, goalsAgainst: 1, points: 7 },
          { name: 'Croatia', flagCode: 'hr', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 6, goalsAgainst: 6, points: 3 },
          { name: 'Cameroon', flagCode: 'cm', played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 1, goalsAgainst: 9, points: 0 }
        ],
        matches: []
      },
      {
        name: 'B',
        teams: [
          { name: 'Netherlands', flagCode: 'nl', played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 10, goalsAgainst: 3, points: 9 },
          { name: 'Chile', flagCode: 'cl', played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 5, goalsAgainst: 3, points: 6 },
          { name: 'Spain', flagCode: 'es', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 4, goalsAgainst: 7, points: 3 },
          { name: 'Australia', flagCode: 'au', played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 3, goalsAgainst: 9, points: 0 }
        ],
        matches: []
      },
      {
        name: 'C',
        teams: [
          { name: 'Colombia', flagCode: 'co', played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 9, goalsAgainst: 2, points: 9 },
          { name: 'Greece', flagCode: 'gr', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 4, points: 4 },
          { name: "Côte d'Ivoire", flagCode: 'ci', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 4, goalsAgainst: 5, points: 3 },
          { name: 'Japan', flagCode: 'jp', played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 2, goalsAgainst: 6, points: 1 }
        ],
        matches: []
      },
      {
        name: 'D',
        teams: [
          { name: 'Costa Rica', flagCode: 'cr', played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 4, goalsAgainst: 1, points: 7 },
          { name: 'Uruguay', flagCode: 'uy', played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 4, goalsAgainst: 4, points: 6 },
          { name: 'Italy', flagCode: 'it', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 2, goalsAgainst: 3, points: 3 },
          { name: 'England', flagCode: 'gb-eng', played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 2, goalsAgainst: 4, points: 1 }
        ],
        matches: []
      },
      {
        name: 'E',
        teams: [
          { name: 'France', flagCode: 'fr', played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 8, goalsAgainst: 2, points: 7 },
          { name: 'Switzerland', flagCode: 'ch', played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 7, goalsAgainst: 6, points: 7 },
          { name: 'Ecuador', flagCode: 'ec', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 3, goalsAgainst: 3, points: 3 },
          { name: 'Honduras', flagCode: 'hn', played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 1, goalsAgainst: 8, points: 0 }
        ],
        matches: []
      },
      {
        name: 'F',
        teams: [
          { name: 'Argentina', flagCode: 'ar', played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 6, goalsAgainst: 3, points: 9 },
          { name: 'Nigeria', flagCode: 'ng', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 3, goalsAgainst: 3, points: 4 },
          { name: 'Bosnia-Herzegovina', flagCode: 'ba', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 4, goalsAgainst: 4, points: 3 },
          { name: 'Iran', flagCode: 'ir', played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 1, goalsAgainst: 4, points: 1 }
        ],
        matches: []
      },
      {
        name: 'G',
        teams: [
          { name: 'Germany', flagCode: 'de', played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 7, goalsAgainst: 2, points: 7 },
          { name: 'USA', flagCode: 'us', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 4, goalsAgainst: 4, points: 4 },
          { name: 'Portugal', flagCode: 'pt', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 4, goalsAgainst: 7, points: 4 },
          { name: 'Ghana', flagCode: 'gh', played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 4, goalsAgainst: 6, points: 1 }
        ],
        matches: []
      },
      {
        name: 'H',
        teams: [
          { name: 'Belgium', flagCode: 'be', played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 4, goalsAgainst: 1, points: 9 },
          { name: 'Algeria', flagCode: 'dz', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 6, goalsAgainst: 5, points: 4 },
          { name: 'Russia', flagCode: 'ru', played: 3, won: 0, drawn: 2, lost: 1, goalsFor: 2, goalsAgainst: 3, points: 2 },
          { name: 'South Korea', flagCode: 'kr', played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 3, goalsAgainst: 6, points: 1 }
        ],
        matches: []
      }
    ],
    knockoutRounds: [
      {
        name: 'Round of 16',
        matches: [
          { id: 2201, team1: 'Brazil', team1FlagCode: 'br', score1: 1, team2: 'Chile', team2FlagCode: 'cl', score2: 1, penalties: '3-2', stage: 'Round of 16', date: '2014-06-28', stadium: 'Estádio Mineirão', city: 'Belo Horizonte' },
          { id: 2202, team1: 'Colombia', team1FlagCode: 'co', score1: 2, team2: 'Uruguay', team2FlagCode: 'uy', score2: 0, stage: 'Round of 16', date: '2014-06-28', stadium: 'Maracanã', city: 'Rio de Janeiro' },
          { id: 2203, team1: 'Netherlands', team1FlagCode: 'nl', score1: 2, team2: 'Mexico', team2FlagCode: 'mx', score2: 1, stage: 'Round of 16', date: '2014-06-29', stadium: 'Arena Castelão', city: 'Fortaleza' },
          { id: 2204, team1: 'Costa Rica', team1FlagCode: 'cr', score1: 1, team2: 'Greece', team2FlagCode: 'gr', score2: 1, penalties: '5-3', stage: 'Round of 16', date: '2014-06-29', stadium: 'Arena Pernambuco', city: 'Recife' },
          { id: 2205, team1: 'France', team1FlagCode: 'fr', score1: 2, team2: 'Nigeria', team2FlagCode: 'ng', score2: 0, stage: 'Round of 16', date: '2014-06-30', stadium: 'Estádio Nacional', city: 'Brasília' },
          { id: 2206, team1: 'Germany', team1FlagCode: 'de', score1: 2, team2: 'Algeria', team2FlagCode: 'dz', score2: 1, stage: 'Round of 16', date: '2014-06-30', stadium: 'Estádio Beira-Rio', city: 'Porto Alegre' },
          { id: 2207, team1: 'Argentina', team1FlagCode: 'ar', score1: 1, team2: 'Switzerland', team2FlagCode: 'ch', score2: 0, stage: 'Round of 16', date: '2014-07-01', stadium: 'Arena Corinthians', city: 'São Paulo' },
          { id: 2208, team1: 'Belgium', team1FlagCode: 'be', score1: 2, team2: 'USA', team2FlagCode: 'us', score2: 1, stage: 'Round of 16', date: '2014-07-01', stadium: 'Arena Fonte Nova', city: 'Salvador' }
        ]
      },
      {
        name: 'Quarter-finals',
        matches: [
          { id: 2301, team1: 'Brazil', team1FlagCode: 'br', score1: 2, team2: 'Colombia', team2FlagCode: 'co', score2: 1, stage: 'Quarter-finals', date: '2014-07-04', stadium: 'Arena Castelão', city: 'Fortaleza' },
          { id: 2302, team1: 'Netherlands', team1FlagCode: 'nl', score1: 0, team2: 'Costa Rica', team2FlagCode: 'cr', score2: 0, penalties: '4-3', stage: 'Quarter-finals', date: '2014-07-05', stadium: 'Arena Fonte Nova', city: 'Salvador' },
          { id: 2303, team1: 'France', team1FlagCode: 'fr', score1: 0, team2: 'Germany', team2FlagCode: 'de', score2: 1, stage: 'Quarter-finals', date: '2014-07-04', stadium: 'Maracanã', city: 'Rio de Janeiro' },
          { id: 2304, team1: 'Argentina', team1FlagCode: 'ar', score1: 1, team2: 'Belgium', team2FlagCode: 'be', score2: 0, stage: 'Quarter-finals', date: '2014-07-05', stadium: 'Estádio Nacional', city: 'Brasília' }
        ]
      },
      {
        name: 'Semi-finals',
        matches: [
          { id: 2401, team1: 'Brazil', team1FlagCode: 'br', score1: 1, team2: 'Germany', team2FlagCode: 'de', score2: 7, stage: 'Semi-finals', date: '2014-07-08', stadium: 'Estádio Mineirão', city: 'Belo Horizonte' },
          { id: 2402, team1: 'Netherlands', team1FlagCode: 'nl', score1: 0, team2: 'Argentina', team2FlagCode: 'ar', score2: 0, penalties: '2-4', stage: 'Semi-finals', date: '2014-07-09', stadium: 'Arena Corinthians', city: 'São Paulo' }
        ]
      },
      {
        name: 'Third place',
        matches: [
          { id: 2501, team1: 'Brazil', team1FlagCode: 'br', score1: 0, team2: 'Netherlands', team2FlagCode: 'nl', score2: 3, stage: 'Third place', date: '2014-07-12', stadium: 'Estádio Nacional', city: 'Brasília' }
        ]
      },
      {
        name: 'Final',
        matches: [
          { id: 2601, team1: 'Germany', team1FlagCode: 'de', score1: 1, team2: 'Argentina', team2FlagCode: 'ar', score2: 0, stage: 'Final', date: '2014-07-13', stadium: 'Maracanã', city: 'Rio de Janeiro' }
        ]
      }
    ]
  },

  // ========================
  // 2010 FIFA World Cup - South Africa
  // ========================
  {
    tournamentId: 4,
    year: 2010,
    host: 'South Africa',
    hostFlagCode: 'za',
    champion: 'Spain',
    championFlagCode: 'es',
    format: 'modern-32',
    groups: [
      {
        name: 'A',
        teams: [
          { name: 'Uruguay', flagCode: 'uy', played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 4, goalsAgainst: 0, points: 7 },
          { name: 'Mexico', flagCode: 'mx', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 3, goalsAgainst: 2, points: 4 },
          { name: 'South Africa', flagCode: 'za', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 3, goalsAgainst: 5, points: 4 },
          { name: 'France', flagCode: 'fr', played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 1, goalsAgainst: 4, points: 1 }
        ],
        matches: []
      },
      { name: 'B', teams: [
          { name: 'Argentina', flagCode: 'ar', played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 7, goalsAgainst: 1, points: 9 },
          { name: 'South Korea', flagCode: 'kr', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 5, goalsAgainst: 6, points: 4 },
          { name: 'Greece', flagCode: 'gr', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 2, goalsAgainst: 5, points: 3 },
          { name: 'Nigeria', flagCode: 'ng', played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 3, goalsAgainst: 5, points: 1 }
        ], matches: [] },
      { name: 'C', teams: [
          { name: 'USA', flagCode: 'us', played: 3, won: 1, drawn: 2, lost: 0, goalsFor: 4, goalsAgainst: 3, points: 5 },
          { name: 'England', flagCode: 'gb-eng', played: 3, won: 1, drawn: 2, lost: 0, goalsFor: 2, goalsAgainst: 1, points: 5 },
          { name: 'Slovenia', flagCode: 'si', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 3, goalsAgainst: 3, points: 4 },
          { name: 'Algeria', flagCode: 'dz', played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 0, goalsAgainst: 2, points: 1 }
        ], matches: [] },
      { name: 'D', teams: [
          { name: 'Germany', flagCode: 'de', played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 5, goalsAgainst: 1, points: 6 },
          { name: 'Ghana', flagCode: 'gh', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 2, points: 4 },
          { name: 'Australia', flagCode: 'au', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 3, goalsAgainst: 6, points: 4 },
          { name: 'Serbia', flagCode: 'rs', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 2, goalsAgainst: 3, points: 3 }
        ], matches: [] },
      { name: 'E', teams: [
          { name: 'Netherlands', flagCode: 'nl', played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 5, goalsAgainst: 1, points: 9 },
          { name: 'Japan', flagCode: 'jp', played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 4, goalsAgainst: 2, points: 6 },
          { name: 'Denmark', flagCode: 'dk', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 3, goalsAgainst: 6, points: 3 },
          { name: 'Cameroon', flagCode: 'cm', played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 2, goalsAgainst: 5, points: 0 }
        ], matches: [] },
      { name: 'F', teams: [
          { name: 'Paraguay', flagCode: 'py', played: 3, won: 1, drawn: 2, lost: 0, goalsFor: 3, goalsAgainst: 1, points: 5 },
          { name: 'Slovakia', flagCode: 'sk', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 4, goalsAgainst: 5, points: 4 },
          { name: 'New Zealand', flagCode: 'nz', played: 3, won: 0, drawn: 3, lost: 0, goalsFor: 2, goalsAgainst: 2, points: 3 },
          { name: 'Italy', flagCode: 'it', played: 3, won: 0, drawn: 2, lost: 1, goalsFor: 4, goalsAgainst: 5, points: 2 }
        ], matches: [] },
      { name: 'G', teams: [
          { name: 'Brazil', flagCode: 'br', played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 5, goalsAgainst: 1, points: 7 },
          { name: 'Portugal', flagCode: 'pt', played: 3, won: 1, drawn: 2, lost: 0, goalsFor: 7, goalsAgainst: 0, points: 5 },
          { name: "Côte d'Ivoire", flagCode: 'ci', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 4, goalsAgainst: 3, points: 4 },
          { name: 'North Korea', flagCode: 'kp', played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 1, goalsAgainst: 12, points: 0 }
        ], matches: [] },
      { name: 'H', teams: [
          { name: 'Spain', flagCode: 'es', played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 4, goalsAgainst: 2, points: 6 },
          { name: 'Chile', flagCode: 'cl', played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 3, goalsAgainst: 2, points: 6 },
          { name: 'Switzerland', flagCode: 'ch', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 1, goalsAgainst: 1, points: 4 },
          { name: 'Honduras', flagCode: 'hn', played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 0, goalsAgainst: 3, points: 1 }
        ], matches: [] }
    ],
    knockoutRounds: [
      {
        name: 'Round of 16',
        matches: [
          { id: 3201, team1: 'Uruguay', team1FlagCode: 'uy', score1: 2, team2: 'South Korea', team2FlagCode: 'kr', score2: 1, stage: 'Round of 16', date: '2010-06-26', stadium: 'Nelson Mandela Bay Stadium', city: 'Port Elizabeth' },
          { id: 3202, team1: 'USA', team1FlagCode: 'us', score1: 1, team2: 'Ghana', team2FlagCode: 'gh', score2: 2, stage: 'Round of 16', date: '2010-06-26', stadium: 'Royal Bafokeng Stadium', city: 'Rustenburg' },
          { id: 3203, team1: 'Germany', team1FlagCode: 'de', score1: 4, team2: 'England', team2FlagCode: 'gb-eng', score2: 1, stage: 'Round of 16', date: '2010-06-27', stadium: 'Free State Stadium', city: 'Bloemfontein' },
          { id: 3204, team1: 'Argentina', team1FlagCode: 'ar', score1: 3, team2: 'Mexico', team2FlagCode: 'mx', score2: 1, stage: 'Round of 16', date: '2010-06-27', stadium: 'Soccer City', city: 'Johannesburg' },
          { id: 3205, team1: 'Netherlands', team1FlagCode: 'nl', score1: 2, team2: 'Slovakia', team2FlagCode: 'sk', score2: 1, stage: 'Round of 16', date: '2010-06-28', stadium: 'Moses Mabhida Stadium', city: 'Durban' },
          { id: 3206, team1: 'Brazil', team1FlagCode: 'br', score1: 3, team2: 'Chile', team2FlagCode: 'cl', score2: 0, stage: 'Round of 16', date: '2010-06-28', stadium: 'Ellis Park Stadium', city: 'Johannesburg' },
          { id: 3207, team1: 'Paraguay', team1FlagCode: 'py', score1: 0, team2: 'Japan', team2FlagCode: 'jp', score2: 0, penalties: '5-3', stage: 'Round of 16', date: '2010-06-29', stadium: 'Loftus Versfeld Stadium', city: 'Pretoria' },
          { id: 3208, team1: 'Spain', team1FlagCode: 'es', score1: 1, team2: 'Portugal', team2FlagCode: 'pt', score2: 0, stage: 'Round of 16', date: '2010-06-29', stadium: 'Cape Town Stadium', city: 'Cape Town' }
        ]
      },
      {
        name: 'Quarter-finals',
        matches: [
          { id: 3301, team1: 'Uruguay', team1FlagCode: 'uy', score1: 1, team2: 'Ghana', team2FlagCode: 'gh', score2: 1, penalties: '4-2', stage: 'Quarter-finals', date: '2010-07-02', stadium: 'Soccer City', city: 'Johannesburg' },
          { id: 3302, team1: 'Germany', team1FlagCode: 'de', score1: 4, team2: 'Argentina', team2FlagCode: 'ar', score2: 0, stage: 'Quarter-finals', date: '2010-07-03', stadium: 'Cape Town Stadium', city: 'Cape Town' },
          { id: 3303, team1: 'Netherlands', team1FlagCode: 'nl', score1: 2, team2: 'Brazil', team2FlagCode: 'br', score2: 1, stage: 'Quarter-finals', date: '2010-07-02', stadium: 'Nelson Mandela Bay Stadium', city: 'Port Elizabeth' },
          { id: 3304, team1: 'Paraguay', team1FlagCode: 'py', score1: 0, team2: 'Spain', team2FlagCode: 'es', score2: 1, stage: 'Quarter-finals', date: '2010-07-03', stadium: 'Ellis Park Stadium', city: 'Johannesburg' }
        ]
      },
      {
        name: 'Semi-finals',
        matches: [
          { id: 3401, team1: 'Uruguay', team1FlagCode: 'uy', score1: 2, team2: 'Netherlands', team2FlagCode: 'nl', score2: 3, stage: 'Semi-finals', date: '2010-07-06', stadium: 'Cape Town Stadium', city: 'Cape Town' },
          { id: 3402, team1: 'Germany', team1FlagCode: 'de', score1: 0, team2: 'Spain', team2FlagCode: 'es', score2: 1, stage: 'Semi-finals', date: '2010-07-07', stadium: 'Moses Mabhida Stadium', city: 'Durban' }
        ]
      },
      {
        name: 'Third place',
        matches: [
          { id: 3501, team1: 'Uruguay', team1FlagCode: 'uy', score1: 2, team2: 'Germany', team2FlagCode: 'de', score2: 3, stage: 'Third place', date: '2010-07-10', stadium: 'Nelson Mandela Bay Stadium', city: 'Port Elizabeth' }
        ]
      },
      {
        name: 'Final',
        matches: [
          { id: 3601, team1: 'Netherlands', team1FlagCode: 'nl', score1: 0, team2: 'Spain', team2FlagCode: 'es', score2: 1, stage: 'Final', date: '2010-07-11', stadium: 'Soccer City', city: 'Johannesburg' }
        ]
      }
    ]
  },

  // ========================
  // 1986 FIFA World Cup - Mexico (24 teams, Round of 16 format)
  // ========================
  {
    tournamentId: 10,
    year: 1986,
    host: 'Mexico',
    hostFlagCode: 'mx',
    champion: 'Argentina',
    championFlagCode: 'ar',
    format: 'modern-24',
    groups: [
      {
        name: 'A',
        teams: [
          { name: 'Argentina', flagCode: 'ar', played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 6, goalsAgainst: 2, points: 5 },
          { name: 'Italy', flagCode: 'it', played: 3, won: 1, drawn: 2, lost: 0, goalsFor: 5, goalsAgainst: 4, points: 4 },
          { name: 'Bulgaria', flagCode: 'bg', played: 3, won: 0, drawn: 2, lost: 1, goalsFor: 2, goalsAgainst: 4, points: 2 },
          { name: 'South Korea', flagCode: 'kr', played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 4, goalsAgainst: 7, points: 1 }
        ],
        matches: []
      },
      {
        name: 'B',
        teams: [
          { name: 'Mexico', flagCode: 'mx', played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 4, goalsAgainst: 2, points: 5 },
          { name: 'Paraguay', flagCode: 'py', played: 3, won: 1, drawn: 2, lost: 0, goalsFor: 4, goalsAgainst: 3, points: 4 },
          { name: 'Belgium', flagCode: 'be', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 5, goalsAgainst: 5, points: 3 },
          { name: 'Iraq', flagCode: 'iq', played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 1, goalsAgainst: 4, points: 0 }
        ],
        matches: []
      },
      {
        name: 'C',
        teams: [
          { name: 'Soviet Union', flagCode: 'ru', played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 9, goalsAgainst: 1, points: 5 },
          { name: 'France', flagCode: 'fr', played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 5, goalsAgainst: 1, points: 5 },
          { name: 'Hungary', flagCode: 'hu', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 2, goalsAgainst: 9, points: 2 },
          { name: 'Canada', flagCode: 'ca', played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 0, goalsAgainst: 5, points: 0 }
        ],
        matches: []
      },
      {
        name: 'D',
        teams: [
          { name: 'Brazil', flagCode: 'br', played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 5, goalsAgainst: 0, points: 6 },
          { name: 'Spain', flagCode: 'es', played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 5, goalsAgainst: 2, points: 4 },
          { name: 'Northern Ireland', flagCode: 'gb-nir', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 2, goalsAgainst: 6, points: 2 },
          { name: 'Algeria', flagCode: 'dz', played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 1, goalsAgainst: 5, points: 0 }
        ],
        matches: []
      },
      {
        name: 'E',
        teams: [
          { name: 'Denmark', flagCode: 'dk', played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 9, goalsAgainst: 1, points: 6 },
          { name: 'Germany', flagCode: 'de', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 3, goalsAgainst: 4, points: 3 },
          { name: 'Uruguay', flagCode: 'uy', played: 3, won: 0, drawn: 2, lost: 1, goalsFor: 2, goalsAgainst: 7, points: 2 },
          { name: 'Scotland', flagCode: 'gb-sct', played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 1, goalsAgainst: 3, points: 1 }
        ],
        matches: []
      },
      {
        name: 'F',
        teams: [
          { name: 'Morocco', flagCode: 'ma', played: 3, won: 1, drawn: 2, lost: 0, goalsFor: 3, goalsAgainst: 1, points: 4 },
          { name: 'England', flagCode: 'gb-eng', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 3, goalsAgainst: 1, points: 3 },
          { name: 'Poland', flagCode: 'pl', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 1, goalsAgainst: 3, points: 3 },
          { name: 'Portugal', flagCode: 'pt', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 2, goalsAgainst: 4, points: 2 }
        ],
        matches: []
      }
    ],
    knockoutRounds: [
      {
        name: 'Round of 16',
        matches: [
          { id: 8201, team1: 'Mexico', team1FlagCode: 'mx', score1: 2, team2: 'Bulgaria', team2FlagCode: 'bg', score2: 0, stage: 'Round of 16', date: '1986-06-15', stadium: 'Estadio Azteca', city: 'Mexico City' },
          { id: 8202, team1: 'Belgium', team1FlagCode: 'be', score1: 4, team2: 'Soviet Union', team2FlagCode: 'ru', score2: 3, stage: 'Round of 16', date: '1986-06-15', stadium: 'Estadio Nou Camp', city: 'León' },
          { id: 8203, team1: 'Brazil', team1FlagCode: 'br', score1: 4, team2: 'Poland', team2FlagCode: 'pl', score2: 0, stage: 'Round of 16', date: '1986-06-16', stadium: 'Estadio Jalisco', city: 'Guadalajara' },
          { id: 8204, team1: 'Argentina', team1FlagCode: 'ar', score1: 1, team2: 'Uruguay', team2FlagCode: 'uy', score2: 0, stage: 'Round of 16', date: '1986-06-16', stadium: 'Estadio Cuauhtémoc', city: 'Puebla' },
          { id: 8205, team1: 'France', team1FlagCode: 'fr', score1: 2, team2: 'Italy', team2FlagCode: 'it', score2: 0, stage: 'Round of 16', date: '1986-06-17', stadium: 'Estadio Olímpico', city: 'Mexico City' },
          { id: 8206, team1: 'Germany', team1FlagCode: 'de', score1: 1, team2: 'Morocco', team2FlagCode: 'ma', score2: 0, stage: 'Round of 16', date: '1986-06-17', stadium: 'Estadio Tres de Marzo', city: 'Monterrey' },
          { id: 8207, team1: 'England', team1FlagCode: 'gb-eng', score1: 3, team2: 'Paraguay', team2FlagCode: 'py', score2: 0, stage: 'Round of 16', date: '1986-06-18', stadium: 'Estadio Azteca', city: 'Mexico City' },
          { id: 8208, team1: 'Spain', team1FlagCode: 'es', score1: 5, team2: 'Denmark', team2FlagCode: 'dk', score2: 1, stage: 'Round of 16', date: '1986-06-18', stadium: 'Estadio La Corregidora', city: 'Querétaro' }
        ]
      },
      {
        name: 'Quarter-finals',
        matches: [
          { id: 8301, team1: 'Brazil', team1FlagCode: 'br', score1: 1, team2: 'France', team2FlagCode: 'fr', score2: 1, penalties: '3-4', stage: 'Quarter-finals', date: '1986-06-21', stadium: 'Estadio Jalisco', city: 'Guadalajara' },
          { id: 8302, team1: 'Germany', team1FlagCode: 'de', score1: 0, team2: 'Mexico', team2FlagCode: 'mx', score2: 0, penalties: '4-1', stage: 'Quarter-finals', date: '1986-06-21', stadium: 'Estadio Universitario', city: 'Monterrey' },
          { id: 8303, team1: 'Argentina', team1FlagCode: 'ar', score1: 2, team2: 'England', team2FlagCode: 'gb-eng', score2: 1, stage: 'Quarter-finals', date: '1986-06-22', stadium: 'Estadio Azteca', city: 'Mexico City' },
          { id: 8304, team1: 'Belgium', team1FlagCode: 'be', score1: 1, team2: 'Spain', team2FlagCode: 'es', score2: 1, penalties: '5-4', stage: 'Quarter-finals', date: '1986-06-22', stadium: 'Estadio Cuauhtémoc', city: 'Puebla' }
        ]
      },
      {
        name: 'Semi-finals',
        matches: [
          { id: 8401, team1: 'France', team1FlagCode: 'fr', score1: 0, team2: 'Germany', team2FlagCode: 'de', score2: 2, stage: 'Semi-finals', date: '1986-06-25', stadium: 'Estadio Jalisco', city: 'Guadalajara' },
          { id: 8402, team1: 'Argentina', team1FlagCode: 'ar', score1: 2, team2: 'Belgium', team2FlagCode: 'be', score2: 0, stage: 'Semi-finals', date: '1986-06-25', stadium: 'Estadio Azteca', city: 'Mexico City' }
        ]
      },
      {
        name: 'Third place',
        matches: [
          { id: 8501, team1: 'France', team1FlagCode: 'fr', score1: 4, team2: 'Belgium', team2FlagCode: 'be', score2: 2, stage: 'Third place', date: '1986-06-28', stadium: 'Estadio Cuauhtémoc', city: 'Puebla' }
        ]
      },
      {
        name: 'Final',
        matches: [
          { id: 8601, team1: 'Argentina', team1FlagCode: 'ar', score1: 3, team2: 'Germany', team2FlagCode: 'de', score2: 2, stage: 'Final', date: '1986-06-29', stadium: 'Estadio Azteca', city: 'Mexico City' }
        ]
      }
    ]
  },

  // ========================
  // 1970 FIFA World Cup - Mexico (16 teams, classic format: groups then QF)
  // ========================
  {
    tournamentId: 14,
    year: 1970,
    host: 'Mexico',
    hostFlagCode: 'mx',
    champion: 'Brazil',
    championFlagCode: 'br',
    format: 'classic-16',
    groups: [
      {
        name: '1',
        teams: [
          { name: 'Soviet Union', flagCode: 'ru', played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 6, goalsAgainst: 1, points: 5 },
          { name: 'Mexico', flagCode: 'mx', played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 5, goalsAgainst: 0, points: 5 },
          { name: 'Belgium', flagCode: 'be', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 4, goalsAgainst: 5, points: 2 },
          { name: 'El Salvador', flagCode: 'sv', played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 0, goalsAgainst: 9, points: 0 }
        ],
        matches: []
      },
      {
        name: '2',
        teams: [
          { name: 'Italy', flagCode: 'it', played: 3, won: 1, drawn: 2, lost: 0, goalsFor: 1, goalsAgainst: 0, points: 4 },
          { name: 'Uruguay', flagCode: 'uy', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 1, points: 3 },
          { name: 'Sweden', flagCode: 'se', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 2, points: 3 },
          { name: 'Israel', flagCode: 'il', played: 3, won: 0, drawn: 2, lost: 1, goalsFor: 1, goalsAgainst: 3, points: 2 }
        ],
        matches: []
      },
      {
        name: '3',
        teams: [
          { name: 'Brazil', flagCode: 'br', played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 8, goalsAgainst: 3, points: 6 },
          { name: 'England', flagCode: 'gb-eng', played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 2, goalsAgainst: 1, points: 4 },
          { name: 'Romania', flagCode: 'ro', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 4, goalsAgainst: 5, points: 2 },
          { name: 'Czechoslovakia', flagCode: 'cz', played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 2, goalsAgainst: 7, points: 0 }
        ],
        matches: []
      },
      {
        name: '4',
        teams: [
          { name: 'Germany', flagCode: 'de', played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 10, goalsAgainst: 4, points: 6 },
          { name: 'Peru', flagCode: 'pe', played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 7, goalsAgainst: 5, points: 4 },
          { name: 'Bulgaria', flagCode: 'bg', played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 5, goalsAgainst: 9, points: 1 },
          { name: 'Morocco', flagCode: 'ma', played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 2, goalsAgainst: 6, points: 1 }
        ],
        matches: []
      }
    ],
    knockoutRounds: [
      {
        name: 'Quarter-finals',
        matches: [
          { id: 9201, team1: 'Uruguay', team1FlagCode: 'uy', score1: 1, team2: 'Soviet Union', team2FlagCode: 'ru', score2: 0, stage: 'Quarter-finals', date: '1970-06-14', stadium: 'Estadio Azteca', city: 'Mexico City' },
          { id: 9202, team1: 'Italy', team1FlagCode: 'it', score1: 4, team2: 'Mexico', team2FlagCode: 'mx', score2: 1, stage: 'Quarter-finals', date: '1970-06-14', stadium: 'Estadio Luis Dosal', city: 'Toluca' },
          { id: 9203, team1: 'Brazil', team1FlagCode: 'br', score1: 4, team2: 'Peru', team2FlagCode: 'pe', score2: 2, stage: 'Quarter-finals', date: '1970-06-14', stadium: 'Estadio Jalisco', city: 'Guadalajara' },
          { id: 9204, team1: 'Germany', team1FlagCode: 'de', score1: 3, team2: 'England', team2FlagCode: 'gb-eng', score2: 2, stage: 'Quarter-finals', date: '1970-06-14', stadium: 'Estadio Nou Camp', city: 'León' }
        ]
      },
      {
        name: 'Semi-finals',
        matches: [
          { id: 9301, team1: 'Italy', team1FlagCode: 'it', score1: 4, team2: 'Germany', team2FlagCode: 'de', score2: 3, stage: 'Semi-finals', date: '1970-06-17', stadium: 'Estadio Azteca', city: 'Mexico City' },
          { id: 9302, team1: 'Brazil', team1FlagCode: 'br', score1: 3, team2: 'Uruguay', team2FlagCode: 'uy', score2: 1, stage: 'Semi-finals', date: '1970-06-17', stadium: 'Estadio Jalisco', city: 'Guadalajara' }
        ]
      },
      {
        name: 'Third place',
        matches: [
          { id: 9401, team1: 'Germany', team1FlagCode: 'de', score1: 1, team2: 'Uruguay', team2FlagCode: 'uy', score2: 0, stage: 'Third place', date: '1970-06-20', stadium: 'Estadio Azteca', city: 'Mexico City' }
        ]
      },
      {
        name: 'Final',
        matches: [
          { id: 9501, team1: 'Brazil', team1FlagCode: 'br', score1: 4, team2: 'Italy', team2FlagCode: 'it', score2: 1, stage: 'Final', date: '1970-06-21', stadium: 'Estadio Azteca', city: 'Mexico City' }
        ]
      }
    ]
  }
];
