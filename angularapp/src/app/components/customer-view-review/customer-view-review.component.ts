import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from 'src/app/models/review.model';
import { ResortService } from 'src/app/services/resort.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-view-review',
  templateUrl: './customer-view-review.component.html',
  styleUrls: ['./customer-view-review.component.css']
})
export class CustomerViewReviewComponent implements OnInit {
  userId: number;

  reviews: Review[] = [];
  username:string=null;
  // date:number = Date.now();
  constructor(private service: ResortService, private router:Router) { }

  ngOnInit(): void {
    this.username=localStorage.getItem('username');
    this.userId = Number(localStorage.getItem('userId'));
    if (isNaN(this.userId)) {
      console.error("Invalid user ID: Not a Number");
    } else {
      this.getReviewByUserId(this.userId);
    }
    console.log("id fetched ==> " + this.userId);
  }

  public getAllReview() {
    this.service.getAllReviews().subscribe(data => this.reviews = data);
  }

  public getReviewByUserId(userId: number) {
    this.service.getReviewsByUserId(userId).subscribe(data => this.reviews = data);
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
           title: "Sad to see you go! Visit Again!",
           icon: "success"
           });
         }
       });
    
     }
}
