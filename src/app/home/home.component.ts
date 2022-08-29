import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  agentName!: string | null;
  invalidLogin:boolean=false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.agentName = localStorage.getItem("logInAgentName");
  }

  isUserAuthenticated() {
    const token : string | null = localStorage.getItem("jwt");
    if (token != "Agent Not Found") {
      return true;
    }
    else {
      this.invalidLogin=true;
      return false;
    }
  }
}
