import {Injectable} from '@angular/core';
import { SessionStorageService, SessionStorage } from 'angular-web-storage';


const TOKEN = 'TOKEN';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public session: SessionStorageService){}
  
  setToken(token: string): void {
    this.session.set("key",token);
  }



  isLogged():boolean {
    if(this.session.get("key")!=null){
      return true;
    }
    else{
    return false;
    }
  }
}