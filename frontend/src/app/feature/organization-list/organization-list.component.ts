import { Component } from '@angular/core';
import { EntityComponent } from '../../core/entity.component';
import { UntilDestroy } from '@ngneat/until-destroy';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { StatusHelper } from '../../core/status.helper';
import { Observable } from 'rxjs';
export interface Organization {
  id: number;
  name: string;
  email: string;
  // Add more properties as needed
}
@UntilDestroy()
@Component({
  selector: 'app-organization-list',
  // standalone: true,
  // imports: [],
  templateUrl: './organization-list.component.html',
  styleUrl: './organization-list.component.scss'
})
export class OrganizationListComponent extends EntityComponent<Organization> {
    displayedColumns: string[] = ['checkbox', 'name', 'email', 'actions'];
  
    constructor(
      protected httpClient: HttpClient, statusHelper: StatusHelper
    ) {
      super(statusHelper); // Call the constructor of the abstract class
    }
  
    getAll(request: any): Observable<HttpResponse<any>> {
      // Replace with your actual API endpoint to fetch Organizations
      const url = 'https://api.example.com/Organizations';
      return this.httpClient.get<any>(url, { observe: 'response' });
    }
  
    mapDate(entity: Organization) {
      // Implement date mapping logic if needed
    }
  
    mapStatus(entity: Organization) {
      // Implement status mapping logic if needed
    }
  
    mapLabels(entity: Organization) {
      // Implement label mapping logic if needed
    }
  
    edit(user: Organization) {
      console.log('Edit user:', user);
      // Implement edit functionality
    }
  
    delete(user: Organization) {
      console.log('Delete user:', user);
      // Implement delete functionality
    }
  }
  
