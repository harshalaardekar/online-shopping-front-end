import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './user/home/home.component';
import { FooterComponent } from './user/footer/footer.component';
import { MyaccountComponent } from './user/myaccount/myaccount.component';
import { HomeheaderComponent } from './user/homeheader/homeheader.component';
import { CartComponent } from './user/cart/cart.component';
import { WishlistComponent } from './user/wishlist/wishlist.component';
import { CheckoutComponent } from './user/checkout/checkout.component';
import { LoginComponent } from './user/login/login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { RetailerLoginComponent } from './user/retailer-login/retailer-login.component';
import { AdminLoginComponent } from './user/admin-login/admin-login.component';
import { WelcomeComponent } from './user/welcome/welcome.component';
import { UserForgotpasswordComponent } from './user/user-forgotpassword/user-forgotpassword.component';
import { RetailerForgotpasswordComponent } from './user/retailer-forgotpassword/retailer-forgotpassword.component';
import { RetailerRegisterComponent } from './user/retailer-register/retailer-register.component';
import { AdminAcceptOrderComponent } from './user/admin-accept-order/admin-accept-order.component';
import { RetailerAcceptOrderComponent } from './user/retailer-accept-order/retailer-accept-order.component';
import { RetailerHomeComponent } from './user/retailer-home/retailer-home.component';
import { RetailerProfileComponent } from './user/retailer-profile/retailer-profile.component';
import { RetailerRevenueComponent } from './user/retailer-revenue/retailer-revenue.component';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatDialogModule } from '@angular/material/dialog';

import { AdminAddRetailerComponent } from './user/admin-add-retailer/admin-add-retailer.component';
import { AdminProfileComponent } from './user/admin-profile/admin-profile.component';
import { AdminLoginServiceService } from './admin-login-service.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './user/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';

import { CustomerService } from './customer.service';
import { RetailerLoginService } from './retailer-login.service';
import { UpdatepasswordComponent } from './user/updatepassword/updatepassword.component';
import { CustomerProfileComponent } from './user/customer-profile/customer-profile.component';
import { AddAddressComponent } from './user/add-address/add-address.component';
import { AddressBookComponent } from './user/address-book/address-book.component';
import { RetailerDashboardComponent } from './user/retailer-dashboard/retailer-dashboard.component';
import { RetailerAddProductsComponent } from './user/retailer-add-products/retailer-add-products.component';
import { AdminApproveProductsComponent } from './user/admin-approve-products/admin-approve-products.component';
import { AdminApproveRetailerComponent } from './user/admin-approve-retailer/admin-approve-retailer.component';
import { AdminViewRetailersComponent } from './user/admin-view-retailers/admin-view-retailers.component';
import { AdminViewProductsComponent } from './user/admin-view-products/admin-view-products.component';
import { AdminRetailerdetailsComponent } from './user/admin-retailerdetails/admin-retailerdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    MyaccountComponent,
    HomeheaderComponent,
    CartComponent,
    WishlistComponent,
    CheckoutComponent,
    LoginComponent,
    UserRegisterComponent,
    RetailerLoginComponent,
    AdminLoginComponent,
    WelcomeComponent,
    UserForgotpasswordComponent,
    RetailerForgotpasswordComponent,
    RetailerRegisterComponent,
    AdminAcceptOrderComponent,
    RetailerAcceptOrderComponent,
    RetailerHomeComponent,
    RetailerProfileComponent,
    RetailerRevenueComponent,
    AdminAddRetailerComponent,
    AdminProfileComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    UpdatepasswordComponent,
    CustomerProfileComponent,
    AddAddressComponent,
    AddressBookComponent,
    RetailerDashboardComponent,
    RetailerAddProductsComponent,
    AdminApproveProductsComponent,
    AdminApproveRetailerComponent,
    AdminViewRetailersComponent,
    AdminViewProductsComponent,
    AdminRetailerdetailsComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    // MatDialogModule    
  ],
  providers: [AdminLoginServiceService,
  CustomerService,
  RetailerLoginService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
