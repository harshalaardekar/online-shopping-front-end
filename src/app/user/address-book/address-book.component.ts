import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/address';
import { CustomerService } from 'src/app/customer.service';
import { CustomerSignUp } from 'src/app/customerSignup';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.css']
})
export class AddressBookComponent implements OnInit {
  address?:Address[];
  customer: CustomerSignUp= new CustomerSignUp();
  constructor(private service:CustomerService ,private route:Router) { }

  ngOnInit(): void {
    this.customer=JSON.parse(sessionStorage.getItem("customerData"));
   console.log(this.customer);

   this.getAllAddress();
  }

  getAllAddress(){
    this.service.viewAllAdress(this.customer.customerId).subscribe(
      data=>{
        this.address = data;
      }
    )
  }

}
