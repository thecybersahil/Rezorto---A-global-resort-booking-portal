import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Resort } from 'src/app/models/resort.model';
import { ResortService } from 'src/app/services/resort.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-view-resort',
  templateUrl: './admin-view-resort.component.html',
  styleUrls: ['./admin-view-resort.component.css']
})
export class AdminViewResortComponent implements OnInit {

  resorts:Resort[]=[];
  selectedResort:Resort;
  resortForm:FormGroup;
  id:number;
  username:string=null;
  selectedImage: string | ArrayBuffer | null = null;
  selectedImageName: string | null = null;


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
  constructor(private service:ResortService, builder:FormBuilder, private router: Router) {
    this.resortForm=builder.group({
    resortName:builder.control("",Validators.required),
    resortImageUrl:builder.control("",Validators.required),
    resortLocation:builder.control("",Validators.required),
    description:builder.control("",Validators.required),
    resortAvailableStatus:builder.control("",Validators.required),
    price:builder.control("",Validators.required),
    capacity:builder.control("",Validators.required)
    })
   }

   public get resortName()
   {
    return this.resortForm.get('resortName')
   }
   public get resortImageUrl()
   {
    return this.resortForm.get('resortImageUrl')
   }
   public get resortLocation()
   {
    return this.resortForm.get('resortLocation')
   }
   public get description()
   {
    return this.resortForm.get('description')
   }
   public get resortAvailableStatus()
   {
    return this.resortForm.get('resortAvailableStatus')
   }
   public get price()
   {
    return this.resortForm.get('price')
   }
   public get capacity()
   {
    return this.resortForm.get('capacity')
   }

  ngOnInit(): void {
    this.getAllResorts();
    this.username=localStorage.getItem('username');
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImageName = file.name;
      console.log(this.selectedImageName);
      const reader = new FileReader();
      reader.onload = (e) => {
        this.selectedImage = e.target?.result;
        Swal.fire({
          title: "New Picture Uploaded Successfully!",
          imageUrl: this.selectedImage as string,
          imageAlt: "The uploaded picture"
        });
      };
      console.log('----'+this.selectedImage as string);
      reader.readAsDataURL(file);
    }
  }

  getAllResorts()
  {
    this.service.getAllResorts().subscribe(data=>{
      this.resorts=data
    },
    error=>{
      console.log(error.error+' '+error.status);
      this.resorts=[];
    })
  }
  deleteResort(resortId:number)
  {
    this.service.deleteResort(resortId).subscribe(data=>{
      this.getAllResorts();
    });
    
    console.log(resortId);
  }
  edit(resortDetails:Resort)
  {
    this.id=resortDetails.resortId;
    this.resortName.setValue(resortDetails.resortName);
    this.resortImageUrl.setValue(resortDetails.resortImageUrl);console.log('====>'+this.resortImageUrl);
    this.resortLocation.setValue(resortDetails.resortLocation);
    this.description.setValue(resortDetails.description);
    this.resortAvailableStatus.setValue(resortDetails.resortAvailableStatus);
    this.price.setValue(resortDetails.price);
    this.capacity.setValue(resortDetails.capacity);
    this.selectedResort=this.resortForm.value;
    this.selectedResort.resortId=this.id;
  }
  updateResort()
  {
    this.selectedResort=this.resortForm.value;
    this.selectedResort.resortId=this.id;
    this.selectedResort.resortImageUrl = this.selectedImageName;
    console.log('selectedResort',JSON.stringify(this.selectedResort));
    this.service.updateResort(this.selectedResort).subscribe(data=>{
      console.log(this.selectedResort);
      this.getAllResorts(),
      this.selectedResort=null
    });
    console.log(this.selectedResort);
    console.log('updation done');
    Swal.fire({
      title: "Resort Details Updated Successfully!",
      text: "",
      icon: "success"
  });
  }


  cancelResort(){
    this.selectedResort=null;
  }


  logout()
  {
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
