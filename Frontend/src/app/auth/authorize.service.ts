import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, config } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Router } from '@angular/router';
@Injectable({
  providedIn: "root"
})
export class AuthorizeService {
 currentUser:any
 currentUserChanged=new BehaviorSubject<any>(null)
  constructor(private http: HttpClient,private router:Router) {
    
  }
  url = "http://localhost:3000";
  role:any

  authenticate(loginData: any) {
    this.http
      .post<{ logintoken: any,role:any }>(this.url + "/login", loginData).subscribe(res=>{
        this.currentUser=res;
        this.currentUserChanged.next(this.currentUser)
        localStorage.setItem("access_token",res.logintoken)
        if(res){
          this.role=res.role
        }
        if(res.role=="user"){
this.router.navigate(['/user'])
        }
        else if(res.role=="admin"){
        this.router.navigate(['/admin'])}
      })
      }
  
  logout() {
    localStorage.clear()
  }

  getToken(){
  
  return localStorage.getItem("access_token")
  
}

  public get loggedIn(): boolean {
    return localStorage.getItem("access_token") !== null;
  }

  getCurrentUser():Observable<any>{
    return this.http.get(this.url+"/dashboard")
    }
//if user is already loggedIn



}
