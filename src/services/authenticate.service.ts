import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  

  url="https://reqres.in/api/login";
  token:string=null;
  constructor(private http:HttpClient, private route:Router) {
   }

  getUser(user:string,password:string){
    console.log("get user service")
    return this.http.post<any>(this.url,{ email: user, password: password },{
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    });
    
  }
/*
  getAuth():boolean{
    if(this.token!=null)
    {
      return true;
    }
    else{
      return false;
    }
  } */

  logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');
    this.route.navigate(['/login']);
  }
}
