import { Component, OnInit } from '@angular/core';
import { Bus } from '../bus.model';
import { BusesService } from 'src/services/buses.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor( private p:BusesService ) {
    this.selectedBus=p.getBuss();
   }

  selectedBus:Bus;
  ngOnInit() {
  }

}
