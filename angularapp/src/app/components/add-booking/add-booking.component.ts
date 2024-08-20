import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/models/booking.model';
import { Resort } from 'src/app/models/resort.model';
import { Review } from 'src/app/models/review.model';
import { BookingService } from 'src/app/services/booking.service';
import { ResortService } from 'src/app/services/resort.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {

  booking:Booking;
  bookingForm:FormGroup;
  resort:Resort;
  resortId:number=null;
  username:string=null;

  
  constructor(private bookingservice:BookingService,private resortservice:ResortService,private builder:FormBuilder,private activedRouter:ActivatedRoute,private route:Router) {
    this.bookingForm=builder.group({

      noOfpersons:builder.control("",[Validators.required,Validators.min(1)]),
      address:builder.control("",Validators.required),
      fromDate:builder.control("",Validators.required),
      toDate:builder.control("",Validators.required)
    })
    const fromDateControl = this.bookingForm.get('fromDate');
  const toDateControl = this.bookingForm.get('toDate');
  
  if (fromDateControl && toDateControl) {
    fromDateControl.valueChanges.subscribe(() => {
      this.checkDateValidity();
    });
  
    toDateControl.valueChanges.subscribe(() => {
      this.checkDateValidity();
    });
  }
  }
  public get noOfpersons()
  {
    return this.bookingForm.get('noOfpersons');
  }

  public get status()
  {
    return this.bookingForm.get('status');
  }
  
  public get totalPrice()
  {
    return this.bookingForm.get('totalPrice');
  }
  public get address()
  {
    return this.bookingForm.get('address');
  }
  public get fromDate()
  {
    return this.bookingForm.get('fromDate');
  }
  public get toDate()
  {
    return this.bookingForm.get('toDate');
  }

  
  



  checkDateValidity() {
    const fromDate = this.bookingForm.get('fromDate')!.value;
    const toDate = this.bookingForm.get('toDate')!.value;
    const todayDate = new Date();
    todayDate.setHours(0,0,0,0);

    if (fromDate && new Date(fromDate) < new Date(todayDate)) {
      this.bookingForm.get('fromDate')!.setErrors({ fromDateInvalid: true });
    }
    else if (fromDate && toDate && new Date(toDate) < new Date(fromDate)) {
      this.bookingForm.get('toDate')!.setErrors({ dateRangeInvalid: true });
    } else {
      this.bookingForm.get('toDate')!.setErrors(null);
    }
  }

  
  public addBooking() {
    
    const fromDate = new Date(this.bookingForm.value.fromDate);
    const toDate = new Date(this.bookingForm.value.toDate);
    const todayDate = new Date();
    console.log('todays date ===> '+todayDate);
    console.log('from date ===> '+fromDate);
    let loggedInUserId: number = parseInt(JSON.parse(localStorage.getItem("user")).userId);
    console.log(loggedInUserId);
    this.booking = { ...this.bookingForm.value, resort: { resortId: this.resortId }, user: { userId: loggedInUserId } };
    
    if (fromDate <= toDate) {
      Swal.fire({
        title: "Payment Confirmation",
        text: "Do you want to proceed with the payment?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirm Payment"
      }).then((result) => {
        if (result.isConfirmed) {
  
          this.booking.totalPrice = this.resort.price;
          this.booking.status = "Pending...";
          console.log(JSON.stringify(this.booking));
          this.bookingservice.addBooking(this.booking).subscribe((data) => {
            this.route.navigate(['/customerViewResort']);
            this.resort = null;
          });
  
          Swal.fire({
            title: "Payment was successful",
            icon: "success"
          });
          this.resort.resortAvailableStatus="Not Available";
          this.resortservice.updateResort(this.resort).subscribe((data)=>{
            this.ngOnInit();
          })
        }
      });
    } else {
      Swal.fire({
        title: "Incomplete Form Submission",
        text: "Please fill out all required fields.",
        icon: "error"
      });
    }
  }
  

  public cancel()
  {
    this.route.navigate(['/customerViewResort']);
  }
  
  ngOnInit(): void {
    this.bookingservice.getResortDetails(this.resortId=parseInt(this.activedRouter.snapshot.queryParamMap.get('resortId'))).subscribe(data=>{
      this.resort = data;
      this.username=localStorage.getItem('username');
      this.bookingForm.get('noOfpersons').setValidators([Validators.required, Validators.min(1), Validators.max(this.resort.capacity)]);
      this.bookingForm.get('noOfpersons').updateValueAndValidity();
      
    })
  }
}
