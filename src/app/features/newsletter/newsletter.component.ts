import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsletterService } from '../../core/services/newsletter.service';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss'
})
export class NewsletterComponent {
  formStatus = signal<FormStatus>('idle');
  statusMessage = signal('');

  readonly preferenceOptions = [
    { value: 'top-scorers', label: '⚽ Top Scorers Updates' },
    { value: 'tournament-news', label: '🏆 Tournament News' },
    { value: 'team-stats', label: '🌍 Team Statistics' },
    { value: 'player-stats', label: '🌟 Player Statistics' },
    { value: 'historical', label: '📜 Historical Data' },
    { value: 'breaking-news', label: '🚨 Breaking News' }
  ];

  subscribeForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly newsletterService: NewsletterService
  ) {
    this.subscribeForm = this.fb.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      preferences: this.fb.group(
        Object.fromEntries(this.preferenceOptions.map(p => [p.value, false]))
      )
    });
  }

  get emailControl() {
    return this.subscribeForm.get('email');
  }

  get nameControl() {
    return this.subscribeForm.get('name');
  }

  isPreferenceSelected(value: string): boolean {
    return !!this.subscribeForm.get('preferences')?.get(value)?.value;
  }

  togglePreference(value: string): void {
    const control = this.subscribeForm.get('preferences')?.get(value);
    if (control) {
      control.setValue(!control.value);
    }
  }

  getSelectedPreferences(): string[] {
    const prefs = this.subscribeForm.get('preferences')?.value || {};
    return Object.entries(prefs)
      .filter(([, selected]) => selected)
      .map(([key]) => key);
  }

  onSubmit(): void {
    if (this.subscribeForm.invalid) {
      this.subscribeForm.markAllAsTouched();
      return;
    }

    this.formStatus.set('loading');
    const selectedPrefs = this.getSelectedPreferences();

    this.newsletterService.subscribe({
      email: this.emailControl?.value,
      name: this.nameControl?.value || undefined,
      preferences: selectedPrefs.length > 0 ? selectedPrefs : ['all']
    }).subscribe({
      next: (response) => {
        this.formStatus.set('success');
        this.statusMessage.set(response.message);
        this.subscribeForm.reset();
      },
      error: (error) => {
        this.formStatus.set('error');
        this.statusMessage.set(error.message);
      }
    });
  }

  resetForm(): void {
    this.formStatus.set('idle');
    this.statusMessage.set('');
    this.subscribeForm.reset();
  }
}
