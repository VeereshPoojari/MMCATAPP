import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EntityComponent } from '../../core/entity.component';
import { StatusHelper } from '../../core/status.helper';
import { UntilDestroy } from '@ngneat/until-destroy';

export interface SubBranch {
  id: number;
  name: string;
  email: string;
  // Add more properties as needed
}
@UntilDestroy()
@Component({
  selector: 'app-sub-organization-list',
  // standalone: true,
  // imports: [],
  templateUrl: './sub-organization-list.component.html',
  styleUrl: './sub-organization-list.component.scss'
})
export class SubOrganizationListComponent extends EntityComponent<SubBranch> {
  displayedColumns: string[] = ['checkbox', 'name', 'email', 'actions'];

  constructor(
    protected httpClient: HttpClient, statusHelper: StatusHelper
  ) {
    super(statusHelper); // Call the constructor of the abstract class
  }

  getAll(request: any): Observable<HttpResponse<any>> {
    // Replace with your actual API endpoint to fetch users
    const url = 'https://api.example.com/users';
    return this.httpClient.get<any>(url, { observe: 'response' });
  }

  mapDate(entity: SubBranch) {
    // Implement date mapping logic if needed
  }

  mapStatus(entity: SubBranch) {
    // Implement status mapping logic if needed
  }

  mapLabels(entity: SubBranch) {
    // Implement label mapping logic if needed
  }

  edit(user: SubBranch) {
    console.log('Edit user:', user);
    // Implement edit functionality
  }

  delete(user: SubBranch) {
    console.log('Delete user:', user);
    // Implement delete functionality
  }
}