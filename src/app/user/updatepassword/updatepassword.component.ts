import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { CustomerSignUp } from 'src/app/customerSignup';
import { Custupdatepassword } from 'src/app/custupdatepassword';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {
  customer: Custupdatepassword=new Custupdatepassword();
  isValid :boolean;
  message:String;
  cust: CustomerSignUp=new CustomerSignUp();
  constructor(private service:CustomerService ,private route:Router) { }

  ngOnInit(): void {
    
   this.cust=JSON.parse(sessionStorage.getItem("customerData"));
   this.customer.id=this.cust.customerId;
   console.log(this.customer);
  }
  public CustomerUpdatePass(){
    
    let res=this.service.UpdatePasswordCustomer(this.customer);
  res.subscribe(  msg=>{
       this.isValid=msg;
        if(this.isValid){
          
          alert("Password Updated Successfully");
          this.route.navigate(['/myaccount']);
          // alert to put that password changed successfully
        }
          else{
            this.message="Update Failed";
        }
     });
}


}