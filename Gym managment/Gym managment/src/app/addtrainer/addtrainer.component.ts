import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder  } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import {RestaurentData} from './addtrainer.model';
@Component({
  selector: 'app-addtrainer',
  templateUrl: './addtrainer.component.html',
  styleUrls: ['./addtrainer.component.css']
})
export class AddtrainerComponent implements OnInit {

  formValue!:FormGroup
  restaurentModelObj : RestaurentData = new RestaurentData;
  allRestaurentData: any;
  showAdd!:boolean;
  addmemberform!:boolean;
  showBtn!:boolean;
  viewprofileflag!: boolean;

  constructor(private formbuilder: FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      name: [''],
      email: [''],
      gender: [''],
      mobile: [''],
      address: [''],
      services: [''],
      joiningDate: [''],
      shifttime: [''],
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
 
  postTrainer(){
    this.restaurentModelObj.name = this.formValue.value.name;
    this.restaurentModelObj.email = this.formValue.value.email;
    this.restaurentModelObj.gender = this.formValue.value.gender;
    this.restaurentModelObj.mobile = this.formValue.value.mobile;
    this.restaurentModelObj.address = this.formValue.value.address;
    this.restaurentModelObj.services = this.formValue.value.services;
    this.restaurentModelObj.lastname = this.formValue.value.lastname;
    this.restaurentModelObj.joiningDate = this.formValue.value.joiningDate;
    this.restaurentModelObj.shifttime = this.formValue.value.shifttime;

    this.api.postTrainer(this.restaurentModelObj).subscribe(res => {
      console.log(res);
      alert("Trainer Added Successfully");
      this.formValue.reset();

      let ref= document.getElementById('close');
      ref?.click();

      this.getAllData();

    }, err=>{
      console.log(err);
      alert("Trainer Added Failed!");
    })
  }

  getAllData(){
    this.api.getTrainer().subscribe(res => {
      this.allRestaurentData= res;
    }, err=>{
      console.log(err);
    })
  }

  deleteResto(data: any){
    this.api.deleteTrainer(data).subscribe((res: any) => {
      console.log(res);
      alert("Trainer Deleted Successfully");
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
    this.formValue.controls['gender'].setValue(data.gender);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['services'].setValue(data.services);
    this.formValue.controls['lastname'].setValue(data.lastname);
    this.formValue.controls['joiningDate'].setValue(data.joiningDate);
    this.formValue.controls['shifttime'].setValue(data.shifttime);

 
  }
  updateTrainer(){
    this.restaurentModelObj.name = this.formValue.value.name;
    this.restaurentModelObj.email = this.formValue.value.email;
    this.restaurentModelObj.gender = this.formValue.value.gender;
    this.restaurentModelObj.mobile = this.formValue.value.mobile;
    this.restaurentModelObj.address = this.formValue.value.address;
    this.restaurentModelObj.services = this.formValue.value.services;
    this.restaurentModelObj.lastname = this.formValue.value.lastname;
    this.restaurentModelObj.joiningDate = this.formValue.value.joiningDate;
    this.restaurentModelObj.shifttime = this.formValue.value.shifttime;



    this.api.updateTrainer(this.restaurentModelObj.id,this.restaurentModelObj).subscribe((res: any) => {
      alert("Trainer Updated Successfully");
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
