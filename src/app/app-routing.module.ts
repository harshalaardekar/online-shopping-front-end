import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddressComponent } from './user/add-address/add-address.component';
import { AddressBookComponent } from './user/address-book/address-book.component';
import { AdminApproveProductsComponent } from './user/admin-approve-products/admin-approve-products.component';
import { AdminApproveRetailerComponent } from './user/admin-approve-retailer/admin-approve-retailer.component';
import { AdminDashboardComponent } from './user/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './user/admin-login/admin-login.component';
import { AdminProfileComponent } from './user/admin-profile/admin-profile.component';
import { AdminRetailerdetailsComponent } from './user/admin-retailerdetails/admin-retailerdetails.component';
import { AdminViewProductsComponent } from './user/admin-view-products/admin-view-products.component';
import { AdminViewRetailersComponent } from './user/admin-view-retailers/admin-view-retailers.component';
import { CustomerProfileComponent } from './user/customer-profile/customer-profile.component';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { MyaccountComponent } from './user/myaccount/myaccount.component';
import { RetailerAddProductsComponent } from './user/retailer-add-products/retailer-add-products.component';
import { RetailerDashboardComponent } from './user/retailer-dashboard/retailer-dashboard.component';
import { RetailerForgotpasswordComponent } from './user/retailer-forgotpassword/retailer-forgotpassword.component';
import { RetailerLoginComponent } from './user/retailer-login/retailer-login.component';
import { RetailerProfileComponent } from './user/retailer-profile/retailer-profile.component';
import { RetailerRegisterComponent } from './user/retailer-register/retailer-register.component';
import { UpdatepasswordComponent } from './user/updatepassword/updatepassword.component';
import { UserForgotpasswordComponent } from './user/user-forgotpassword/user-forgotpassword.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';



const routes: Routes = [
  {
    path:'',
    component:LoginComponent

  },
  {path:'admin-approve-products',component:AdminApproveProductsComponent},
  {path:'admin-approve-retailer',component:AdminApproveRetailerComponent},
  {path:'admin-view-retailers',component:AdminViewRetailersComponent},
  {path:'admin-view-products',component:AdminViewProductsComponent},
  {path:'admin-retailerdetails',component:AdminRetailerdetailsComponent},

  {path:'addaddress',component:AddAddressComponent},
  {path:'alladdress',component:AddressBookComponent},
  {path:'login',component:LoginComponent},
  {path:'retailer-add-products',component:RetailerAddProductsComponent},
  {path:'retailer-login',
    component:RetailerLoginComponent
  },
  { path:'retailer',
    component:RetailerDashboardComponent
  },
  { path:'admin-login',
    component:AdminLoginComponent
  },
  { path:'user-forgotpassword',
    component:UserForgotpasswordComponent
  },
  { path:'customerprofile',
    component:CustomerProfileComponent
  },
  { path:'update-password',
    component:UpdatepasswordComponent
  },
  { path:'myaccount',
    component:MyaccountComponent
  },
  {
    path:'retailer-forgotpassword',
    component:RetailerForgotpasswordComponent
  },
  {
    path:'user-register',
    component:UserRegisterComponent
  },
  {
    path:'retailer-register',
    component:RetailerRegisterComponent
  },
  {
    path:'retailer-profile',
    component:RetailerProfileComponent
  },
  {
    path:'admin-profile',
    component: AdminProfileComponent
  },
  {
    path:'admin-dashboard',
    component: AdminDashboardComponent
  },
  {
    path:'home',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
