import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
 
  constructor() {}
 
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Visited URL: " + request.url);
   
    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role')
   
    
   
    if (email && token) {
      console.log("Inside if block, setting headers");
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
   
    // console.log("Request headers: ", request.headers);
   
    return next.handle(request);
  }
}