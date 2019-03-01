import { Injectable } from '@angular/core';
import { SessionStorageService, SessionStorage } from 'angular-web-storage';
import { Seats } from 'src/app/seats.model';
@Injectable({
  providedIn: 'root'
})
export class BookSeatService {

  constructor(private session:SessionStorageService ) { }
  
  storeSeat(se:Seats[]){
    this.session.set("se",se);
  }
  getSeat(){
    return this.session.get("se");
  }

}
