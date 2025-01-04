import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn:'root'
})

export class ResolveGuard implements Resolve<any>{
    //this gaurd is used to get data first and then redirect to path
    
   constructor(private service: AuthService){}

   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       return this.service.getData().then(a => a);
   }
    
}