import { Component, OnInit } from '@angular/core';
//import { User } from '../user.model';
import { AuthenticateService } from 'src/services/authenticate.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {

  email:string
  password:string
  constructor(private authenticate:AuthenticateService,private userservice:UserService , private route:Router) { }

  ngOnInit() {
  }
  checkUser(){
      this.authenticate.getUser(this.email,this.password).subscribe(
        r => {
          if (r.token) {
            this.userservice.setToken(r.token);
            window.location.href = "/";
          }
        },
        r => {
          alert(r.error.error);
        });
  }
  
}
