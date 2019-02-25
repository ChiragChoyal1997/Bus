import { Injectable } from '@angular/core';
import { Bus } from '../app/bus.model';
import { SessionStorageService, SessionStorage } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class BusesService {

  constructor(public session: SessionStorageService){}  

    bus:Bus[];
    buss:Bus;
    setBus(x:Bus[]):void{
        console.log("bus model set method", x);
        this.session.set("buses",x);
    }
    getBus(){
        if(this.session.get("buses")!=null){
      
            return this.session.get("buses");
          }
          else{
            
            return this.bus=null;
          }
    }
    setBuss(b:Bus){
      this.buss=b;
    }
    getBuss(){
      return this.buss;
    }
}
