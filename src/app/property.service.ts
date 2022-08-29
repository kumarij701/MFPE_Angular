import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from './Models/Property';
import { PropertyMaster } from './Models/PropertyMaster';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http:HttpClient) { }

  ApiURL:string =  "https://consumermicroservice20220321114330.azurewebsites.net/api/Consumer";  //"https://localhost:7214/api/Consumer";
  
  getPropertyMaster():Observable<PropertyMaster[]>
  {
    var headersForTokenAPI=new HttpHeaders();

    if(localStorage.getItem("jwt")){
      headersForTokenAPI=new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem("jwt"));
    }
    return this.http.get<PropertyMaster[]>(this.ApiURL + '/GetPropertyMaster/',
    { headers:headersForTokenAPI});
  }

  getProperty():Observable<Property[]>
  {
    var headersForTokenAPI=new HttpHeaders();

    if(localStorage.getItem("jwt")){
      headersForTokenAPI=new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem("jwt"));
    }
    return this.http.get<Property[]>(this.ApiURL + '/GetProperty/',
    { headers:headersForTokenAPI});
  }

  addProperty(property:Property):Observable<Property>{
    console.log(property);
    return this.http.post<Property>(this.ApiURL + '/CreateProperty/',property,
    {
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*',
        'Authorization':'Bearer '+localStorage.getItem("jwt")
      })
    });
  }

  updateProperty(id:number,property:any):Observable<Property>{
    console.log(property);
    return this.http.put<any>(this.ApiURL+'/UpdateProperty?PropertyId='+id,property,
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
