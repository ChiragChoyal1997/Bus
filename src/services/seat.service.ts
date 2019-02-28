import { Injectable } from '@angular/core';
import { Bus } from 'src/app/bus.model';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Seats } from 'src/app/seats.model';
import { SessionStorageService, SessionStorage } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class SeatService {
  constructor( private http:HttpClient,public session: SessionStorageService) { }

  url="http://www.mocky.io/v2/5c763f42320000ed1bf45f8c";
  getSeats(id:number){
    return this.http.post<Seats[]>(this.url,id,{
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    });
  }

  saveSeats(seats:Seats[]):void{
    this.session.set("seats",seats);
  }
  getSeatss(){
    return this.session.get("seats");
  }
}
