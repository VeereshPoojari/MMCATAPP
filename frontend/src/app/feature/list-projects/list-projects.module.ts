import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListProjectsRoutingModule } from './list-projects-routing.module';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ListProjectsComponent } from './list-projects.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { CreateUpdateProjectsComponent } from './create-update-projects/create-update-projects.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ListProjectsComponent,CreateUpdateProjectsComponent],
  imports: [
    CommonModule,
    ListProjectsRoutingModule,ReactiveFormsModule,FormsModule,
    MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule,
    MatButtonModule,MatDialogModule,MatIconModule,MatCheckboxModule,HttpClientModule
  ]
})
export class ListProjectsModule { }
