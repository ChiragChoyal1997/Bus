import { Component, OnInit } from '@angular/core';
import { BusesService } from 'src/services/buses.service';
import { Bus } from '../bus.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})
export class BusesComponent implements OnInit {

  constructor(public buses:BusesService,private route:Router) {
    this.b =buses.getBus().Bus;
   }
   b:Bus[];

  ngOnInit() {
  }
  
  book(bus:Bus){
    this.buses.setBuss(bus);
    this.route.navigateByUrl("/booking");
  }
}
