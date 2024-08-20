import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Resort } from 'src/app/models/resort.model';
import { ResortService } from 'src/app/services/resort.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-resort',
  templateUrl: './add-resort.component.html',
  styleUrls: ['./add-resort.component.css']
})
export class AddResortComponent implements OnInit {

  resortForm: FormGroup;
  resorts: Resort[] = [];
  selectedImage: string | ArrayBuffer | null = null;
  selectedImageName: string | null = null;
  username:string='';

  constructor(private builder: FormBuilder, private service: ResortService, private router: Router) { 
    this.resortForm = builder.group({
      resortName: builder.control("", Validators.required),
      resortImageUrl: builder.control("", Validators.required),
      resortLocation: builder.control("", Validators.required),
      description: builder.control("", Validators.required),
      resortAvailableStatus: builder.control("", Validators.required),
      price: builder.control("", [Validators.required, Validators.min(1)]),
      capacity: builder.control("", [Validators.required, Validators.min(50)])
    });
  }

  public get resortName() {
    return this.resortForm.get("resortName");
  }
  public get resortImageUrl() {
    return this.resortForm.get("resortImageUrl");
  }
  public get resortLocation() {
    return this.resortForm.get("resortLocation");
  }
  public get description() {
    return this.resortForm.get("description");
  }
  public get resortAvailableStatus() {
    return this.resortForm.get("resortAvailableStatus");
  }
  public get price() {
    return this.resortForm.get("price");
  }
  public get capacity() {
    return this.resortForm.get("capacity");
  }

  ngOnInit(): void {
    this.username=localStorage.getItem('username');

    this.getAllResorts();
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImageName = file.name;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.selectedImage = e.target?.result;
        Swal.fire({
          title: "Your uploaded picture",
          imageUrl: this.selectedImage as string,
          imageAlt: "The uploaded picture"
        });
      };
      reader.readAsDataURL(file);
    }
  }

  addNewResort() {
    console.log("Form Submitted");
    console.log(this.resortForm.value);

    if (this.resortForm.valid) {
      this.service.addResort({ ...this.resortForm.value, resortImageUrl: this.selectedImageName }).subscribe(data => {
        console.log("Resort added successfully");
        Swal.fire({
        title: this.resortForm.get('resortName').value+" added successfully!",
        text: "Now there is one more place to enjoy",
        icon: "success"
      });
        this.router.navigate(['/adminViewResort']);
      },
      err => {
        console.error("Error adding resort", err);
        Swal.fire({
          title: "Duplicate RESORT found!",
          text: "Please enter a new Resort",
          icon: "error"
        });
      });
      this.getAllResorts();
    } else {
      Swal.fire({
        title: "Form is not valid!",
        text: "Please fill out all required fields.",
        icon: "error"
      });
    }
  }

  getAllResorts() {
    this.service.getAllResorts().subscribe(data => {
      this.resorts = data;
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
