import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegResponse } from 'src/app/regresponse';
import { RetailerLoginService } from 'src/app/retailer-login.service';
import { Retailersignup } from 'src/app/retailersignup';

@Component({
  selector: 'app-retailer-register',
  templateUrl: './retailer-register.component.html',
  styleUrls: ['./retailer-register.component.css']
})
export class RetailerRegisterComponent implements OnInit {

  retailerreg: Retailersignup=new Retailersignup();
  message: string="";
  regResponse:RegResponse = new RegResponse();
  
  // isValid: boolean=false;
  constructor(private service:RetailerLoginService, private route:Router) { }

  ngOnInit(): void {
  }

  register(){
    this.service.signupRetailer(this.retailerreg).subscribe(
      response=>{
        this.regResponse=response;
        console.log(JSON.stringify(this.regResponse));
        alert("Registration Successful... Please upload documents to confirm registration ")
        // console.log("retailer",JSON.stringify(this.regResponse.userId));
      }
    )
  }

  addharCard:any;
  retailerId:any;
  panCard:any;
  retailerCertificate:any;

  onFileChange(event){
    this.addharCard=event.target.files[0];
  }
  upload() {
    let formData = new FormData();
    formData.append('retailerId',this.regResponse.retailerId.toString());
    formData.append('addharCard', this.addharCard);
    this.service.upload(formData)
      .subscribe(
        data => {
          alert("Adhaar Card Uploaded Successfully");
        }
       
    );
  }

  onFileChange1(event){
    this.panCard=event.target.files[0];
  }
  uploadpan() {
    let formData = new FormData();
    formData.append('retailerId',this.regResponse.retailerId.toString());
    formData.append('panCard', this.panCard);
    this.service.uploadpan(formData)
      .subscribe(
        data => {
          alert("Pan Card Uploaded Successfully");
        }
       
    );
  }


  onFileChange2(event){
    this.retailerCertificate=event.target.files[0];
  }
  uploadcert() {
    let formData = new FormData();
    formData.append('retailerId',this.regResponse.retailerId.toString());
    formData.append('retailerCertificate', this.retailerCertificate);
    this.service.uploadCert(formData)
      .subscribe(
        data => {
          alert("Retailer Certificate Uploaded Successfully \n Wait for approval to start your business!!!");
          this.route.navigate(['/retailer-login']);
        }
    );
  }

}
  
