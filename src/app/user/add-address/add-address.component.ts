import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/address';
import { CustomerService } from 'src/app/customer.service';
import { CustomerSignUp } from 'src/app/customerSignup';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
  address: Address=new Address()
  cust: CustomerSignUp=new CustomerSignUp();
  isValid :boolean;
  message:String;
  constructor(private service:CustomerService,private route:Router) { }

  ngOnInit(): void {
   this.cust=JSON.parse(sessionStorage.getItem("customerData"));
   this.address.customerId=this.cust.customerId;
  
   console.log(this.address);
  }
  public CustomerAddAddress(){
    
    let res=this.service.addAddressCustomer(this.address);
  res.subscribe(  msg=>{
       this.isValid=msg;
       if(this.isValid){
        alert("Address added Successfully");
        this.route.navigate(['/alladdress']);
       }
      //   if(this.isValid){
      //     this.service.viewAllAdress(this.cust.customerId).subscribe(
      //       address=>{
      //         this.address=address;
      //       sessionStorage.setItem("CustomerAddress",JSON.stringify(this.address));
      //       console.log(JSON.stringify(this.address));
        
      //     alert("Address added Successfully");
      //     this.route.navigate(['/myaccount']);
      //     // alert to put that password changed successfully
      //   }
      //     )
      // }
          else{
            this.message="Failed";
        }
     });
}
}
