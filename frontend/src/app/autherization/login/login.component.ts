import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit  {
  hide = true;
  loginForm: any;
 
  constructor(private formBuilder: FormBuilder,private router:Router,private authService:AuthService) {}

  ngOnInit(): void { 
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(){
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(response=>{
      console.log(response);
      this.router.navigate(['/dashboard'])
      this.authService.setIdentity(response);
      // this.sessionExpiry.initializeSession.next(true);
    })
    // fetch'http://10.70.1.179:8080/api/authentication/login'
  }

}
