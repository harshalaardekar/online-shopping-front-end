import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLoginServiceService } from 'src/app/admin-login-service.service';
import { Retailersignup } from 'src/app/retailersignup';

@Component({
  selector: 'app-admin-approve-retailer',
  templateUrl: './admin-approve-retailer.component.html',
  styleUrls: ['./admin-approve-retailer.component.css']
})
export class AdminApproveRetailerComponent implements OnInit {

  retailer?:Retailersignup[];
  constructor(private service:AdminLoginServiceService,private route:Router) { }

  ngOnInit(): void {
    // this.retailer=JSON.parse(sessionStorage.getItem("retailerData"));
    this.getAllretailers();  

  }

  getAllretailers(){
    this.service.viewAllRetailers().subscribe(
      data=>{
        this.retailer = data;
      }
    )
    console.log(JSON.stringify(this.retailer));
  }

  retailerInformation(u:any){
      
      sessionStorage.setItem("retailer",JSON.stringify(u));
      console.log(JSON.stringify(u));
      this.route.navigate(['admin-retailerdetails']);
  }

}