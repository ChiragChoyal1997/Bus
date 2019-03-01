import { Component, OnInit } from '@angular/core';
import { Bus } from '../bus.model';
import { Seats } from 'src/app/seats.model';
import { BusesService } from 'src/services/buses.service';
import { BookSeatService } from 'src/services/book-seat.service';
import { NgForm } from '@angular/forms';
import { Blockticket } from 'src/app/blockticket.model';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor( private p:BusesService, private bss:BookSeatService ) {
    this.selectedBus=p.getBuss();
    this.seat=this.bss.getSeat();
  }
  
  selectedBus:Bus;
  seat:Seats[];
  blockedTicket:Blockticket[]=[].fill(null,0);

  
  onSubmit(){
    for(var i=0;i<this.seat.length;i++){
      document.getElementById("name"+this.seat[i].id).value = this.blockedTicket[i].name;
      document.getElementById("email"+this.seat[i].id).value = this.blockedTicket[i].email;
      document.getElementById("gender"+this.seat[i].id).value = this.blockedTicket[i].gender;
      document.getElementById("contact"+this.seat[i].id).value = this.blockedTicket[i].contact;
      document.getElementById("age"+this.seat[i].id).value = this.blockedTicket[i].age;
    }
    console.log(this.blockedTicket);
  }

  ngOnInit() {
  }

}
