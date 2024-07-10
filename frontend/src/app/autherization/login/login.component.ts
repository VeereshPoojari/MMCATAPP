import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
 
  constructor(private formBuilder: FormBuilder,private router:Router) {}

  ngOnInit(): void { 
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(){
    console.log(this.loginForm.value);
    // fetch'http://10.70.1.179:8080/api/authentication/login'
    this.router.navigate(['/dashboard'])
  }

}
