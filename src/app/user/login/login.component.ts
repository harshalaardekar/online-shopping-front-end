import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/customer';
import { CustomerService } from 'src/app/customer.service';
import { CustomerLogin } from 'src/app/customerLogin';
import { CustomerSignUp } from 'src/app/customerSignup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: CustomerLogin=new CustomerLogin();
  isValid :boolean;
  message:String;
  customer: CustomerSignUp=new CustomerSignUp() ;

  constructor(private service:CustomerService ,private route:Router) { }
 
  ngOnInit(): void {
  }
  public CustomerLogin(){
    let res=this.service.loginCustomer(this.login);
    res.subscribe(  msg=>{
         this.isValid=msg;
          if(this.isValid){
            this.service.ViewProfileCustomer(this.login.emailId).subscribe(
              customer=>{
                this.customer=customer;
                sessionStorage.setItem("customerData",JSON.stringify(this.customer));
                //console.log(JSON.stringify(this.customer));
                
                alert("Login Successful.");
                this.route.navigate(['/home']);
              }
            )
            
            //alert("Login Successful.");
            //this.route.navigate(['/home']);
            // alert to put
              // this.message="Sign up succesfull";
          }
            else{
              this.message="Sign up Failed";
          }
       });
    }
  
  }
     /*console.log(JSON.stringify(this.login));
      this.service.loginCustomer(this.login).subscribe(
        msg=>{
          this.isValid=msg;
          if(this.isValid){
            // this.message="Login Successful";
            this.service.ViewProfileCustomer(this.login.emailId)
            .subscribe(
              user=>{
                //this.validateUser=user;
                sessionStorage.setItem("userDetails",JSON.stringify(this.validateUser.emailId));


                console.log(this.validateUser.emailId);
              }
            );
            this.route.navigate(['/home']);
          }
          else{
            this.message="Invalid Credentials";
          }
  
        }
      )
       */
    
     



