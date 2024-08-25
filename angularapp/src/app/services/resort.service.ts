import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resort } from '../models/resort.model';
import { Review } from '../models/review.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResortService {


  // public apiUrl="https://8080-eadaebaafdadfabeaddecdfdbadefdaa.premiumproject.examly.io";
  public apiUrl="http://localhost:8080";


  constructor(private httpClient:HttpClient) { }

  addResort(resort:Resort):Observable<any>
  {
    return this.httpClient.post(this.apiUrl+"/api/resort",resort);
  }
  getAllResorts():Observable<any>
  {
    return this.httpClient.get(this.apiUrl+"/api/resort");
  }
  updateResort(resortDetails:Resort):Observable<any>
  {
    console.log("resort Details for update request" , resortDetails);
    
    return this.httpClient.put(this.apiUrl+"/api/resort/"+resortDetails.resortId,resortDetails);
  }
  deleteResort(resortId:number):Observable<any>
  {
    return this.httpClient.delete(this.apiUrl+"/api/resort/"+resortId);
  }
  addReview(review:Review):Observable<any>
  {
    return this.httpClient.post(this.apiUrl+"/api/review",review);
  }
  getAllReviews():Observable<any>
  {
    return this.httpClient.get(this.apiUrl+"/api/review");
  }
  getReviewsByUserId(userId:number):Observable<any>
  {
    return this.httpClient.get(this.apiUrl+"/api/review/user/"+userId);
  }

  fetchResortsAverage():Observable<any>
  {
    return this.httpClient.get(this.apiUrl+"/api/review/rating");
  }




}  
