import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CreateUpdateProjectsComponent } from './create-update-projects/create-update-projects.component';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EntityComponent } from '../../core/entity.component';
import { StatusHelper } from '../../core/status.helper';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ProjectModels } from './models/project.model';

@UntilDestroy()
@Component({
  selector: 'app-list-projects',
  // standalone: true,
  // imports: [],
  templateUrl: './list-projects.component.html',
  styleUrl: './list-projects.component.scss'
})
export class ListProjectsComponent extends EntityComponent<ProjectModels> {
  displayedColumns: string[] = ['checkbox', 'name', 'email', 'actions'];

  constructor(
    protected httpClient: HttpClient, statusHelper: StatusHelper, private dialog: MatDialog
  ) {
    super(statusHelper); // Call the constructor of the abstract class
  }

  getAll(request: any): Observable<HttpResponse<any>> {
    // Replace with your actual API endpoint to fetch users
    const url = 'https://api.example.com/users';
    return this.httpClient.get<any>(url, { observe: 'response' });
  }

  createProject() {
    this.dialog.open(CreateUpdateProjectsComponent, {
      width: '90vw',
      height: '400px',
      panelClass: 'custom-dialog-container'
    });
  }
  
  mapDate(entity: ProjectModels) {
    // Implement date mapping logic if needed
  }

  mapStatus(entity: ProjectModels) {
    // Implement status mapping logic if needed
  }

  mapLabels(entity: ProjectModels) {
    // Implement label mapping logic if needed
  }

  edit(user: ProjectModels) {
    console.log('Edit user:', user);
    // Implement edit functionality
  }

  delete(user: ProjectModels) {
    console.log('Delete user:', user);
    // Implement delete functionality
  }
}
