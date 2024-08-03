import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    console.log('AuthGuard#canActivate called');
    if (this.authService.isAuthenticated()) {
      console.log('AuthGuard: User is authenticated');
      this.authService.fetchMyProfile().pipe(
        map(resp => {
          console.log('Profile fetched:', resp);
          localStorage.setItem('userProfile', resp.body.data.organization.organizationName);
          localStorage.setItem('organizationId', resp.body.data.organization.id);
          return true;
        }),
        catchError(error => {
          console.log('Error fetching profile:', error);
          this.router.navigate(['/login']);
          return of(false);
        })
      ).subscribe();
      return true; // Return true initially to allow the route activation
    } else {
      console.log('AuthGuard: User is not authenticated');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
