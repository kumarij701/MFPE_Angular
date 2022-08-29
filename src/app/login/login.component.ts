import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from '../authorization.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean=false;
  agentName: string="";
  password:string="";

  constructor(private router: Router, private authservice:AuthorizationService) { }
  ngOnInit(): void {
    localStorage.removeItem("jwt");
  }

  public login = (form: NgForm) => {
    console.log(form.value);
    
    let userName=form.value.userName;
    let password=form.value.password;

    this.authservice.login(userName,password).subscribe(
      response => {
        const token = response;
        this.authservice.authtoken=token;
        this.agentName = userName;
        localStorage.setItem("jwt", token);
        localStorage.setItem("logInAgentName", this.agentName);
        localStorage.setItem("UserPassword",password);
        this.router.navigate(['/test-home'])
      }, err => {
        this.invalidLogin = true;
        console.log(err);
    });

  }

}
