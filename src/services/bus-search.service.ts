import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusSearchService {

  constructor(private http:HttpClient) { }

  getBuses(from:string,to:string, date:any){
    
  }

}
