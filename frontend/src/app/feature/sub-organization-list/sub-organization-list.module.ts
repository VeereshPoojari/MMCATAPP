import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubOrganizationListRoutingModule } from './sub-organization-list-routing.module';
import { SubOrganizationListComponent } from './sub-organization-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [SubOrganizationListComponent],
  imports: [
    CommonModule,
    SubOrganizationListRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatInputModule,
    MatMenuModule,MatIconModule,MatButtonModule
  ]
})
export class SubOrganizationListModule { }
