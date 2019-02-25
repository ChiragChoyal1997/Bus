import {Injectable} from '@angular/core';
import { SessionStorageService, SessionStorage } from 'angular-web-storage';


const TOKEN = 'TOKEN';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public session: SessionStorageService){}
  
  setToken(token: string): void {
    console.log("entered user service set token");
    this.session.set("key",token);
    console.log("exit from user service");
  }



  isLogged():boolean {
    console.log("entered user service isLogged()");
    if(this.session.get("key")!=null){
      console.log("enetered userservice true statement");
      return true;
    }
    else{
      console.log("enetered userservice false statement");
      return false;
    }
  }
}