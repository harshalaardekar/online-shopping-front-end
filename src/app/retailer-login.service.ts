import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegResponse } from './regresponse';
import { Retailerlogin } from './retailerlogin';
import { Retailersignup } from './retailersignup';

@Injectable({
  providedIn: 'root'
})
export class RetailerLoginService {

  constructor(private http:HttpClient) { }
  loginRetailer(retailerreg:Retailerlogin):Observable<boolean>{
    return this.http.post<boolean>
    ("http://localhost:9090/retailer/login",retailerreg);
  }
  // signupRetailer(retailerreg:Retailersignup):Observable<boolean>{
  //   return this.http.post<boolean>
  //   ("http://localhost:9090/retailer/signup",retailerreg);
  // }

  signupRetailer( retailerReg: Retailersignup):Observable<RegResponse>{
    return this.http.post<RegResponse>
    ("http://localhost:9090/retailer/signup",retailerReg);
    
  }
  upload(formData:FormData){
    return this.http.post("http://localhost:9090/retailer/pic-upload",formData,{responseType:'text'});
  }

  uploadpan(formData:FormData){
    return this.http.post("http://localhost:9090/retailer/panupload",formData,{responseType:'text'});
  } 

  uploadCert(formData:FormData){
    return this.http.post("http://localhost:9090/retailer/certupload",formData,{responseType:'text'});
  } 


  retailerProfile(retailerId: number):Observable<Retailersignup>{
    return this.http.get<Retailersignup>("http://localhost:9090/retailer/viewProfileDetails/"+retailerId);
  }
  

}
