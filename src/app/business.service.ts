import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Business } from './Models/Business';
import { BusinessMaster } from './Models/BusinessMaster';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http:HttpClient) { }

  ApiURL:string =   "https://consumermicroservice20220321114330.azurewebsites.net/api/Consumer" ;//"https://localhost:7214/api/Consumer";

  getBusinessMaster():Observable<BusinessMaster[]>
  {
    var headersForTokenAPI=new HttpHeaders();

    if(localStorage.getItem("jwt")){
      headersForTokenAPI=new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem("jwt"));
    }
    return this.http.get<BusinessMaster[]>(this.ApiURL + '/GetBusinessMaster/',
    { headers:headersForTokenAPI});
  }

  getBusiness():Observable<Business[]>
  {
    var headersForTokenAPI=new HttpHeaders();

    if(localStorage.getItem("jwt")){
      headersForTokenAPI=new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem("jwt"));
    }
    return this.http.get<Business[]>(this.ApiURL + '/GetBusiness/',
    { headers:headersForTokenAPI});
  }

  addBusiness(business:Business):Observable<Business>{
    console.log(business);
    return this.http.post<Business>(this.ApiURL + '/CreateBusiness/',business,
    {
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*',
        'Authorization':'Bearer '+localStorage.getItem("jwt")
      })
    });
  }

  updateBusiness(id:number,business:any):Observable<Business>{
    console.log(business);
    return this.http.put<any>(this.ApiURL+'/UpdateBusiness?BusinessId='+id,business,
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
