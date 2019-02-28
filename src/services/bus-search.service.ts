import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bus } from '../app/bus.model';
@Injectable({
  providedIn: 'root'
})
export class BusSearchService {

  constructor(private http:HttpClient) { }
  url="http://www.mocky.io/v2/5c7610383200003919f45e73";
  buses:Bus[];
  getBuses(from:string,to:string,date:any){
    return this.http.post<Bus[]>(this.url,{ from:from, to:to, date:date},{
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    });
  }

}
