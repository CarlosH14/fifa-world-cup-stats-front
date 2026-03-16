import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StatsService } from '../../core/services/stats.service';
import { Tournament } from '../../shared/models/tournament.model';
import { TopScorer } from '../../shared/models/player.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  latestTournament = signal<Tournament | null>(null);
  topScorerAllTime = signal<TopScorer | null>(null);
  isLoading = signal(true);

  readonly stats = [
    { icon: '🏆', value: '22', label: 'Tournaments', description: 'Since 1930' },
    { icon: '⚽', value: '2548', label: 'Total Goals', description: 'All editions' },
    { icon: '👥', value: '80', label: 'Nations', description: 'Have participated' },
    { icon: '🌟', value: '16', label: 'Record Goals', description: 'By Miroslav Klose' }
  ];

  constructor(private readonly statsService: StatsService) {}

  ngOnInit(): void {
    this.statsService.getTournaments().subscribe(tournaments => {
      this.latestTournament.set(tournaments[0]);
    });

    this.statsService.getTopScorers().subscribe(scorers => {
      this.topScorerAllTime.set(scorers[0]);
      this.isLoading.set(false);
    });
  }
}
