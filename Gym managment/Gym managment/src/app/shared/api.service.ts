import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { RestaurentData } from '../restaurent-dash/restaurent.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;
  addRestaurent(restaurentModelObj: RestaurentData) {
    throw new Error('Method not implemented.');
  }

  constructor(private _http: HttpClient) { }
  //POST request
  postRestaurent(data:any ) {
    return this._http.post<any>("http://localhost:3000/posts", data).pipe(map((res:any)=>{
      return res;
    }))
  }
  //GET request
  getRestaurent() {
    return this._http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
      return res;
    }));
  }
  //delete request
  deleteRestaurant(id:number) {
    return this._http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{
      return res;
    }));
  }
  //update request
  updateRestaurant(id: number, data: any) {
    return this._http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>{
      return res;
    }));
  }

//Trainer Data
 //POST request
 postTrainer(data:any ) {
  return this._http.post<any>("http://localhost:3000/trainer", data).pipe(map((res:any)=>{
    return res;
  }))
}
//GET request
getTrainer() {
  return this._http.get<any>("http://localhost:3000/trainer").pipe(map((res:any)=>{
    return res;
  }));
}
//delete request
deleteTrainer(id:number) {
  return this._http.delete<any>("http://localhost:3000/trainer/"+id).pipe(map((res:any)=>{
    return res;
  }));
}
//update request
updateTrainer(id: number, data: any) {
  return this._http.put<any>("http://localhost:3000/trainer/"+id,data).pipe(map((res:any)=>{
    return res;
  }));
}


//Enquiry Data
 //POST request
 postenquiry(data:any ) {
  return this._http.post<any>("http://localhost:3000/enquirydata", data).pipe(map((res:any)=>{
    return res;
  }))
}
//GET request
getenquiry() {
  return this._http.get<any>("http://localhost:3000/enquirydata").pipe(map((res:any)=>{
    return res;
  }));
}
//delete request
deleteenquiry(id:number) {
  return this._http.delete<any>("http://localhost:3000/enquirydata/"+id).pipe(map((res:any)=>{
    return res;
  }));
}
//update request
updateenquiry(id: number, data: any) {
  return this._http.put<any>("http://localhost:3000/enquirydata/"+id,data).pipe(map((res:any)=>{
    return res;
  }));
}
}
