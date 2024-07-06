import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubOrganizationListRoutingModule } from './sub-organization-list-routing.module';
import { SubOrganizationListComponent } from './sub-organization-list.component';


@NgModule({
  declarations: [SubOrganizationListComponent],
  imports: [
    CommonModule,
    SubOrganizationListRoutingModule
  ]
})
export class SubOrganizationListModule { }
