import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  authtoken:string="";
  un:boolean=false;
  constructor(private http: HttpClient) { }

  login(username:any,password:any):Observable<any>
  {
    return this.http.post("https://localhost:7189/api/Auth", {"username":username,"password":password},
    
        // https://localhost:7189/api/Auth", {"username":username,"password":password},
        //"https://authorizationapi20220321121101.azurewebsites.net/api/Auth"
     {
        responseType: 'text',
        
      });    
  
  }

  loggedIn()
  {
    let token= !!localStorage.getItem("jwt");
    console.log(token)
    return token
  }
 
  
}

