import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StatsService } from '../../core/services/stats.service';
import { TopScorer } from '../../shared/models/player.model';
import { Team } from '../../shared/models/team.model';
import { Tournament, StatCategory, StatsFilter } from '../../shared/models/tournament.model';
import { NATIONALITIES_MOCK, CONFEDERATIONS_MOCK } from '../../mocks';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent implements OnInit {
  topScorers = signal<TopScorer[]>([]);
  tournaments = signal<Tournament[]>([]);
  teams = signal<Team[]>([]);
  isLoading = signal(true);

  filter = signal<StatsFilter>({
    category: 'top-scorers',
    searchTerm: '',
    sortBy: 'goals',
    sortDirection: 'desc',
    nationality: 'All',
    minGoals: 0
  });

  readonly categories: { id: StatCategory; label: string; icon: string }[] = [
    { id: 'top-scorers', label: 'Top Scorers', icon: '⚽' },
    { id: 'tournaments', label: 'Tournament History', icon: '🏆' },
    { id: 'teams', label: 'Team Stats', icon: '🌍' }
  ];

  readonly nationalities = NATIONALITIES_MOCK;
  readonly confederations = CONFEDERATIONS_MOCK;

  filteredScorers = computed(() => {
    let data = [...this.topScorers()];
    const f = this.filter();

    if (f.nationality && f.nationality !== 'All') {
      data = data.filter(s => s.nationality === f.nationality);
    }

    if (f.searchTerm) {
      const term = f.searchTerm.toLowerCase();
      data = data.filter(s =>
        s.name.toLowerCase().includes(term) ||
        s.nationality.toLowerCase().includes(term)
      );
    }

    if (f.minGoals && f.minGoals > 0) {
      data = data.filter(s => s.goals >= f.minGoals!);
    }

    data.sort((a, b) => {
      const direction = f.sortDirection === 'asc' ? 1 : -1;
      if (f.sortBy === 'goals') return (b.goals - a.goals) * -direction;
      if (f.sortBy === 'appearances') return (b.appearances - a.appearances) * -direction;
      if (f.sortBy === 'name') return a.name.localeCompare(b.name) * direction;
      return 0;
    });

    return data;
  });

  filteredTournaments = computed(() => {
    let data = [...this.tournaments()];
    const f = this.filter();

    if (f.searchTerm) {
      const term = f.searchTerm.toLowerCase();
      data = data.filter(t =>
        t.host.toLowerCase().includes(term) ||
        t.champion.toLowerCase().includes(term) ||
        t.year.toString().includes(term)
      );
    }

    data.sort((a, b) => {
      const direction = f.sortDirection === 'asc' ? 1 : -1;
      if (f.sortBy === 'year') return (b.year - a.year) * -direction;
      if (f.sortBy === 'goals') return (b.totalGoals - a.totalGoals) * -direction;
      if (f.sortBy === 'attendance') return (b.attendance - a.attendance) * -direction;
      return 0;
    });

    return data;
  });

  filteredTeams = computed(() => {
    let data = [...this.teams()];
    const f = this.filter();

    if (f.nationality && f.nationality !== 'All') {
      data = data.filter(t => t.confederation === f.nationality);
    }

    if (f.searchTerm) {
      const term = f.searchTerm.toLowerCase();
      data = data.filter(t => t.name.toLowerCase().includes(term));
    }

    data.sort((a, b) => {
      const direction = f.sortDirection === 'asc' ? 1 : -1;
      if (f.sortBy === 'titles') return (b.titles - a.titles) * -direction;
      if (f.sortBy === 'goals') return (b.goalsScored - a.goalsScored) * -direction;
      if (f.sortBy === 'appearances') return (b.appearances - a.appearances) * -direction;
      if (f.sortBy === 'wins') return (b.wins - a.wins) * -direction;
      return 0;
    });

    return data;
  });

  constructor(private readonly statsService: StatsService) {}

  ngOnInit(): void {
    this.statsService.getTopScorers().subscribe(data => {
      this.topScorers.set(data);
    });
    this.statsService.getTournaments().subscribe(data => {
      this.tournaments.set(data);
    });
    this.statsService.getTeams().subscribe(data => {
      this.teams.set(data);
      this.isLoading.set(false);
    });
  }

  setCategory(category: StatCategory): void {
    this.filter.update(f => ({
      ...f,
      category,
      searchTerm: '',
      sortBy: this.getDefaultSortBy(category),
      sortDirection: 'desc',
      nationality: 'All',
      minGoals: 0
    }));
  }

  updateSearch(term: string): void {
    this.filter.update(f => ({ ...f, searchTerm: term }));
  }

  updateSort(sortBy: string): void {
    this.filter.update(f => ({
      ...f,
      sortBy,
      sortDirection: f.sortBy === sortBy && f.sortDirection === 'desc' ? 'asc' : 'desc'
    }));
  }

  updateNationality(nationality: string): void {
    this.filter.update(f => ({ ...f, nationality }));
  }

  updateMinGoals(minGoals: number): void {
    this.filter.update(f => ({ ...f, minGoals }));
  }

  private getDefaultSortBy(category: StatCategory): string {
    const defaults: Record<StatCategory, string> = {
      'top-scorers': 'goals',
      'tournaments': 'year',
      'teams': 'titles'
    };
    return defaults[category];
  }

  getSortIcon(field: string): string {
    const f = this.filter();
    if (f.sortBy !== field) return '↕';
    return f.sortDirection === 'asc' ? '↑' : '↓';
  }

  formatAttendance(value: number): string {
    return new Intl.NumberFormat('en-US').format(value);
  }
}
