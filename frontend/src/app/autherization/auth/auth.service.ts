import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private readonly SESSION_EXPIRATION_KEY = 'sessionExpiration';
  
  constructor(private router: Router) {}

  isAuthenticatedUser(): boolean {
    // Implement your logic to check if the user is authenticated
    const token = localStorage.getItem('authToken'); // Example check for token
    return token !== null;
  }

  isSessionExpired(): boolean {
    // Implement your logic to check if the session has expired
    const expiration = localStorage.getItem(this.SESSION_EXPIRATION_KEY);
    if (expiration) {
      const expirationDate = new Date(expiration);
      return expirationDate < new Date();
    }
    return true; // Default to expired if no expiration is set
  }

  logout(): void {
    // Implement your logout logic
    localStorage.removeItem('authToken');
    localStorage.removeItem(this.SESSION_EXPIRATION_KEY);
    this.router.navigate(['/login']);
  }

  setSession(expirationDuration: number): void {
    // Set session expiration time
    const expirationDate = new Date(new Date().getTime() + expirationDuration);
    localStorage.setItem(this.SESSION_EXPIRATION_KEY, expirationDate.toISOString());
  }
}
