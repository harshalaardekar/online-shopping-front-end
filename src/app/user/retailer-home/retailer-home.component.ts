import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retailer-home',
  templateUrl: './retailer-home.component.html',
  styleUrls: ['./retailer-home.component.css']
})
export class RetailerHomeComponent implements OnInit {

  constructor(private _router: Router ) { }

  ngOnInit(): void {
  }
  btnClickProduct():void{
    this._router.navigate(['/retailerAddProduct']);
  }
  btnClickProfile():void{
    this._router.navigate(['/retailerProfile']);
  }
  
  btnClickRevenue():void{
    this._router.navigate(['/retailerRevenue']);
  }
  
  btnClickAcceptOrder():void{
    this._router.navigate(['/retailerAcceptOrders']);
  }
}