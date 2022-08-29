import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ConsumerModel } from './Models/ConsumerModel';
import { BusinessMaster } from './Models/BusinessMaster';

@Injectable({
  providedIn: 'root'
})

export class ConsumerService {
  constructor(private http:HttpClient) { }

  //TODO check for URL
  ApiURL:string =   "https://consumermicroservice20220321114330.azurewebsites.net/api/Consumer";  //https://localhost:7214/api/Consumer";
  
  getConsumerList():Observable<ConsumerModel[]>
  {
    var headersForTokenAPI=new HttpHeaders();

    if(localStorage.getItem("jwt")){
      headersForTokenAPI=new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem("jwt"));
    }
    console.log(headersForTokenAPI);
    return this.http.get<ConsumerModel[]>(this.ApiURL + '/GetConsumer/',
    { headers:headersForTokenAPI});
    
  }

  getBusinessMaster():Observable<BusinessMaster[]>
  {
    return this.http.get<BusinessMaster[]>(this.ApiURL + '/GetBusinessMaster/');
  }

  addConsumer(consumer:ConsumerModel):Observable<ConsumerModel>{
    console.log(consumer);
    return this.http.post<ConsumerModel>(this.ApiURL + '/CreateConsumer/',consumer,
    {
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*',
        'Authorization':'Bearer '+localStorage.getItem("jwt")
      })
    });
  }

  updateConsumer(id:number,consumer:any):Observable<ConsumerModel>{
    console.log(consumer);
    return this.http.put<any>(this.ApiURL+'/UpdateConsumer?ConsumerId='+id,consumer,
    {
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*',
        'Authorization':'Bearer '+localStorage.getItem("jwt")
      })
    });
  }


  getConsumerById(consumerId:number)
  {
    return this.http.get(this.ApiURL + '/GetConsumerById?ConsumerId=' + consumerId,
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
