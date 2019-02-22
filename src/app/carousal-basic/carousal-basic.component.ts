import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { BusSearchService } from "src/services/bus-search.service";

@Component({
  selector: 'app-carousal-basic',
  templateUrl: './carousal-basic.component.html',
  styleUrls: ['./carousal-basic.component.css'],
  providers: [ NgbCarouselConfig ]
})
export class CarousalBasicComponent implements OnInit {
  

  constructor(config: NgbCarouselConfig,private bussearchservice:BusSearchService) {
    config.interval = 2000;
    config.keyboard = false;
    config.pauseOnHover = true;
    config.wrap = true;
    config.showNavigationIndicators = false;
   }
   from:string;
   to:string;
   date:any; 
   searchBus(){
     this.bussearchservice.getBuses(this.from,this.to,this.date);
   }

  ngOnInit() {
  }

}
