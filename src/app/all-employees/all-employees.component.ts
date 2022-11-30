import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Employee } from '../Employee';
import { UtilserviceService } from '../utilservice.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {

  constructor(private utilservice:UtilserviceService, private router:Router) { }

  empList:any;

  ngOnInit() {
    this.utilservice.doValidate().subscribe({
      next: (data) => {
        if (data) {
     this.utilservice.getAllEmployee().subscribe(
      {
        next:(data)=>this.empList=data,
        error:(error)=>{console.log(error)},
        complete:()=>console.log("all employee done")
      }
    )
  } else {
    this.router.navigateByUrl("sessionError");
  }
},
error:(error)=> this.router.navigateByUrl("sessionError")})
  }

}
