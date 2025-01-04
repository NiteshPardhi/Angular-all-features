import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'ngCrud';
  currentUser = true;
  fullUrl: any;
  loginCrediential = {
    userName: 'nitesh.pardhi',
    password: 'Nitesh@123'
  }

  constructor(private router: Router) {

    localStorage.setItem('loginCrediential', JSON.stringify(this.loginCrediential))

    this.currentUser = true;
    let _fullUrl = this.router.url;
    //console.log(_fullUrl)

    // if(_fullUrl == '/' || _fullUrl == '/login' || _fullUrl == ''){
    //   this.currentUser = false;
    // } else {
    //   this.currentUser = true;
    // }

    // router.events.subscribe((event: any) => {
    //   if( event instanceof NavigationEnd) {
    //     this.fullUrl = event.url;
    //     //console.log(this.fullUrl)
    //     if(_fullUrl == '/' && this.fullUrl == '/login'){
    //       this.currentUser = false;
    //     } else if(this.fullUrl != '/login'){
    //       this.currentUser = true;
    //     }
    //   }
    // })
    
  }

  ngOnInit(): void {
    
  }

}
