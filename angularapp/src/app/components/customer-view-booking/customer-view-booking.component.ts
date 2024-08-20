import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/models/booking.model';
import { BookingService } from 'src/app/services/booking.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-view-booking',
  templateUrl: './customer-view-booking.component.html',
  styleUrls: ['./customer-view-booking.component.css']
})
export class CustomerViewBookingComponent implements OnInit {

  allBookings:Booking[]=[];
  userId:number;
  username:string=null;
  constructor(private bookingservice:BookingService, private router: Router) { }

  
  ngOnInit(): void {

    this.userId=parseInt(localStorage.getItem('userId'));
    this.username=localStorage.getItem('username');
    this.getBookingByUserId();
  }

  public getBookingByUserId()
  {
    this.bookingservice.getBookingByUserId(this.userId).subscribe((data)=>{
      this.allBookings=data;
    })
  }

  public deleteBooking(id:number)
  {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your booking has been deleted.",
          icon: "success"
        });
        this.bookingservice.deleteBooking(id).subscribe((data)=>{
          this.getBookingByUserId();
        })
      }
    });
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
