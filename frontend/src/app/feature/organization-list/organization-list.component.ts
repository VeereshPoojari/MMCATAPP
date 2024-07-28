import { Component } from '@angular/core';
import { EntityComponent } from '../../core/entity.component';
import { UntilDestroy } from '@ngneat/until-destroy';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { StatusHelper } from '../../core/status.helper';
import { Observable } from 'rxjs';
import { OrganizationService } from './organization.service';
import { ListRequest } from '../../core/list-request.model';
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
    displayedColumns: string[] = ['checkbox', 'name','isMainBranch', 'email','activated', 'actions'];
    constructor(
      protected httpClient: HttpClient, statusHelper: StatusHelper,private organizationService:OrganizationService
    ) {
      super(statusHelper); // Call the constructor of the abstract class
      // this.organizationService.getAllOrganization().subscribe(response =>{
      //   console.log(response);
      // })
    }
  
    getAll(listRequest:ListRequest): Observable<HttpResponse<any>> {
      return this.organizationService.getAllOrganizationList(listRequest);
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
  
