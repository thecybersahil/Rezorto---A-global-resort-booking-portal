import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

import Swal from 'sweetalert2';


@Component({

  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']

})

export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  hidePassword=true;
  username:string=null;


  constructor(private builder:FormBuilder,private service:AuthService, private route: Router) {

    this.loginForm=this.builder.group({

      email: ['', [Validators.required,Validators.email,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],

      password: builder.control("",Validators.required)

    });
    
  }
  
  
  
  ngOnInit(): void {
    this.username=localStorage.getItem('username');
  }
  
  togglePasswordVisibility(){
    
    this.hidePassword=!this.hidePassword;
    
  }

  public get email(){
    
    return this.loginForm.get("email");
    
  }
  
  public get password(){
    
    return this.loginForm.get("password");
    
  }
  
  

  login() {
    if (this.loginForm.valid) {
      this.service.login(this.loginForm.value).subscribe(data => {
        try {
          // Set the user data in localStorage
          localStorage.setItem('token', data.token);
          localStorage.setItem('email', data.email);
          localStorage.setItem('role', data.role);
          localStorage.setItem('username', data.username);
          localStorage.setItem('userId', data.userId);
  
          this.service.setUser(data);
  
          console.log("Token----------->" + JSON.stringify(data.token));
          console.log("role got it ----------->" + JSON.stringify(data.role));
  
          // Now check for the user in localStorage
          if (localStorage.getItem('username') === null) {
            throw new TypeError("Cannot read properties of null (reading 'username')");
          }
          console.log(`Username: ${localStorage.getItem('username')}`);
        } catch (error) {
          console.error('An error occurred:', error);
          Swal.fire({
            title: "Invalid Login",
            text: "The user ID or password you entered is incorrect.",
            icon: "error"
          });
        }
  
        // Handle successful login based on role
        if (localStorage.getItem('role') === 'ADMIN') {
          Swal.fire({
            title: 'Hi!' + ' ' + localStorage.getItem('username'),
            text: "Login Success!",
            icon: "success"
          });
          this.route.navigate(['/adminDashboard']);
        } else if (localStorage.getItem('role') === 'CUSTOMER') {
          Swal.fire({
            title: 'Hi!' + ' ' + localStorage.getItem('username'),
            text: "Login Success!",
            icon: "success"
          });
          this.route.navigate(['/customerDashboard']);
        }
      });
    }
  }
  

  }