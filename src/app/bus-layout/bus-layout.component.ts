import { Component, OnInit } from '@angular/core';
import { SeatService } from 'src/services/seat.service';
import { Seats } from 'src/app/seats.model';
@Component({
  selector: 'app-bus-layout',
  templateUrl: './bus-layout.component.html',
  styleUrls: ['./bus-layout.component.css']
})
export class BusLayoutComponent implements OnInit {

  constructor(private seatservice:SeatService) {
    this.seat=seatservice.getSeatss().seats;
    console.log(this.seat);
    
    for(let i:number=this.seat[this.k].row;i<4;)
      {
        if(this.k<20)
        {
        console.log(this.seat[this.k]);
        for(let j:number=0;j<5;j++)
        { 
          this.newline=false;
          console.log(this.newline);
        }
          this.newline=true;
          this.k++;
        }
        else{
          break;
        } 
      }  
    //this.f(); 
  }
  seat:Seats[]=this.seatservice.getSeatss().Seats;
  //variables to set seat status
  newline:boolean;
  k:number=0;
  ngOnInit() {
  }
  f(){
  }
}
