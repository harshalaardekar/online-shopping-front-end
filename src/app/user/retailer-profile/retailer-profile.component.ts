import { Component, OnInit } from '@angular/core';
import { Retailersignup } from 'src/app/retailersignup';

@Component({
  selector: 'app-retailer-profile',
  templateUrl: './retailer-profile.component.html',
  styleUrls: ['./retailer-profile.component.css']
})
export class RetailerProfileComponent implements OnInit {

  isValid :boolean;
  message:String;
  retailer: Retailersignup= new Retailersignup();
  
  constructor() { }

  ngOnInit(): void {
    this.retailer=JSON.parse(sessionStorage.getItem("retailerData"));
    console.log(this.retailer);
    // console.log(retailer);

  }

}