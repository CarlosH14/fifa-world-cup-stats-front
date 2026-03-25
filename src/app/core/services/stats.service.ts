import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { TopScorer } from '../../shared/models/player.model';
import { Team } from '../../shared/models/team.model';
import { Tournament } from '../../shared/models/tournament.model';
import { TournamentMatches } from '../../shared/models/match.model';
import { TOP_SCORERS_MOCK, TOURNAMENTS_MOCK, TEAMS_MOCK, MATCHES_MOCK } from '../../mocks';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  getTopScorers(): Observable<TopScorer[]> {
    return of([...TOP_SCORERS_MOCK]).pipe(delay(500));
  }

  getTournaments(): Observable<Tournament[]> {
    return of([...TOURNAMENTS_MOCK]).pipe(delay(500));
  }

  getTeams(): Observable<Team[]> {
    return of([...TEAMS_MOCK]).pipe(delay(500));
  }

  getTournamentMatches(): Observable<TournamentMatches[]> {
    return of([...MATCHES_MOCK]).pipe(delay(500));
  }
}
