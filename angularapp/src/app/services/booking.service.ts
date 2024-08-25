import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {





//  public apiUrl="https://8080-eadaebaafdadfabeaddecdfdbadefdaa.premiumproject.examly.io";
 public apiUrl="http://localhost:8080";



  constructor(private httpClient:HttpClient) { }

  public addBooking(booking:Booking):Observable<any>
  {
    return this.httpClient.post(this.apiUrl+"/api/booking",booking);
  }

  public getAllBookings():Observable<any>
  {
    return this.httpClient.get(this.apiUrl+"/api/booking");
  }

  public getBookingByUserId(userId:number):Observable<any>
  {
    return this.httpClient.get(this.apiUrl+"/api/booking/user/"+userId);
  }

  public updateBooking(booking:Booking):Observable<any>
  {
    return this.httpClient.put(this.apiUrl+"/api/booking/"+booking.bookingId,booking);
  }

  public deleteBooking(bookingId:number):Observable<any>
  {
    return this.httpClient.delete(this.apiUrl+"/api/booking/"+bookingId);
  }

  public getResortDetails(resortId:number):Observable<any>
  {
    return this.httpClient.get(this.apiUrl+"/api/resort/"+resortId);
  }


}
