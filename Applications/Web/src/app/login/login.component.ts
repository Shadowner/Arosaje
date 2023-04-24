import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  identifiedUser: string = "Thibaut"
  passwordUser:string = "azerty"


  constructor(private router: Router) { }

  login(){
    if(this.identifiedUser == "Thibaut" && this.passwordUser == "azerty"){
      this.router.navigate(['dashboard'])
    }
  }

}
