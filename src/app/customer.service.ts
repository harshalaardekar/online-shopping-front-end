import { Injectable } from '@angular/core';
import { CustomerLogin } from './customerLogin';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CustomerSignUp } from './customerSignup';
import { Custupdatepassword } from './custupdatepassword';
import { Address } from './address';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

loginCustomer(customer:CustomerLogin):Observable<boolean>{
    return this.http.post<boolean>
    ("http://localhost:9090/customer/login",customer);
}
SignUpCustomer(customer:CustomerSignUp):Observable<boolean>{
  return this.http.post<boolean>
  ("http://localhost:9090/customer/signup",customer);
}
UpdatePasswordCustomer(customer:Custupdatepassword):Observable<boolean>{
  return this.http.put<boolean>
  ("http://localhost:9090/customer/updatePass",customer);
}
ViewProfileCustomer(emailId: string):Observable<CustomerSignUp>{
  //return this.http.get<CustomerSignUp>("http://localhost:9090/customer/viewProfile?emailId="+emailId);
  return this.http.get<CustomerSignUp>("http://localhost:9090/customer/viewProfileDetails/"+emailId);
}

viewAllAdress(customerId:number):Observable<Address[]>{
  return this.http.get<Address[]>("http://localhost:9090/customer/viewallAddress/"+customerId);
}

addAddressCustomer(address:Address):Observable<boolean>{

  return this.http.post<boolean>

  ("http://localhost:9090/customer/addAddress",address);

}


}