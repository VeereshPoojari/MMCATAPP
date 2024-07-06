import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubOrganizationListComponent } from './sub-organization-list.component';

const routes: Routes = [
  {path:'', component:SubOrganizationListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubOrganizationListRoutingModule { }
