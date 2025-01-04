import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Observable } from "rxjs";
import Swal from "sweetalert2";

@Injectable({
    providedIn:'root'
})

export class CanActivateGuard implements CanActivate {
    constructor(private auth: AuthService, private router:Router) { }
  
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
      if (this.auth.loggedIn) {
        return true;
      } else {
        Swal.fire({
            title:'You Are Not Authorized...Please Login...!',
            icon: 'error'
        })
        this.router.navigate(['/login']);
        // alert("You Are Not Authorized...Please Login...!");
        return false;
      }
    }
}