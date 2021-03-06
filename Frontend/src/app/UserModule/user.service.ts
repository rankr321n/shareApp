import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  friendsChanged = new Subject<number>();
  url = "http://localhost:3000";

  constructor(private http: HttpClient) {}
//Terms and conditions Display
  getTerms(): Observable<any> {
    return this.http.get(this.url + "/termsandconditions");
  }

  getReguser(): Observable<any> {
    return this.http.get(this.url + "/getreguser");
  }

    sendFriendRequest(email: any,id:any) {
      return this.http.post<any>(this.url+"/sendFriendRequest", email,id );
    }
// unFriend(id: any) {
//   // console.log(id);
//   return this.http.post<any>(this.url+"/unfriend", {
//     id: id
//   });
// }


acceptFriendRequest(id:any){
  return this.http.post<any>(this.url+"/acceptFriendRequest",id)
}


UpdateProfile(id:any,data:any):Observable<any>{
  
return this.http.patch(this.url+"/update/",{id:id,data:data})
}

ViewUserProfile(id:any):Observable<any>{
  return this.http.post(this.url+"/view/",{id:id})
}

updateImage(image:any):Observable<any>{
return this.http.post(this.url+"/upload",image)
}

viewImage(imagepath:any):Observable<any>{
  // console.log(imagepath);
  
  return this.http.get(this.url+"/image/"+imagepath, { responseType: 'text' })
}
}
