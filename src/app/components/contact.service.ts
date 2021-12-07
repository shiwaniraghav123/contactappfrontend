import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Contact } from './contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  

  constructor(private http:HttpClient) { }


  public doRegistration(user: User):Observable<any>{
    return this.http.post("http://localhost:8082/registeruser",user,{responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.http.get("http://localhost:8082/getAllContacts");
  }

  public getUserById(id: string){
    return this.http.get("http://localhost:8082/findcontacts/"+id);
  }

  public deleteUser(id: string){
    return this.http.delete("http://localhost:8082/deletecontacts/"+id);
  }
  public addcontact(contact:Contact):Observable<any>{
    return this.http.post("http://localhost:8082/createcontacts",contact,{responseType:'text' as 'json'});
  }
}
