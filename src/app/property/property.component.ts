import { Component, OnInit } from '@angular/core';
import { Property } from '../Models/Property';
import { PropertyInput } from '../Models/PropertyInput';
import { PropertyMaster } from '../Models/PropertyMaster';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  properties:Property[]=[];
  propertymasters:PropertyMaster[]=[];
  property:Property = {
    propertyId: null,
    buildingType: "",
    buildingStoreys: null,
    buildingAge: null,
    businessId: null,
    propertyMasterId: null,
    propertyMaster: {
      propertyMasterId: null,
      costOfAssest: null,
      salvageValue: null,
      usefulLifeOfAssest: null,
      propertyValue: null,
    }
  };
    newproperty:PropertyInput={
    buildingType: "",
    buildingStoreys: 0,
    buildingAge: 0,
    businessId: 0,
    costOfAssest: 0,
    salvageValue: 0,
    usefulLifeOfAssest: 0
    }

  update_id:any;
  create_msg:string="";
  update_msg:string="";
  flag_get_propertymaster:boolean=false;
  flag_get_property:boolean=false;
  flag_post:boolean=false;
  flag_put:boolean=false;
  flag_insert_msg=false;
  flag_update_msg=false;

  constructor(private propertyservice:PropertyService) { }

  ngOnInit(): void {
  }

  get_api_propertymaster()
  {
    this.propertyservice.getPropertyMaster().subscribe(data=>{
      this.propertymasters=data;
      this.flag_get_propertymaster=true;
      this.flag_get_property=false;
      this.flag_post=false;
      this.flag_put=false;
      this.flag_insert_msg=false;
      this.flag_update_msg=false;
      console.log(this.propertymasters);
    });
  }

  get_api_property()
  {
    this.propertyservice.getProperty().subscribe(data=>{
      this.properties=data;
      this.flag_get_propertymaster=false;
      this.flag_get_property=true;
      this.flag_post=false;
      this.flag_put=false;
      this.flag_insert_msg=false;
      this.flag_update_msg=false;
      console.log(this.properties);
    });
  }

  post_api(property:Property):void
  {
    this.propertyservice.addProperty(property).subscribe(usdata=>{
    this.create_msg="Property Added Successfully!!!";
    this.flag_get_propertymaster=false;
    this.flag_get_property=false;
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
    this.propertyservice.updateProperty(id,data).subscribe(data=>{
    this.update_msg="Succesfully updated Property details with Id "+id;
    this.flag_get_propertymaster=false;
    this.flag_get_property=false;
    this.flag_post=false;
    this.flag_put=false;
    this.flag_insert_msg=false;
    this.flag_update_msg=true;
    console.log(data);
    })
  }

  btn_post_property(){
    this.flag_get_propertymaster=false;
    this.flag_get_property=false;
    this.flag_post=true;
    this.flag_put=false;
    this.flag_insert_msg=false;
    this.flag_update_msg=false;
  }

  btn_put_property(){
    this.flag_get_propertymaster=false;
    this.flag_get_property=false;
    this.flag_post=false;
    this.flag_put=true;
    this.flag_insert_msg=false;
    this.flag_update_msg=false;
  }

}
