import { Injectable } from "@angular/core";
import { CanLoad, Route, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn:'root'
})

export class CanLoadGaurd implements CanLoad{
    constructor(private auth: AuthService){}

    canLoad(route: Route, segments: UrlSegment[]): boolean  {
        if (this.auth.loggedIn) {
            return true;
          } else {
            // Swal.fire({
            //     title:' Not Authorized',
            //     icon: 'error'
            // })
            alert('Not Authorized...!')
            return false;
          }
        
    }
}