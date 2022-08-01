import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RetailerLoginService } from 'src/app/retailer-login.service';
import { Retailerlogin } from 'src/app/retailerlogin';
import { Retailersignup } from 'src/app/retailersignup';

@Component({
  selector: 'app-retailer-login',
  templateUrl: './retailer-login.component.html',
  styleUrls: ['./retailer-login.component.css']
})
export class RetailerLoginComponent implements OnInit {
  retailerreg: Retailerlogin=new Retailerlogin();
  retailer : Retailersignup=new Retailersignup();
  message: string="";
  isValid: boolean=false;
  constructor(private service:RetailerLoginService, private route:Router) { }

  ngOnInit(): void {
  }
  public retailerLogin(){
    let res=this.service.loginRetailer(this.retailerreg);
  res.subscribe(  msg=>{
       this.isValid=msg;
        if(this.isValid){

          this.service.retailerProfile(this.retailerreg.id).subscribe(
            retailer=>{
              this.retailer=retailer;
              sessionStorage.setItem("retailerData",JSON.stringify(this.retailer));
              console.log(JSON.stringify(this.retailer));
              
              alert("Login Successful!!!");
              this.route.navigate(['/retailer']);
            }
          )
        }
        if(!this.isValid){
            alert("Invalid Credentials Or Accound Under Verification");
          this.message="Invalid Credentials Or Accound Under Verification";
        }
     });
  }
}
