import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  _subject = new BehaviorSubject([]);
  loggedIn: boolean = false;
  
  constructor(private router: Router) { 
    
    this.user = JSON.parse(localStorage.getItem('loginCrediential') || '{}');
  }

  onLogin(loginForm:{userName:string, password:string}){
    // console.log(this.user);
    //this.loggedIn = true;
    if(loginForm.userName != this.user.userName || loginForm.password != this.user.password){
      alert('Login Failed....Wrong Crediential..?');
    } else {
      // this.loggedIn = true;
      alert('Login Successfull....!');
      this.router.navigate(['/home']);
    }

  }

  onLogout(){
    localStorage.removeItem('loginCrediential');
    this.router.navigate(['/login']);

  }

  getData(){
    const list = new Promise((resolve, reject) => {
      setTimeout(()=> {
        resolve({details: 'Hello Nitesh'})
      }, 1000)
    })
    return list;
  }

}
