import { Component } from '@angular/core';
import { ProjectModels } from '../models/project.model';
import { EntityComponent } from '../../../core/entity.component';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { StatusHelper } from '../../../core/status.helper';
import { MatDialog } from '@angular/material/dialog';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { ListRequest } from '../../../core/list-request.model';
import { Observable } from 'rxjs';
import { CreateUpdateProjectsComponent } from '../create-update-projects/create-update-projects.component';

@Component({
  selector: 'app-automation-progress-list',
  // standalone: true,
  // imports: [],
  templateUrl: './automation-progress-list.component.html',
  styleUrl: './automation-progress-list.component.scss'
})
export class AutomationProgressListComponent extends EntityComponent<ProjectModels> {
  displayedColumns: string[] = ['checkbox', 'name','totalTestCases','totalPassedCount','totalFailedCount','totalBreakedCount', 'status', 'actions'];


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
    return this.projectService.getAllTestingList(request);
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

  deleteTestReport(project: ProjectModels) {
    console.log('Delete user:', project);
    this.projectService.deleteTestById(project.id).subscribe(response => {
      console.log(response);
      this.refreshDatatable();
    }, (error => {
      console.log(error);

    }))
    // Implement delete functionality
  }
  runAutomation() {
    this.projectService.runAndCreateTest().subscribe(response => {
      console.log(response);
      this.refreshDatatable();
    }, (error => {
      console.log(error);

    }))
  }
}

