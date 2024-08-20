import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from 'src/app/models/review.model';
import { ResortService } from 'src/app/services/resort.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-view-review',
  templateUrl: './admin-view-review.component.html',
  styleUrls: ['./admin-view-review.component.css']
})
export class AdminViewReviewComponent implements OnInit {

  username:string=null;
  reviews:Review[]=[];

  constructor(private service:ResortService, private router: Router) { }

  ngOnInit(): void {
    this.username=localStorage.getItem('username');
    this.getAllReviews();
  }

  public getAllReviews(){
  return this.service.getAllReviews().subscribe(data=>
    this.reviews=data,
    );
  }

  public formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
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
