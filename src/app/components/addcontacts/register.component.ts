import { Component, OnInit } from '@angular/core';

import { UserRegistationService } from '../user1-registation.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  contact=new Contact("","","");
  
 
  message : any;
  
  

  constructor(private service : ContactService, private _router :Router ) { }

  ngOnInit() {
   
  }

  public addNow(){
    let reponse = this.service.addcontact(this.contact);
    reponse.subscribe((data: any) => {
      this.message = data;
    });
  }

  addcontact(){
    this.service.addcontact(this.contact).subscribe(
      data => console.log("response recieved"),
      error => console.log("exception occured")
     
      
    )

}
}
