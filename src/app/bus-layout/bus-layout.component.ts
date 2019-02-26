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
    //this.newline = false;
    for(var s in this.seat){
      
      if(this.seat[s].row!=this.row && this.seat[s].column==this.column){
        if(this.count<4)
        {
          this.newline = false;
          this.count++;
          this.row=this.seat[s].row;
        }
        else{
          this.newline = true;
          this.count=0;

        }
      }
      else{
        
        
      }
    }
    
  }
  seat:Seats[];
  //variables to set seat status
  count=0;
  row=0;
  column:number=-1;
  newline:boolean=true;
  
  ngOnInit() {
  }
  

}
