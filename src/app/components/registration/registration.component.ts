import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegistationService } from '../user-registation.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  user=new User("","","");
  message:any;

  constructor(private service:UserRegistationService, private _router :Router) { }

  ngOnInit() {
  }
  

  public registerNow(){
let resp=this.service.doRegistration(this.user);
resp.subscribe((data)=>this.message=data);
  }

  registerUser(){
    this.service.doRegistration(this.user).subscribe(
      data => console.log("response recieved"),
      error => console.log("exception occured")
     
      
    )
  }

}
