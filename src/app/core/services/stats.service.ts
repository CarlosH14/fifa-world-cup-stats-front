import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TopScorer } from '../../shared/models/player.model';
import { Team } from '../../shared/models/team.model';
import { Tournament } from '../../shared/models/tournament.model';
import { TOP_SCORERS_MOCK, TOURNAMENTS_MOCK, TEAMS_MOCK } from '../../mocks';
import { WorldCupApiService } from './world-cup-api.service';
import { SportsDbTeam } from '../models/sports-db.models';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private readonly apiService: WorldCupApiService) {}

  getTopScorers(): Observable<TopScorer[]> {
    return of([...TOP_SCORERS_MOCK]);
  }

  getTournaments(): Observable<Tournament[]> {
    return of([...TOURNAMENTS_MOCK]);
  }

  getTeams(): Observable<Team[]> {
    return this.apiService.getTeams().pipe(
      map(apiTeams => this.mergeTeamsWithApiData(apiTeams)),
      catchError(() => of([...TEAMS_MOCK]))
    );
  }

  private mergeTeamsWithApiData(apiTeams: SportsDbTeam[]): Team[] {
    if (!apiTeams.length) {
      return [...TEAMS_MOCK];
    }

    // Build a lookup map: normalized team name -> badge URL
    const badgeMap = new Map<string, string>();
    for (const apiTeam of apiTeams) {
      if (apiTeam.strTeamBadge) {
        badgeMap.set(this.normalizeName(apiTeam.strTeam), apiTeam.strTeamBadge);
      }
    }

    return TEAMS_MOCK.map(team => {
      const badge = badgeMap.get(this.normalizeName(team.name));
      return badge ? { ...team, logoUrl: badge } : { ...team };
    });
  }

  private normalizeName(name: string): string {
    return name.trim().toLowerCase();
  }
}
