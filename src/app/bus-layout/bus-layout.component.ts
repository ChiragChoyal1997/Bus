import { Component, OnInit } from '@angular/core';
import { SeatService } from 'src/services/seat.service';
import { Seats } from 'src/app/seats.model';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-balham.css';
//import { empty } from 'rxjs';
//import { FormBuilder,FormControl, FormGroup,FormArray } from '@angular/forms';

@Component({
  selector: 'app-bus-layout',
  templateUrl: './bus-layout.component.html',
  styleUrls: ['./bus-layout.component.css']
})
export class BusLayoutComponent implements OnInit {

  constructor(private seatservice:SeatService) {
    

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
  seat:Seats[]=this.seatservice.getSeatss().seats;

  // img1:string="../assets/image/available_seat_img.png";
  // img2:string="../assets/image/booked_seat_img.png";
  // imageUrl:string=this.img1;
  row=new Array(4);
  column=new Array(5);
  // clicker:boolean=true;
  
  booknow = Array.apply(null, Array(5)).map(function() { return 0 });
  x:number;
  count = 0;
  isActive:boolean=false;
  i=0;
  h:number;
  toggle(s:number):boolean{
      
      for(var x=0; x<this.booknow.length;x++)
      {
        if(s == this.booknow[x]){
          
          document.getElementById("seat"+s).style.background = "yellow";
          // const index: number = this.booknow.indexOf(s);
          // if (index !== -1) {
          //     this.booknow.splice(index, 1);
          //     break;
          // }            
          return true;  
        }
      }
      document.getElementById("seat"+s).style.background = "blue";
      return false;
          // this.booknow[this.i]=s;
          // this.i++;
          // console.log(this.booknow);
    }

    lk(s:number){
      const index: number = this.booknow.indexOf(s);
          if (index !== -1) {
              this.booknow[index]=0;
              //this.booknow.splice(index, 1);
              this.isActive=false;
          }
    }

    add(s:number)
    {
      this.booknow[this.i]=s;
      this.i++;
      console.log(this.booknow);
      this.isActive=true;
    }

    newer(s:number){
      for(var y=0; y<this.booknow.length;y++){
        if(this.booknow[y] != 0) 
        {
          this.count++;
        }
      }
          if(this.toggle(s))
          {
            this.lk(s);
          }
          else{
            if(this.count>=5){
              window.alert("Sorry!\n You can Book only 5 seats at a Time !");
              document.getElementById("seat"+s).style.background = "yellow";
              }
              else{
            this.add(s);
              }
          }
        this.count=0;
    }
  ngOnInit() {
  }
}
