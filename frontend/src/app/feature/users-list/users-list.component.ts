import { Component } from '@angular/core'
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EntityComponent } from '../../core/entity.component';
import { StatusHelper } from '../../core/status.helper';
import { UntilDestroy } from '@ngneat/until-destroy';
import { UserService } from './user.service';
import { MatDialog } from '@angular/material/dialog';
import { ListRequest } from '../../core/list-request.model';
import { CreateUpdateEmpleeComponent } from './create-update-emplee/create-update-emplee.component';

export interface User {
  id: number;
  name: string;
  email: string;
  // Add more properties as needed
}
@UntilDestroy()
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent extends EntityComponent<User> {
  organizationId=localStorage.getItem('organizationId');

  displayedColumns: string[] = ['checkbox', 'firstName', 'lastName', 'position', 'department', 'email', 'actions'];
  constructor(
    protected httpClient: HttpClient,
    statusHelper: StatusHelper,
    private dialog: MatDialog,
    private userService: UserService
  ) {
    super(statusHelper);
  }

  getAll(request: ListRequest): Observable<HttpResponse<any>> {
    // return this.userService.getAllEmployeeList(request);
    return this.userService.getAllEmployeeListBYORGID(this.organizationId,request);

  }

  createEmployee() {
    this.dialog.open(CreateUpdateEmpleeComponent, {
      width: '1000px',
      // maxHeight: '1000px',
      data:{},
      panelClass: 'custom-dialog-container'
    }).afterClosed().subscribe(() => {
      this.refreshDatatable();
    });
  }


  mapDate(entity: any) {
    // Implement date mapping logic if needed
  }

  mapStatus(entity: any) {
    // Implement status mapping logic if needed
  }

  mapLabels(entity: any) {
    // Implement label mapping logic if needed
  }

  edit(employee) {
    console.log('Edit employee:', employee);
    // Open the dialog with employee data
    this.dialog.open(CreateUpdateEmpleeComponent, {
      width: '1000px',
      maxHeight: '1000px',
      data: { employee },
      panelClass: 'custom-dialog-container'
    }).afterClosed().subscribe(() => {
      this.refreshDatatable();
    });
  }
  
  delete(employee) {
    console.log('Delete employee:', employee);
    this.userService.deleteEmployeeById(employee.id).subscribe(response => {
      console.log(response);
      this.refreshDatatable();
    }, (error => {
      console.log(error);

    }))
    // Implement delete functionality
  }
}

