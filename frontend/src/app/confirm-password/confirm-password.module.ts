import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmPasswordRoutingModule } from './confirm-password-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ConfirmPasswordComponent } from './confirm-password.component';


@NgModule({
  declarations: [ConfirmPasswordComponent],
  imports: [
    CommonModule,
    ConfirmPasswordRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ConfirmPasswordModule { }
