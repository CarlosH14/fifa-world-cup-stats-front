import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'stats',
    loadComponent: () => import('./features/stats/stats.component').then(m => m.StatsComponent)
  },
  {
    path: 'newsletter',
    loadComponent: () => import('./features/newsletter/newsletter.component').then(m => m.NewsletterComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
