import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/models/booking.model';
import { Resort } from 'src/app/models/resort.model';
import { BookingService } from 'src/app/services/booking.service';
import { ResortService } from 'src/app/services/resort.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-view-booking',
  templateUrl: './admin-view-booking.component.html',
  styleUrls: ['./admin-view-booking.component.css']
})
export class AdminViewBookingComponent implements OnInit {
  username:string=null;
  bookings:Booking[]=[];
  resort:Resort;
  status:string=null;
  constructor(private bookingservice:BookingService,private resortservice:ResortService,private router:Router) { }
  
  ngOnInit(): void {
    this.username=localStorage.getItem('username');
    this.getAllBookings();
  }
  public getAllBookings()
  {
    this.bookingservice.getAllBookings().subscribe((data)=>{
      console.log(data);
      this.bookings=data;
    })
  }

  accepet(booking:Booking)
  {
    Swal.fire({
      title: "Booking Accepted",
      text: "",
      icon: "success"
    });
    booking.status="APPROVED";
    this.bookingservice.updateBooking(booking).subscribe(data=>{
      this.getAllBookings();
    })
    
    
  } 
  reject(booking:Booking)
  {
    Swal.fire({
      title: "Are you sure you want to Reject Booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "REJECT"
    }).then((result) => {
      if (result.isConfirmed) {
        booking.status="REJECTED";
        this.bookingservice.updateBooking(booking).subscribe(data=>{
          this.getAllBookings();
        })
        
        Swal.fire({
        title: "Booking Rejected Successfully!",
        icon: "success"
        });
        // <resort status updated>
        this.resort=booking.resort;
        this.resort.resortAvailableStatus="Available"
        this.resortservice.updateResort(this.resort).subscribe((data)=>{})

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
           title: "Loggedout Successfully!",
           icon: "success"
           });
         }
       });
    
     }
    
  
  }
  




