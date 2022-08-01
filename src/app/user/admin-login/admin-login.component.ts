import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/admin';
import { AdminLoginServiceService } from 'src/app/admin-login-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  admin: Admin=new Admin();
  message:String;
  isValid:boolean;
  constructor(private service:AdminLoginServiceService, private route:Router) { }

  ngOnInit(): void {
  }
  public adminSignUp(){
    let res=this.service.loginAdmin(this.admin);
  res.subscribe(  msg=>{
       this.isValid=msg;
        if(this.isValid){
          sessionStorage.setItem("un", this.admin.username);
           this.route.navigate(['/admin-dashboard']);
            // this.message="login succesfull";
        }
          else{
            this.message="Login Failed";
        }
     });
  }
}
