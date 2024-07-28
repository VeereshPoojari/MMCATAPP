import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsListRoutingModule } from './tickets-list-routing.module';
import { TicketsListComponent } from './tickets-list.component';


@NgModule({
  declarations: [TicketsListComponent],
  imports: [
    CommonModule,
    TicketsListRoutingModule
  ]
})
export class TicketsListModule { }
