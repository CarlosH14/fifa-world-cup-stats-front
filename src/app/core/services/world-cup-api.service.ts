import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {
  SportsDbTeam,
  SportsDbTeamsResponse,
  SportsDbLeague,
  SportsDbLeagueResponse
} from '../models/sports-db.models';

@Injectable({
  providedIn: 'root'
})
export class WorldCupApiService {
  private readonly baseUrl = 'https://www.thesportsdb.com/api/v1/json/3';
  private readonly WORLD_CUP_LEAGUE_ID = '4429';

  constructor(private readonly http: HttpClient) {}

  getTeams(): Observable<SportsDbTeam[]> {
    return this.http
      .get<SportsDbTeamsResponse>(
        `${this.baseUrl}/lookup_all_teams.php?id=${this.WORLD_CUP_LEAGUE_ID}`
      )
      .pipe(
        map(res => res.teams ?? []),
        catchError(() => of([]))
      );
  }

  getLeagueInfo(): Observable<SportsDbLeague | null> {
    return this.http
      .get<SportsDbLeagueResponse>(
        `${this.baseUrl}/lookupleague.php?id=${this.WORLD_CUP_LEAGUE_ID}`
      )
      .pipe(
        map(res => (res.leagues?.[0] ?? null)),
        catchError(() => of(null))
      );
  }
}
