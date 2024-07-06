import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationListRoutingModule } from './organization-list-routing.module';
import { OrganizationListComponent } from './organization-list.component';


@NgModule({
  declarations: [OrganizationListComponent],
  imports: [
    CommonModule,
    OrganizationListRoutingModule
  ]
})
export class OrganizationListModule { }
