import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from '../Request';
import { UtilserviceService } from '../utilservice.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  constructor(private utilservice:UtilserviceService, private router:Router) { }

  requests:any;
  returnMsg:any;


  ngOnInit(): void {
    this.utilservice.doValidate().subscribe({
      next: (data) => {
        if (data) {
    this.utilservice.getAllReq().subscribe({
      next:(data)=> this.requests=data,
      error:(error)=>console.log(error),
      complete:()=>console.log("all reqs showed")
    })
  }else {
    this.router.navigateByUrl("sessionError");
  }
},
error:(error)=> this.router.navigateByUrl("sessionError")})

  }

  accept(r:Request){
    console.log(this.returnMsg)
    this.utilservice.acceptEmp(r).subscribe({
      next:(data)=> this.returnMsg=data,
      error:(error)=>console.log(error),
      complete:()=>console.log("all reqs showed")
    })
  }

  reject(r:Request){
    this.utilservice.reject(r).subscribe({
      next:(data)=>this.returnMsg=data,
      error:(error)=>console.log(error)
    })
  }

}
