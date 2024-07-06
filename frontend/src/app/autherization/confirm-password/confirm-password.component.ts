import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-password',
  // standalone: true,
  // imports: [],
  templateUrl: './confirm-password.component.html',
  styleUrl: './confirm-password.component.scss'
})
export class ConfirmPasswordComponent {
  hide = true;
  hideC = true;
  confirmForm: any;
 
  constructor(private formBuilder: FormBuilder,private router:Router) {}

  ngOnInit(): void { 
    this.confirmForm = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  confirmPassword(){
    console.log(this.confirmForm.value);
    this.router.navigate(['/login'])
  }
}
