import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.css']
})
export class HomeheaderComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  logOut(){
    alert("Logged out successfully");
  }
}

		
	