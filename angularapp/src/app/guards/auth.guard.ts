import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router) {
    console.log("inside authguard constructor")
   }
  canActivate(route: ActivatedRouteSnapshot):boolean{
    let role=localStorage.getItem('role');
    let customerURLs :string[] = ['/customerDashboard' , '/customerViewBooking' , '/customerViewResort','/customerViewReview','/addBooking','/addReview'];
    let adminURLS :string[]= ['/adminDashboard','/addResort','/adminViewResort','/adminViewBooking','/adminViewReview'];
    // let currentURL = this.router.getCurrentNavigation().extractedUrl.toString();
    let currentURL = this.router.getCurrentNavigation().extractedUrl.toString().split('?')[0];
    console.log(currentURL);
    // console.log('Role:', role);
    // console.log('Current URL:', currentURL);
      if (!localStorage.getItem('role')) {
        this.router.navigate(["/"]);
        return false;
      }
      else{
       
        if(role=='ADMIN' && adminURLS.includes(currentURL)){
          return true;
        }
        else if (role=='CUSTOMER' && customerURLs.includes(currentURL))
        {
          return true;
        }
        else{
          this.router.navigate(["/"]);
          return false;
        }
      }
  }
 
}