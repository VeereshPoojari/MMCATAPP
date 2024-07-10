import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInspector implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticatedUser() && !this.authService.isSessionExpired()) {
      return true;
    } else {
      this.authService.logout(); // Optionally clear any session data
      this.router.navigate(['/login']); // Redirect to login page if not authenticated or session expired
      return false;
    }
  }
}
