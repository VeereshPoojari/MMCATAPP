import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  // standalone: true,
  // imports: [],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  hide = true;
  hidep = true;
  registerForm: any;
 
  constructor(private formBuilder: FormBuilder,private router:Router) {}

  ngOnInit(): void { 
    this.registerForm = this.formBuilder.group({
      organistionName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNo: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  register(){
    console.log(this.registerForm.value);
    this.router.navigate(['/login'])
  }
}
