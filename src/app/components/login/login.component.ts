import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

msg ='';
  credentials={
    username:'',
    password:''
  }

  constructor(private loginService:LoginService, private _router :Router) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log("form is submitted");
    if((this.credentials.username!='' && this.credentials.username!='' )&& (this.credentials.username!=null && this.credentials.username!=null))
    {
      console.log("We have to submit the form");
      //token generate
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{
          //success
          console.log(response.token);
          this.loginService.loginUser(response.token)
          window.location.href="/dashboard"
          this._router.navigate(['/dashboard'])
        },
        error=>{
          console.log(error);
          this.msg="Please enter valid email id and password";
        }
      )

    }else
    console.log("Fields are empty !!");
    
    
  }
}
