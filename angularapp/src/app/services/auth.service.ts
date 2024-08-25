import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Login } from '../models/login.model';
import { tap } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // public apiUrl:string="https://8080-eadaebaafdadfabeaddecdfdbadefdaa.premiumproject.examly.io";
  public apiUrl:string="http://localhost:8080";

  //private headers = new HttpHeaders().set('Authorization',`Bearer ${localStorage.getItem(`token`)}`);
  
  private userSubject = new BehaviorSubject<User | null>(null);
  public user$ = this.userSubject.asObservable();
  
  constructor(private http:HttpClient) { }
 
  public register(user:User):Observable<any>{
    return this.http.post(this.apiUrl+"/api/register",user);
  }



  public login(login: Login): Observable<any> {
    return this.http.post<User>(this.apiUrl + "/api/login", login).pipe(
      tap(user => {
        // Storing user information in BehaviorSubject
       this.setUser(user);
        // We can store user information in localStorage or sessionStorage
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('user', JSON.stringify(user));
        
      })
    );
  }

  public getUser(): User | null {
    return this.userSubject.value;
  }

  public setUser(user: User): void {
    this.userSubject.next(user);
  }
}