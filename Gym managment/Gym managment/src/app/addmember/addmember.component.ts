import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder  } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import {RestaurentData} from './addmember.model';

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.css']
})
export class AddmemberComponent implements OnInit {

  formValue!:FormGroup
  restaurentModelObj : RestaurentData = new RestaurentData;
  allRestaurentData: any;
  showAdd!:boolean;
  addmemberform!:boolean;
  viewprofileflag!:boolean;
  showBtn!:boolean;

  constructor(private formbuilder: FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: [''],
      joiningDate: [''],
      endDate: [''],
      lastname: [''],
      
    })
    this.getAllData();
  }
  clickAddResto(){
    this.formValue.reset();
    this.addmemberform = true;
    this.showAdd = true;
    this.showBtn = false;
  }
 
  addRestaurent(){
    this.restaurentModelObj.name = this.formValue.value.name;
    this.restaurentModelObj.email = this.formValue.value.email;
    this.restaurentModelObj.mobile = this.formValue.value.mobile;
    this.restaurentModelObj.address = this.formValue.value.address;
    this.restaurentModelObj.services = this.formValue.value.services;
    this.restaurentModelObj.lastname = this.formValue.value.lastname;
    this.restaurentModelObj.joiningDate = this.formValue.value.joiningDate;
    this.restaurentModelObj.endDate = this.formValue.value.endDate;


    this.api.postRestaurent(this.restaurentModelObj).subscribe(res => {
      console.log(res);
      alert("Member Added Successfully");
      this.formValue.reset();

      let ref= document.getElementById('close');
      ref?.click();

      this.getAllData();

    }, err=>{
      console.log(err);
      alert("Member Added Failed!");
    })
  }

  getAllData(){
    this.api.getRestaurent().subscribe(res => {
      this.allRestaurentData= res;
    }, err=>{
      console.log(err);
    })
  }

  deleteResto(data: any){
    this.api.deleteRestaurant(data).subscribe((res: any) => {
      console.log(res);
      alert("Member Deleted Successfully");
      this.getAllData();
    })
  }

  onEditResto(data: any){
    this.showAdd = false;
    this.showBtn = true;
    this.addmemberform = true;
    this.restaurentModelObj.id = data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['services'].setValue(data.services);
    this.formValue.controls['lastname'].setValue(data.lastname);
    this.formValue.controls['joiningDate'].setValue(data.joiningDate);
    this.formValue.controls['endDate'].setValue(data.endDate);
 
  }
  updateResto(){
    this.restaurentModelObj.name = this.formValue.value.name;
    this.restaurentModelObj.email = this.formValue.value.email;
    this.restaurentModelObj.mobile = this.formValue.value.mobile;
    this.restaurentModelObj.address = this.formValue.value.address;
    this.restaurentModelObj.services = this.formValue.value.services;
    this.restaurentModelObj.lastname = this.formValue.value.lastname;
    this.restaurentModelObj.joiningDate = this.formValue.value.joiningDate;
    this.restaurentModelObj.endDate = this.formValue.value.endDate;


    this.api.updateRestaurant(this.restaurentModelObj.id,this.restaurentModelObj).subscribe((res: any) => {
      alert("Member Updated Successfully");
      this.formValue.reset();

      let ref= document.getElementById('close');
      ref?.click();

      this.getAllData();

    })
    
  }
  closeflag(){
    this.addmemberform = false;
    this.viewprofileflag = false;
  }

  viewprofile(data: any){
    console.log("View Profile");
    this.showAdd = false;
    this.showBtn = true;
    this.viewprofileflag = true;
    this.restaurentModelObj.id = data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['services'].setValue(data.services);
    this.formValue.controls['lastname'].setValue(data.lastname);
    this.formValue.controls['joiningDate'].setValue(data.joiningDate);
    this.formValue.controls['endDate'].setValue(data.endDate);
 
  }

}
