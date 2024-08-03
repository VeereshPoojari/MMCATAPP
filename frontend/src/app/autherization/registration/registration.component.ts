import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

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
 
  constructor(private formBuilder: FormBuilder,private router:Router,private registerService:RegisterService) {}

  ngOnInit(): void { 
    this.registerForm = this.formBuilder.group({
      organizationName: ['', Validators.required],
      branchName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', Validators.required],
      country: ['', Validators.required],
      webUrl: ['', Validators.required],
      // personal details
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  register(){
    console.log(this.registerForm.value);
    const request=this.registerForm.value;
    this.registerService.createOrganization(request).subscribe(response=>{
      console.log("AAAA "+response);
      this.router.navigate(['/login'])
    })
  }
}
