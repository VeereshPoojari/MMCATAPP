// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isAuthenticated: boolean = false;

    constructor() {
        // Initialize authentication status (for demo purposes)
        this.isAuthenticated = !!localStorage.getItem('token'); // Check if token exists in localStorage
    }

    login(username: string, password: string): void {
        // Simulate login process (e.g., calling an API)
        // In a real application, you would call an authentication service or API
        // and store the token in localStorage or a secure storage mechanism.

        // Example: Assuming successful login sets a token in localStorage
        localStorage.setItem('token', 'your_auth_token_here');
        this.isAuthenticated = true;
    }

    logout(): void {
        // Simulate logout process (clearing token)
        // In a real application, you would clear the token from localStorage
        localStorage.removeItem('token');
        this.isAuthenticated = false;
    }

    isAuthenticatedUser(): boolean {
        // Check if the user is authenticated based on the token presence
        return this.isAuthenticated;
    }
}
