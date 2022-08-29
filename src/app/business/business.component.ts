import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service';
import { Business } from '../Models/Business';
import { BusinessInput } from '../Models/BusinessInput';
import { BusinessMaster } from '../Models/BusinessMaster';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  businesslist:Business[]=[];
  businessmasters:BusinessMaster[]=[];
  business:Business = {
        businessId: 0,
        businessName: "",
        businessType: "",
        totalEmployees: 0,
        businessMasterId: 0,
        consumerId: 0,
        businessMaster: {
        businessMasterId: 0,
        businessValue: 0,
        businessTurnOver: 0,
        capitalInvest: 0
        }
  };
  newbusiness:BusinessInput={
    businessName: "",
    businessType: "",
    totalEmployees: 0,
    consumerId: 0,
    businessTurnOver: 0,
    capitalInvest: 0
    }
    
  update_id:any;
  create_msg:string="";
  update_msg:string="";
  flag_get_businessmaster:boolean=false;
  flag_get_business:boolean=false;
  flag_post:boolean=false;
  flag_put:boolean=false;
  flag_insert_msg=false;
  flag_update_msg=false;

  constructor(private businessservice:BusinessService) { }

  ngOnInit(): void {
  }

  get_api_businessmaster()
  {
    this.businessservice.getBusinessMaster().subscribe(data=>{
      this.businessmasters=data;
      this.flag_get_businessmaster=true;
      this.flag_get_business=false;
      this.flag_post=false;
      this.flag_put=false;
      this.flag_insert_msg=false;
      this.flag_update_msg=false;
      console.log(this.businessmasters);
    });
  }

  get_api_business()
  {
    this.businessservice.getBusiness().subscribe(data=>{
      this.businesslist=data;
      this.flag_get_businessmaster=false;
      this.flag_get_business=true;
      this.flag_post=false;
      this.flag_put=false;
      this.flag_insert_msg=false;
      this.flag_update_msg=false;
      console.log(this.businesslist);
    });
  }

  post_api(business:Business):void
  {
    this.businessservice.addBusiness(business).subscribe(usdata=>{
    this.create_msg="Business Added Successfully!!!";
    this.flag_get_businessmaster=false;
    this.flag_get_business=false;
    this.flag_post=false;
    this.flag_put=false;
    this.flag_insert_msg=true;
    this.flag_update_msg=false;
    //Logging the response received from web api.
    console.log(usdata);
    })
  }

  put_api(id:number,data:any):void
  {
    this.businessservice.updateBusiness(id,data).subscribe(data=>{
    this.update_msg="Succesfully updated Business details with Id "+id;
    this.flag_get_businessmaster=false;
    this.flag_get_business=false;
    this.flag_post=false;
    this.flag_put=false;
    this.flag_insert_msg=false;
    this.flag_update_msg=true;
    console.log(data);
    })
  }

  btn_post_business(){
    this.flag_get_businessmaster=false;
    this.flag_get_business=false;
    this.flag_post=true;
    this.flag_put=false;
    this.flag_insert_msg=false;
    this.flag_update_msg=false;
  }

  btn_put_business(){
    this.flag_get_businessmaster=false;
    this.flag_get_business=false;
    this.flag_post=false;
    this.flag_put=true;
    this.flag_insert_msg=false;
    this.flag_update_msg=false;
  }


}
