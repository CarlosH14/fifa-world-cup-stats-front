import { TopScorer } from '../shared/models/player.model';

export const TOP_SCORERS_MOCK: TopScorer[] = [
  {
    id: 1,
    rank: 1,
    name: 'Miroslav Klose',
    nationality: 'Germany',
    flagCode: 'de',
    position: 'Forward',
    goals: 16,
    appearances: 24,
    tournaments: [2002, 2006, 2010, 2014],
    tournamentGoals: [
      { year: 2002, goals: 5 },
      { year: 2006, goals: 5 },
      { year: 2010, goals: 4 },
      { year: 2014, goals: 2 }
    ]
  },
  {
    id: 2,
    rank: 2,
    name: 'Ronaldo',
    nationality: 'Brazil',
    flagCode: 'br',
    position: 'Forward',
    goals: 15,
    appearances: 19,
    tournaments: [1994, 1998, 2002, 2006],
    tournamentGoals: [
      { year: 1994, goals: 0 },
      { year: 1998, goals: 4 },
      { year: 2002, goals: 8 },
      { year: 2006, goals: 3 }
    ]
  },
  {
    id: 3,
    rank: 3,
    name: 'Gerd Müller',
    nationality: 'Germany',
    flagCode: 'de',
    position: 'Forward',
    goals: 14,
    appearances: 13,
    tournaments: [1970, 1974],
    tournamentGoals: [
      { year: 1970, goals: 10 },
      { year: 1974, goals: 4 }
    ]
  },
  {
    id: 4,
    rank: 4,
    name: 'Just Fontaine',
    nationality: 'France',
    flagCode: 'fr',
    position: 'Forward',
    goals: 13,
    appearances: 6,
    tournaments: [1958],
    tournamentGoals: [{ year: 1958, goals: 13 }]
  },
  {
    id: 5,
    rank: 5,
    name: 'Pelé',
    nationality: 'Brazil',
    flagCode: 'br',
    position: 'Forward',
    goals: 12,
    appearances: 14,
    tournaments: [1958, 1962, 1966, 1970],
    tournamentGoals: [
      { year: 1958, goals: 6 },
      { year: 1962, goals: 1 },
      { year: 1966, goals: 1 },
      { year: 1970, goals: 4 }
    ]
  },
  {
    id: 6,
    rank: 6,
    name: 'Sandor Kocsis',
    nationality: 'Hungary',
    flagCode: 'hu',
    position: 'Forward',
    goals: 11,
    appearances: 5,
    tournaments: [1954],
    tournamentGoals: [{ year: 1954, goals: 11 }]
  },
  {
    id: 7,
    rank: 7,
    name: 'Jürgen Klinsmann',
    nationality: 'Germany',
    flagCode: 'de',
    position: 'Forward',
    goals: 11,
    appearances: 17,
    tournaments: [1990, 1994, 1998],
    tournamentGoals: [
      { year: 1990, goals: 3 },
      { year: 1994, goals: 5 },
      { year: 1998, goals: 3 }
    ]
  },
  {
    id: 8,
    rank: 8,
    name: 'Gabriel Batistuta',
    nationality: 'Argentina',
    flagCode: 'ar',
    position: 'Forward',
    goals: 10,
    appearances: 12,
    tournaments: [1994, 1998, 2002],
    tournamentGoals: [
      { year: 1994, goals: 4 },
      { year: 1998, goals: 5 },
      { year: 2002, goals: 1 }
    ]
  },
  {
    id: 9,
    rank: 9,
    name: 'Teófilo Cubillas',
    nationality: 'Peru',
    flagCode: 'pe',
    position: 'Midfielder',
    goals: 10,
    appearances: 13,
    tournaments: [1970, 1978],
    tournamentGoals: [
      { year: 1970, goals: 5 },
      { year: 1978, goals: 5 }
    ]
  },
  {
    id: 10,
    rank: 10,
    name: 'Gary Lineker',
    nationality: 'England',
    flagCode: 'gb-eng',
    position: 'Forward',
    goals: 10,
    appearances: 12,
    tournaments: [1986, 1990],
    tournamentGoals: [
      { year: 1986, goals: 6 },
      { year: 1990, goals: 4 }
    ]
  }
];

export const NATIONALITIES_MOCK: string[] = [
  'All', 'Germany', 'Brazil', 'France', 'Hungary', 'Argentina', 'Peru', 'England', 'Italy', 'Spain'
];
