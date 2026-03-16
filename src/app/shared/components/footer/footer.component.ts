import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();

  readonly quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/stats', label: 'Statistics' },
    { path: '/newsletter', label: 'Newsletter' }
  ];

  readonly statCategories = [
    { path: '/stats', label: 'Top Scorers' },
    { path: '/stats', label: 'Tournament History' },
    { path: '/stats', label: 'Team Rankings' }
  ];
}
