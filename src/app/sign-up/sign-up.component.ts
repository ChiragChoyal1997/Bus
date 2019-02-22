import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { SaveUserService } from '../../services/save-user.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user= new User();
  email=this.user.Email;
  password=this.user.Password;
  
  constructor(private saveuser:SaveUserService){}
  ngOnInit() {
  }
  saveUser(){
    this.saveuser.addUser(this.user);
    console.log("input succeed");
    console.log(JSON.stringify(this.user));
  }

}
