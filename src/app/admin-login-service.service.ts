import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from './admin';
import { Observable } from 'rxjs';
import { Retailersignup } from './retailersignup';
@Injectable({
  providedIn: 'root'
})
export class AdminLoginServiceService {

  constructor(private http:HttpClient) { }

  loginAdmin(admin:Admin):Observable<boolean>{
    return this.http.post<boolean>
    ("http://localhost:9090/admin/login",admin);
}

viewAllRetailers():Observable<Retailersignup[]>{
  return this.http.get<Retailersignup[]>("http://localhost:9090/admin/retailerRequests");

}

retailerProfile(retailerId: number):Observable<Retailersignup>{
  return this.http.get<Retailersignup>("http://localhost:9090/retailer/viewProfileDetails/"+retailerId);
}
approveRetailer(retailerId:number):Observable<boolean>{
  return this.http.get<boolean>("http://localhost:9090/admin/approveRetailer/"+retailerId);
}
removeRetailer(retailerId:number):Observable<boolean>{
  return this.http.delete<boolean>("http://localhost:9090/admin/removeRetailer/"+retailerId);
}

}
