// navigation.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface NavigationItem {
  label: string;
  route: string;
  icon: string; // Assuming icon is a string type for material icon names
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private readonly _items: BehaviorSubject<NavigationItem[]> = new BehaviorSubject<NavigationItem[]>([]);

  get items$(): Observable<NavigationItem[]> {
    return this._items.asObservable();
  }

  constructor() {
    this.loadNavigation();
  }

  loadNavigation(): void {
    // Simulated async loading
    setTimeout(() => {
      this._items.next([
        { label: 'Dashboard', route: '/dashboard', icon: 'dashboard' },
        { label: 'Users', route: '/users', icon: 'person' },
        { label: 'Organization', route: '/organization', icon: 'business' },
        { label: 'Branches', route: '/sub-branch', icon: 'location_city' },
        { label: 'Projects', route: '/project', icon: 'work' },
        { label: 'Tickets', route: '/tickets', icon: 'work' },
        { label: 'Settings', route: '/settings', icon: 'settings' }
        // Add more items as needed
      ]);
    }, 1000); // Simulating delay
  }
}
