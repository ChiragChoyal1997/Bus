import { Component, OnInit, Input } from '@angular/core';
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
    console.log("is active =",this.isActive);
  }

  isActive:boolean=this.userservice.isLogged();
  ngOnInit() {
  }
  

}

