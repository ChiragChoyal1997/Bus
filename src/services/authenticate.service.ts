import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionStorageService, SessionStorage } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  

  url="https://reqres.in/api/login";
  token:string=null;
  constructor(private http:HttpClient, private route:Router,public session: SessionStorageService) {
   }

  getUser(user:string,password:string){
    return this.http.post<any>(this.url,{ email: user, password: password },{
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    });
  }

  logout() {
    // remove user from local storage to log user out
    this.session.remove("key");
    this.route.navigate(['/login']);
  }
}
