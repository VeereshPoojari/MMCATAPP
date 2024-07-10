import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationListRoutingModule } from './organization-list-routing.module';
import { OrganizationListComponent } from './organization-list.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [OrganizationListComponent],
  imports: [
    CommonModule,
    OrganizationListRoutingModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatInputModule,
    MatMenuModule,MatIconModule,
  ]
})
export class OrganizationListModule { }
