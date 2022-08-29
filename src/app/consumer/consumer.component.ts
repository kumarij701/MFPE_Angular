import { DatePipe, DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsumerService } from '../consumer.service';
import { BusinessMaster } from '../Models/BusinessMaster';
import { ConsumerModel } from '../Models/ConsumerModel';
import { PropertyMaster } from '../Models/PropertyMaster';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {

  consumers:ConsumerModel[]=[];
  consumer:any;
  consumer_id:number=0;
  businessmasters:BusinessMaster[]=[];
  create_msg:string="";
  update_msg:string="";
  update_id:any=null;
  
  cdetails:ConsumerModel={
    consumerId : 0,
    consumerName : "",
    dateOfBirth : new Date(),
    email : "",
    panNumber : "",
    agentId : 0
  };

  flag_get_c:boolean=false;
  flag_get_bm:boolean=false;
  flag_get_pm:boolean=false;
  flag_get_cid:boolean=false;
  flag_get_ciddetails:boolean=false;
  flag_post:boolean=false;
  flag_put:boolean=false;
  flag_insert_msg:boolean=false;
  flag_update_msg:boolean=false;
  
  consumerForm!: FormGroup;

  constructor(private service:ConsumerService,private formBuilder:FormBuilder) { }
 
  ngOnInit(): void {
    this.consumerForm=this.formBuilder.group({
      consumerName:['',Validators.required],
      dateOfBirth:['yyyy-mm-dd',Validators.required],
      email:['',[Validators.required,Validators.email]],
      panNumber:['',[Validators.required,Validators.minLength(6)]],
      agentId:['',Validators.required]
    })
  }

  get_api_consumer()
  {
    this.service.getConsumerList().subscribe(data=>{
      this.consumers=data;
      this.flag_get_c=true;
      this.flag_get_ciddetails=false;
      this.flag_get_bm=false;
      this.flag_get_pm=false;
      this.flag_post=false;
      this.flag_put=false;
      this.flag_insert_msg=false;
      this.flag_update_msg=false;
      console.log(this.consumers);
    });
  }

  get_api_businessmaster()
  {
    this.service.getBusinessMaster().subscribe(data=>{
      this.businessmasters=data;
      this.flag_get_c=false;
      this.flag_get_bm=true;
      this.flag_get_pm=false;
      this.flag_post=false;
      this.flag_put=false;
      this.flag_insert_msg=false;
      this.flag_update_msg=false;
      console.log(this.businessmasters);
    });
  }

  get_api_consumerById(id:number)
  {
    this.service.getConsumerById(id).subscribe(data=>{
      this.consumer=data;
      this.flag_get_c=false;
      this.flag_get_bm=false;
      this.flag_get_pm=false;
      this.flag_get_cid=false;
      this.flag_get_ciddetails=true;
      this.flag_post=false;
      this.flag_put=false;
      this.flag_insert_msg=false;
      this.flag_update_msg=false;
      console.log(this.consumer);
    });
  }

  post_api(consumer:ConsumerModel):void
  {
    this.service.addConsumer(consumer).subscribe(usdata=>{
    this.create_msg="Consumer Added Successfully!!!";
    this.flag_get_c=false;
    this.flag_get_bm=false;
    this.flag_get_pm=false;
    this.flag_get_cid=false;
    this.flag_get_ciddetails=false;
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
    this.service.updateConsumer(id,data).subscribe(data=>{
    this.update_msg="Succesfully updated User Story details with Id "+id;
    this.flag_get_c=false;
    this.flag_get_bm=false;
    this.flag_get_pm=false;
    this.flag_get_cid=false;
    this.flag_get_ciddetails=false;
    this.flag_post=false;
    this.flag_put=false;
    this.flag_update_msg=true;
    this.flag_insert_msg=false;
    console.log(data);
    })
  }
  
  btn_cid()
  {
    this.flag_get_c=false;
    this.flag_get_bm=false;
    this.flag_get_pm=false;
    this.flag_get_cid=true;
    this.flag_get_ciddetails=false;
    this.flag_put=false;
    this.flag_insert_msg=false;
    this.flag_update_msg=false;
  }

  btn_post()
  {
    this.flag_get_c=false;
    this.flag_get_bm=false;
    this.flag_get_pm=false;
    this.flag_get_cid=false;
    this.flag_get_ciddetails=false;
    this.flag_post=true;
    this.flag_put=false;
    this.flag_insert_msg=false;
    this.flag_update_msg=false;
  }

  btn_put()
  {
    this.flag_get_c=false;
    this.flag_get_bm=false;
    this.flag_get_pm=false;
    this.flag_get_cid=false;
    this.flag_get_ciddetails=false;
    this.flag_post=false;
    this.flag_put=true;
    this.update_id=null;
    this.flag_insert_msg=false;
    this.flag_update_msg=false;
  }

}
