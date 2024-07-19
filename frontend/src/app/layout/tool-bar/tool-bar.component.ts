import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { AuthService } from '../../autherization/auth/auth.service';
@Component({
  selector: 'app-tool-bar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent {
  currentUserData = localStorage.getItem('userProfile');
  constructor(private router: Router, private authService: AuthService) {
    console.log(this.currentUserData);

  }
  @Output() toggleSideNavEvent = new EventEmitter<void>();

  onToggleSideNav() {
    this.toggleSideNavEvent.emit();
  }
  updateProfile() {
    this.router.navigate(['/login'])
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login'])
  }
}
