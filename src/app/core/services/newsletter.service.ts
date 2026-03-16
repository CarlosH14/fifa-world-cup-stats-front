import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface NewsletterSubscription {
  email: string;
  name?: string;
  preferences: string[];
}

export interface NewsletterResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private readonly subscribedEmails = new Set<string>();

  subscribe(subscription: NewsletterSubscription): Observable<NewsletterResponse> {
    if (this.subscribedEmails.has(subscription.email)) {
      return throwError(() => ({
        success: false,
        message: 'This email is already subscribed to our newsletter.'
      })).pipe(delay(800));
    }

    this.subscribedEmails.add(subscription.email);
    return of({
      success: true,
      message: `Successfully subscribed! Welcome ${subscription.name || 'there'}! You'll receive FIFA World Cup stats updates at ${subscription.email}.`
    }).pipe(delay(1200));
  }

  unsubscribe(email: string): Observable<NewsletterResponse> {
    this.subscribedEmails.delete(email);
    return of({
      success: true,
      message: 'Successfully unsubscribed from the newsletter.'
    }).pipe(delay(800));
  }
}
