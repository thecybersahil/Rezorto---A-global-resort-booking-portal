import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Resort } from 'src/app/models/resort.model';
import { Review } from 'src/app/models/review.model';
import { ResortService } from 'src/app/services/resort.service';
import Swal from 'sweetalert2';
 
@Component({
  selector: 'app-customer-view-resort',
  templateUrl: './customer-view-resort.component.html',
  styleUrls: ['./customer-view-resort.component.css']
})
export class CustomerViewResortComponent implements OnInit {
  
  username:string=null;
  resorts:Resort[]=[];
  
  ratings:Review[]=[];
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
 
  constructor(private service:ResortService, private router: Router) { }
 
  ngOnInit(): void {
    this.username=localStorage.getItem('username');
    this.getAllResorts();
    this.fetchResortsAverage();
  }
  getAllResorts()
  {
    this.service.getAllResorts().subscribe(data=>{
      this.resorts=data;
      console.log(data);
    })
    console.log(this.resorts);
  }
 
  fetchResortsAverage()
  {
    let reviews=[];
    this.service.fetchResortsAverage().subscribe(data=>{
      data.forEach(([resortName, rating]) => {
        reviews.push({subject : [resortName] , rating : [rating]});
    });
      this.ratings = reviews;
      console.log(this.ratings);
    })
  }
 
  getResortRating(resortName:string):any
  {
    console.log(this.ratings);
   
    let rating:any = this.ratings.find(rating=>rating.subject == resortName)
    if (rating) {
      return rating?.rating;
    } else {
      return 'No rating'
    }
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