import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { UserRegistationService } from '../user-registation.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  
  contacts : any;

  constructor(private service : ContactService) { }

  ngOnInit() {
    let resp=this.service.getUsers();
    resp=subscribe((data: any)=>this.contacts=data);
  }

  public findUserByUsername(){
    
  }

}
function subscribe(arg0: (data: any) => any): import("rxjs").Observable<Object> {
  throw new Error('Function not implemented.');
}

