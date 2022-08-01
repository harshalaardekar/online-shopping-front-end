import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { CustomerSignUp } from 'src/app/customerSignup';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  isValid :boolean;
  message:String;
  customer: CustomerSignUp= new CustomerSignUp();
  constructor(private service:CustomerService ,private route:Router) { }

  ngOnInit(): void {
   this.customer=JSON.parse(sessionStorage.getItem("customerData"));
   console.log(this.customer);
  }
  public viewprofile(){

  let res=this.service.ViewProfileCustomer(this.customer.emailId);
  res.subscribe(  msg=>{
       //this.isValid=msg;
        if(this.isValid){
          ///sessionStorage.setItem("un", this.customer.emailId);
           this.route.navigate(['/myaccount']);
            //this.message="";
        }
          else{
            this.message="Failed";
        }
     });
  }
}
