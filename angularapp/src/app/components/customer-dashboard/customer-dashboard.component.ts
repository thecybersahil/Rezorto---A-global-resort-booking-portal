import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Resort } from 'src/app/models/resort.model';
import { AuthService } from 'src/app/services/auth.service';
import { ResortService } from 'src/app/services/resort.service';
import Swal from 'sweetalert2';
 
@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
 
  
  resorts:Resort[]=[];
 
  username: string=null;
 
  constructor(private authService: AuthService, private router: Router,private service:ResortService) { }
 
  ngOnInit() {
   this.username=localStorage.getItem('username');
   this.getAllResorts();
  }
  imagesUrl:any[] = [
    "../../../assets/images/jw-marriott-hotel-mumbai.jpg",
    "../../../assets/images/lalit_hotel.jpg",
    "../../../assets/images/Leela_Mumbai.jpg",
    "../../../assets/images/Novotel_Juhu.jpg",
    "../../../assets/images/President_Colaba.jpg",
    "../../../assets/images/radisson_blu.jpg",
    "../../../assets/images/jw-marriott-hotel-mumbai.jpg",
    "../../../assets/images/jw-marriott-hotel-mumbai.jpg",
    "../../../assets/images/jw-marriott-hotel-mumbai.jpg",
  ];
  getAllResorts()
  {
    this.service.getAllResorts().subscribe(data=>{
      this.resorts=data;
      console.log(data);
    })
    console.log(this.resorts);
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
           title: "Sad to see you go! Visit Again!",
           icon: "success"
           });
         }
       });
    
     }
 
}