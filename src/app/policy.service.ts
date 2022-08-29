import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsumerPolicy } from './Models/ConsumerPolicy';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  constructor(private http:HttpClient) { }

  //TODO check for URL
  ApiURL:string =   "https://policyapi20220321163447.azurewebsites.net/api/Policy";  //"https://localhost:44312/api/Policy";

  getConsumerPolicies():Observable<ConsumerPolicy[]>
  {
    var headersForTokenAPI=new HttpHeaders();

    if(localStorage.getItem("jwt")){
      headersForTokenAPI=new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem("jwt"));
    }
    return this.http.get<ConsumerPolicy[]>(this.ApiURL + '/ConsumerPolicies/',
    { headers:headersForTokenAPI});
  }
  
   createPolicy(propertyId:number):Observable<any>{
    return this.http.post<any>(this.ApiURL + '/CreatePolicy?propertyId='+propertyId,null,
    {
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*',
        'Authorization':'Bearer '+localStorage.getItem("jwt")
      })
    });
  }
  
  // https://localhost:44312/api/Policy/IssuePolicy?policyId=1&paymentDetails=Paid

  issuePolicy(id:number,payment:any):Observable<any>{
    console.log(id);
  
    return this.http.put<any>(this.ApiURL+'/IssuePolicy?policyId='+id+'&paymentDetails='+payment,null,
    {
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*',
        'Authorization':'Bearer '+localStorage.getItem("jwt")
        
      })
    });
  }
}
