import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/services/user.service';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userservice:UserService) {
    console.log("constructor header");
  }

  isActive:boolean;
  
  ngOnInit() {
    console.log("ngonit invoked");
    this.isActive = this.userservice.isLogged();
  }
  

}

