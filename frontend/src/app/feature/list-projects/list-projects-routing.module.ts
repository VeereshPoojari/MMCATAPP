import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProjectsComponent } from './list-projects.component';
import { AutomationProgressListComponent } from './automation-progress-list/automation-progress-list.component';

const routes: Routes = [
  {path:'',component:ListProjectsComponent},
  {path:'test',component:AutomationProgressListComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListProjectsRoutingModule { }
