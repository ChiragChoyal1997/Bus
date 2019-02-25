import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { BusSearchService } from "src/services/bus-search.service";
import { Bus } from '../bus.model';
import { Router, ActivatedRoute } from '@angular/router';
import { BusesService } from 'src/services/buses.service';
@Component({
  selector: 'app-carousal-basic',
  templateUrl: './carousal-basic.component.html',
  styleUrls: ['./carousal-basic.component.css'],
  providers: [ NgbCarouselConfig ]
})
export class CarousalBasicComponent implements OnInit {
  

  constructor(config: NgbCarouselConfig,private buses:BusesService,private bussearchservice:BusSearchService,private route:Router) {
    config.interval = 2000;
    config.keyboard = false;
    config.pauseOnHover = true;
    config.wrap = true;
    config.showNavigationIndicators = false;
   }
   from:string;
   to:string;
   date:any; 
   error_msg:string;
   b:Bus[];

   searchBus(){
     this.bussearchservice.getBuses(this.from,this.to,this.date).subscribe(
       data => {
        if(data.length != 0)
            { 
            this.b = data;
            this.buses.setBus(this.b);
            this.route.navigateByUrl("/buses"); 
            }
          },
       error => console.log(error)
     );
   }

  ngOnInit() {
  }

}
