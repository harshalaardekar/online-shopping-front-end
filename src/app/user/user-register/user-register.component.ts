import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { CustomerSignUp } from 'src/app/customerSignup';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  customerSignUp: CustomerSignUp=new CustomerSignUp();
  isValid :boolean;
  message:String;
  user: String;
  constructor(private service:CustomerService ,private route:Router) { }

  ngOnInit(): void {
  }
  
  public CustomerLogin(){
    let res=this.service.SignUpCustomer(this.customerSignUp);
  res.subscribe(  msg=>{
       this.isValid=msg;
        if(this.isValid){
          
          this.route.navigate(['/login']);
          // alert to put
            // this.message="Sign up succesfull";
        }
          else{
            this.message="Sign up Failed";
        }
     });
  }

}
//                   customerSignUp: CustomerSignUp=new CustomerSignUp();
//                     message:string;
//                     constructor(private service:CustomerService) { }

//                     ngOnInit(): void {
//                     }
//                     register(){
//                       console.log(JSON.stringify(this.customerSignUp));
//                       this.service.SignUpCustomer(this.customerSignUp).subscribe(
//                         msg=>{
//                           this.message=msg;
//                           console.log(this.message);
//                         }
//                      );
//                     }


                