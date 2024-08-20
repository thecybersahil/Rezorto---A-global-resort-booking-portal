import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm:FormGroup;
  constructor(private builder: FormBuilder,private auth:AuthService,private router:Router) {
    this.registrationForm = builder.group({
      username:builder.control("",Validators.required),
      email: ['', [Validators.required,Validators.email,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
      password:builder.control("",[Validators.required,Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/)]),
      confirmPassword:builder.control("",Validators.required),
      mobileNumber:builder.control("",[Validators.required,Validators.pattern(/^\d{10}$/)]),
      userRole:builder.control("",Validators.required)
    }, { validator: this.passwordMatchValidator })
   }
 
   public get username(){
     return this.registrationForm.get("username");
    }
    public get email(){
      return this.registrationForm.get("email");
    }
    public get password(){
      return this.registrationForm.get("password");
    }
    public get confirmPassword(){
    return this.registrationForm.get("confirmPassword");
   }
   public get mobileNumber(){
     return this.registrationForm.get("mobileNumber");
    }
    public get userRole(){
      return this.registrationForm.get("userRole");
    }
   
   
   
    ngOnInit(): void {
    }
   
    public register(){
      
      this.auth.register(this.registrationForm.value).subscribe(data=>{
        console.log("data from registration"+JSON.stringify(data) ),
        localStorage.setItem('username', this.registrationForm.value.username);
        Swal.fire({
          title: 'Hi!' + ' ' + localStorage.getItem('username'),
          text: "Registered Successfully!",
          icon: "success"
      });
      this.router.navigate(['/login']);
      },
      err=>{
        Swal.fire({
          title: "User Already Exists!",
          text: "Please enter a new Email ID",
          icon: "error"
      });
      });
    }
      
     
    passwordMatchValidator: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {
      const password = control.get('password');
      const confirmPassword = control.get('confirmPassword');
      if (!password || !confirmPassword) {
        return null;
      }
      return password.value === confirmPassword.value ? null : { passwordMismatch: true };
    }
  }