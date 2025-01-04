import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    userName: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  });

  loginData: any;

  loginCrediential: any = {
    userName: 'nitesh.pardhi',
    password: 'Nitesh@123',
  };

  constructor(private authService: AuthService, private router: Router) {
    localStorage.setItem('loginCrediential',JSON.stringify(this.loginCrediential));
  }

  ngOnInit(): void {}

  // submitForm(){
  //   this.loginData = this.loginForm.value;
  //   console.log(this.loginData);

  //   if(!this.loginForm.valid){
  //     return;
  //   }
  //   this.authService.onLogin(this.loginData);

  // }

  onSubmit() {
    this.loginData = this.loginForm.value;
    console.log(this.loginData);

    // if (!this.loginForm.valid) {
    //   return;
    // }
    this.authService.onLogin(this.loginData);
  }
}
