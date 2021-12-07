import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8080"

  constructor(private http:HttpClient) { }

  //calling the server to generate token

  generateToken(credentials:any)
  //token genearte
{
return this.http.post(`${this.url}/authenticate`,credentials)
}



  //for login user
  loginUser(token: string)
  {
    localStorage.setItem("token",token)
    return true;
  }

  //to check user is loggen in or not
  isLoggedIn()
  {
    let token=localStorage.getItem("token");
    if(token==undefined || token=='' || token==null)
    {
      return false;
    }else{
      return true;
    }
  }

//for logout the user
  logout(){
    localStorage.removeItem('token');
    return true;
  }

  //for getting the token 
  getToken()
  {
    return localStorage.getItem("token")
  }
}
