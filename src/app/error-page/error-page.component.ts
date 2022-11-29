import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilserviceService } from '../utilservice.service';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  constructor(public router:Router,public route: ActivatedRoute,private utilservice:UtilserviceService) { }
  
  errorMsg:any;
  
  ngOnInit(): void {
    this.errorMsg= this.route.snapshot.params["errMsg"];
    console.log(this.errorMsg);
  }

}
