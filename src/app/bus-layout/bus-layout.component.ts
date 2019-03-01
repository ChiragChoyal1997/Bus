import { Component, OnInit } from '@angular/core';
import { SeatService } from 'src/services/seat.service';
import { Seats } from 'src/app/seats.model';
import { Router, ActivatedRoute } from '@angular/router';
import { BookSeatService } from 'src/services/book-seat.service';

@Component({
  selector: 'app-bus-layout',
  templateUrl: './bus-layout.component.html',
  styleUrls: ['./bus-layout.component.css']
})
export class BusLayoutComponent implements OnInit {

  constructor(private seatservice: SeatService,private rout:Router,private store:BookSeatService) {
    /*if(this.seat[0].sleeper)
    {
      this.row=new Array(4);
      this.column=new Array(3);
    }  
    else{
      this.row=this.row;
      this.column=this.column;
    }*/
  }
  seat: Seats[] = this.seatservice.getSeatss().seats;
  row = new Array(4);
  column = new Array(5);
  // booknow:Seats[] = Array.apply(null, Array(5)).map(function () { return null });
  booknow : Seats[] = [].fill(null,0);
  x: number;
  count = 0;
  i = 0;

  toggle(s: Seats): boolean {
    for (var x = 0; x < this.booknow.length; x++) {
      if (s == this.booknow[x]) {
        document.getElementById("seat" + s.id).style.background = "yellow";
        return true;
      }
    }
    document.getElementById("seat" + s.id).style.background = "blue";
    return false;
  }

  lk(s: Seats) {
    const index: number = this.booknow.indexOf(s);
    if (index !== -1) {
      this.booknow[index] = null;
    }
  }

  add(s: Seats) {
    this.booknow[this.i] = s;
    this.i++;
  }

  newer(s: Seats) {
    for (var y = 0; y < this.booknow.length; y++) {
      if (this.booknow[y] != null) {
        this.count++;
      }
    }
    if (this.toggle(s)) {
      this.lk(s);
    }
    else {
      if (this.count >= 5) {
        window.alert("Sorry!\n You can Book only 5 seats at a Time !");
        document.getElementById("seat" + s.id).style.background = "yellow";
      }
      else {
        this.add(s);
      }
    }
    this.count = 0;
    console.log(this.booknow);
  }

  book(){
    this.store.storeSeat(this.booknow);
    this.rout.navigateByUrl("/booking");
  }
  ngOnInit() {
  }
}
