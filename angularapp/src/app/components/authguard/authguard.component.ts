import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authguard',
  templateUrl: './authguard.component.html',
  styleUrls: ['./authguard.component.css']
})
export class AuthguardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}



// // import { CanActivateFn } from '@angular/router';

// // export const authGuard: CanActivateFn = (route, state) => {
// //   return true;
// // };
// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { AuthService } from 'src/app/services/auth.service';// Replace with your authentication service

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     // Check if the user is logged in
//     if (!this.authService.login()) {
//       console.log("log in");
      
//       // If not logged in, redirect to the login page
//       this.router.navigate(['/login']);
//       return false;
//     }

//     // Check if the user has the 'isAdmin' or 'isOrganizer' role
//     if (route.url[0].path === 'admin' && !this.authService.isAdmin()) {
//       // If not an admin, redirect to a forbidden page or show an error
//       this.router.navigate(['/forbidden']);
//       return false;
//     }

//     if (route.url[0].path === 'organizer' && !this.authService.isOrganizer()) {
//       // If not an organizer, redirect to a forbidden page or show an error
//       this.router.navigate(['/forbidden']);
//       return false;
//     }

//     // If the user is logged in and has the appropriate role, allow access
//     return true;
//   }
// }
