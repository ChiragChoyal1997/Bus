import { Component, OnInit } from '@angular/core';
import { BusesService } from 'src/services/buses.service';
import { Bus } from '../bus.model';
import { Router, ActivatedRoute } from '@angular/router';
import { SeatService } from 'src/services/seat.service';
@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})
export class BusesComponent implements OnInit {

  constructor(public buses:BusesService,private route:Router,private seatservice:SeatService) {
    this.b =buses.getBus().Bus;
   }
  b:Bus[];
   showseat:boolean=false;
  ngOnInit() {
  }
  bb:number;
  seatView(bus:Bus){
    this.showseat=!this.showseat;
    console.log(bus.id)
    this.bb = bus.id;
    this.seatservice.getSeats(bus.id).subscribe(
      data => {
        this.seatservice.saveSeats(data);
      }
    )
    
  }

}
