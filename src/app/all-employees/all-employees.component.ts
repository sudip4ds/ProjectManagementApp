import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { UtilserviceService } from '../utilservice.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {

  constructor(private utilservice:UtilserviceService) { }

  empList:any;

  ngOnInit() {
    return this.utilservice.getAllEmployee().subscribe(
      { 
        next:(data)=>this.empList=data,
        error:(error)=>{console.log(error)},
        complete:()=>console.log("all employee done")
      }
    )
  }

}
