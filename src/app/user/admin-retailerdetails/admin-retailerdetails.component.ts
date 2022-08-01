import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLoginServiceService } from 'src/app/admin-login-service.service';
import { Retailersignup } from 'src/app/retailersignup';

@Component({
  selector: 'app-admin-retailerdetails',
  templateUrl: './admin-retailerdetails.component.html',
  styleUrls: ['./admin-retailerdetails.component.css']
})
export class AdminRetailerdetailsComponent implements OnInit {
  message:String;
  isValid:boolean;
  retailer: Retailersignup=new Retailersignup();
  constructor(private service:AdminLoginServiceService, private route:Router) { }

  ngOnInit(): void {
    
    this.retailer=JSON.parse(sessionStorage.getItem("retailer"));
    console.log(this.retailer);
  }
approveRetailer(){
  let res=this.service.approveRetailer(this.retailer.retailerId);
  res.subscribe(  msg=>{
       this.isValid=msg;
        if(this.isValid){
           this.route.navigate(['/admin-approve-retailer']);
            alert("Approved Retailer Successfully");
        }
          else{
            this.message="Failed";
        }
     });
  }
  removeRetailer(){
    let res=this.service.removeRetailer(this.retailer.retailerId);
    res.subscribe(  msg=>{
         this.isValid=msg;
          if(this.isValid){
             this.route.navigate(['/admin-approve-retailer']);
              alert("Removed Retailer Successfully");
          }
            else{
              this.message="Failed";
          }
       });
    }
}