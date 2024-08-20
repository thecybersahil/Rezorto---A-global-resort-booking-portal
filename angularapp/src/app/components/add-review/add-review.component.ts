import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Resort } from 'src/app/models/resort.model';
import { Review } from 'src/app/models/review.model';
import { ResortService } from 'src/app/services/resort.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  reviewForm: FormGroup;
  resorts: Resort[];
  review: Review;
  userId: number;
  username = localStorage.getItem('username');

  constructor(private builder: FormBuilder, private service: ResortService,private router:Router) {
    this.reviewForm = builder.group({

      subject: builder.control("", Validators.required),
      body: builder.control("", Validators.required),
      rating: builder.control("", Validators.required)
    });
  }

  ngOnInit(): void {
    this.userId = Number(localStorage.getItem('userId'));
    if (isNaN(this.userId)) {
      console.error("Invalid user ID: Not a Number");
    }
    this.getAllResorts();
  }

  public getAllResorts() {
    this.service.getAllResorts().subscribe(data => this.resorts = data);
    console.log(this.resorts);
  }

  public get userName() {
    return this.reviewForm.get("userName");
  }
  public get subject() {
    return this.reviewForm.get("subject");
  }
  public get body() {
    return this.reviewForm.get("body");
  }
  public get rating() {
    return this.reviewForm.get("rating");
  }

  public addNewReview() {
    console.log("inside");
    if (this.reviewForm.valid) {
      this.review = this.reviewForm.value;
      this.review.dateCreated = new Date();
      this.review.user = {
        userId: this.userId,
        username: this.username, // Set appropriate values or fetch from localStorage if available
        email: '',
        password: '',
        userRole: ''
      };
      return this.service.addReview(this.review).subscribe(data => {

        // console.log(JSON.stringify(this.review));
        console.log("rdtyuiouyt");
        this.router.navigate(['/customerDashboard']);

      });
    }
  }
  
}
