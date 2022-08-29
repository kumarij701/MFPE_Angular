import { Component, OnInit } from '@angular/core';
import { ConsumerPolicy } from '../Models/ConsumerPolicy';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {

  consumerpolicies:ConsumerPolicy[]=[];
  flag_get_consumerpolicies:boolean=false;
  flag_insert_msg:boolean=false;
  flag_update_msg:boolean=false;
  create_msg:string="";
  update_msg:string="";
  flag_post:boolean=false;
  flag_put:boolean=false;
  propertyId:number=0;
  policyId:number=0;
  paymentDetails:string="";

  constructor(private policyservice:PolicyService) { }

  ngOnInit(): void {
  }

  get_api_consumerpolicies()
  {
    this.policyservice.getConsumerPolicies().subscribe(data=>{
      this.consumerpolicies=data;
      this.flag_get_consumerpolicies=true;
      this.flag_insert_msg=false;
      this.flag_update_msg=false;
      this.flag_post=false;
      this.flag_put=false;
      console.log(this.consumerpolicies);
    });
  }

  post_api(propertyId:number):void
  {
    this.policyservice.createPolicy(propertyId).subscribe(usdata=>{
    this.create_msg="Policy has been Initiated!!!";
    this.flag_insert_msg=true;
    this.flag_update_msg=false;
    this.flag_get_consumerpolicies=false;
    this.flag_post=false;
    this.flag_put=false;
    //Logging the response received from web api.
    console.log(usdata);
    })
  }

  put_api(id:number,paymentDetails:string):void
  {
    this.policyservice.issuePolicy(id,paymentDetails).subscribe(data=>{
    this.update_msg="Policy has been Issued to the id "+id;
    this.flag_insert_msg=false;
    this.flag_update_msg=true;
    this.flag_get_consumerpolicies=false;
    this.flag_post=false;
    this.flag_put=false;
    console.log(data);
    })
  }

  post_api_create_policy(){
    this.flag_get_consumerpolicies=false;
    this.flag_insert_msg=false;
    this.flag_update_msg=false;
    this.flag_post=true;
    this.flag_put=false;
  }

  put_api_update_policy(){
    this.flag_get_consumerpolicies=false;
    this.flag_insert_msg=false;
    this.flag_update_msg=false;
    this.flag_post=false;
    this.flag_put=true;
  }


}
