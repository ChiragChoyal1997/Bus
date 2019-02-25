import { Bus } from './bus.model';
import { SessionStorageService, SessionStorage } from 'angular-web-storage';

export class Buses {

    constructor(public session: SessionStorageService){}  

    bus:Bus[];

    setBus(x:Bus[]):void{
        console.log("bus model set method");
        this.session.set("buses",x);
    }
    getBus(){
        if(this.session.get("buses")!=null){
      
            return this.bus;
          }
          else{
            
            return this.bus=null;
          }
    }
}
