import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StatsService } from '../../core/services/stats.service';
import { TournamentMatches, KnockoutRound, Match } from '../../shared/models/match.model';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.scss'
})
export class MatchesComponent implements OnInit {
  tournaments = signal<TournamentMatches[]>([]);
  selectedYear = signal<number>(2022);
  activeView = signal<'groups' | 'knockout'>('knockout');
  isLoading = signal(true);

  selectedTournament = computed(() => {
    return this.tournaments().find(t => t.year === this.selectedYear()) ?? null;
  });

  knockoutRounds = computed(() => {
    const t = this.selectedTournament();
    if (!t) return [];
    return t.knockoutRounds.filter(r => r.name !== 'Third place');
  });

  thirdPlaceMatch = computed(() => {
    const t = this.selectedTournament();
    if (!t) return null;
    const round = t.knockoutRounds.find(r => r.name === 'Third place');
    return round?.matches[0] ?? null;
  });

  formatLabel = computed(() => {
    const t = this.selectedTournament();
    if (!t) return '';
    const labels: Record<string, string> = {
      'modern-32': '32 Teams — Groups + Knockout',
      'modern-24': '24 Teams — Groups + Knockout',
      'second-group-24': '24 Teams — Two Group Stages + Knockout',
      'second-group-16': '16 Teams — Two Group Stages + Final',
      'classic-16': '16 Teams — Groups + Knockout'
    };
    return labels[t.format] || t.format;
  });

  constructor(private readonly statsService: StatsService) {}

  ngOnInit(): void {
    this.statsService.getTournamentMatches().subscribe(data => {
      this.tournaments.set(data);
      this.isLoading.set(false);
    });
  }

  selectYear(year: number): void {
    this.selectedYear.set(year);
    this.activeView.set('knockout');
  }

  setView(view: 'groups' | 'knockout'): void {
    this.activeView.set(view);
  }

  getMatchWinner(match: Match): string {
    if (match.penalties) {
      const [p1, p2] = match.penalties.split('-').map(Number);
      return p1 > p2 ? match.team1 : match.team2;
    }
    if (match.score1 > match.score2) return match.team1;
    if (match.score2 > match.score1) return match.team2;
    return '';
  }

  isWinner(match: Match, team: 'team1' | 'team2'): boolean {
    const winner = this.getMatchWinner(match);
    return winner === match[team];
  }

  formatDate(dateStr: string): string {
    const date = new Date(dateStr + 'T12:00:00');
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  getRoundColumnClass(roundName: string): string {
    const map: Record<string, string> = {
      'Round of 16': 'bracket__round--r16',
      'Quarter-finals': 'bracket__round--qf',
      'Semi-finals': 'bracket__round--sf',
      'Final': 'bracket__round--final'
    };
    return map[roundName] || '';
  }
}
