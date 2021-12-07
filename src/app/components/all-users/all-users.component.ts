import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { UserRegistationService } from '../user-registation.service';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {
contacts:any;
  users : any;

  constructor(private service : ContactService) { }

  ngOnInit() {
    let response = this.service.getUsers();
    response.subscribe(data => this.contacts = data);
  }

  public removeUser(username : string){
    let response = this.service.deleteUser(username);
    response.subscribe(data => this.contacts = data);
  }

}
