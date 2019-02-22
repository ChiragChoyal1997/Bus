import { Injectable } from '@angular/core';
import { User } from '../app/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SaveUserService {

  url="http://localhost:3000/User";
  constructor(private http:HttpClient) { }
  addUser(user:User){
    console.log(JSON.stringify(user))
    return this.http.post<User>(this.url,user,{
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    }).subscribe(data => {
      console.log("Post request is successful",data);
    },
    error => {
      console.log("Error",error);
    }
    );
  }
}
