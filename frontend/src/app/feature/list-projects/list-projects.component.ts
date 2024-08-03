import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EntityComponent } from '../../core/entity.component';
import { StatusHelper } from '../../core/status.helper';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ProjectModels } from './models/project.model';
import { ProjectService } from './project.service';
import { ListRequest } from '../../core/list-request.model';
import { CreateUpdateProjectsComponent } from './create-update-projects/create-update-projects.component';
import { NavigationExtras, Router } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.scss']
})
export class ListProjectsComponent extends EntityComponent<ProjectModels> {
  organizationId=localStorage.getItem('organizationId');
  displayedColumns: string[] = ['checkbox', 'name', 'user', 'status', 'actions'];
  projectStatusList = [
    { id: 0, name: "New", color: "#FF5733" },
    { id: 1, name: "Not yet started", color: "#FFC300" },
    { id: 2, name: "In-Progress", color: "#DAF7A6" },
    { id: 3, name: "Pending", color: "#C70039" },
    { id: 4, name: "Rejected", color: "#900C3F" },
    { id: 5, name: "Completed", color: "#581845" },
    { id: 6, name: "On Hold", color: "#28B463" },
    { id: 7, name: "Cancelled", color: "#AAB7B8" },
    { id: 8, name: "Approved", color: "#2ECC71" },
    { id: 9, name: "In Review", color: "#3498DB" },
    { id: 10, name: "Archived", color: "#F39C12" },
    { id: 11, name: "Under Development", color: "#D35400" },
    { id: 12, name: "Testing", color: "#E74C3C" },
    { id: 13, name: "Deployment", color: "#9B59B6" },
    { id: 14, name: "Maintenance", color: "#34495E" },
    { id: 15, name: "Bug Fixes", color: "#1ABC9C" }
  ];


  constructor(
    protected httpClient: HttpClient,
    statusHelper: StatusHelper,
    private dialog: MatDialog,
    private projectService: ProjectService,
    private router: Router
  ) {
    super(statusHelper);
  }

  getAll(request: ListRequest): Observable<HttpResponse<any>> {
    return this.projectService.getAllProjectListByORGId(this.organizationId,request);
    // return this.projectService.getAllProjectList(request);
  }

  createProject() {
    this.dialog.open(CreateUpdateProjectsComponent, {
      width: '400px',
      height: '400px',
      panelClass: 'custom-dialog-container'
    }).afterClosed().subscribe(() => {
      this.refreshDatatable();
    });
  }
  getStatusName(statusId: number): string {
    const status = this.projectStatusList.find(s => s.id === statusId);
    return status ? status.name : 'Unknown';
  }
  getStatusColor(statusId: number): string {
    const status = this.projectStatusList.find(s => s.id === statusId);
    return status ? status.color : '#000000'; // Default to black if not found
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

  edit(project: ProjectModels) {
    console.log('Edit user:', project);
    // Implement edit functionality
  }

  deleteProject(project: ProjectModels) {
    console.log('Delete user:', project);
    this.projectService.deleteProjectById(project.id).subscribe(response => {
      console.log(response);
      this.refreshDatatable();
    }, (error => {
      console.log(error);

    }))
    // Implement delete functionality
  }
  automationProgress(project: ProjectModels) {
    const extraNavigation: NavigationExtras = {
      state: {
        id: project.id
      }
    }
    this.router.navigate(['/project/test'], extraNavigation);
  }
}

