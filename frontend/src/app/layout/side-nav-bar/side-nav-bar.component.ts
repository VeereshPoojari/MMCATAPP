import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MediaMatcher } from '@angular/cdk/layout';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationItem, NavigationService } from '../../core/navigation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-side-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule, MatButtonModule,
     MatIconModule, MatSidenavModule, MatListModule,RouterLinkActive,RouterLink],
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent {
  @ViewChild('snav') sidenav: MatSidenav;
  navItems: NavigationItem[] = [];
  mobileQuery: MediaQueryList;
  private navItemsSubscription: Subscription;

  constructor(
    private navigationService: NavigationService,
    private media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  ngOnInit() {
    this.loadNavigationItems();
  }

  ngOnDestroy() {
    if (this.navItemsSubscription) {
      this.navItemsSubscription.unsubscribe();
    }
  }

  loadNavigationItems() {
    this.navItemsSubscription = this.navigationService.items$.subscribe(items => {
      this.navItems = items;
    });
  }

  toggle() {
    this.sidenav.toggle();
  }
}