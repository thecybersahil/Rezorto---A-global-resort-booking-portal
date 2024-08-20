import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  

  username:string=null;

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    this.username=localStorage.getItem('username');

  }

  logout(){
   
    Swal.fire({
         title: "Are you sure you want to logout?",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, Logout!"
       }).then((result) => {
         if (result.isConfirmed) {
           localStorage.clear();
           this.router.navigate(['/login']);
           Swal.fire({
           title: "Loggedout Successfully!",
           icon: "success"
           });
         }
       });
    
     }

}
