import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilserviceService } from '../utilservice.service';

@Component({
  selector: 'app-emp-project',
  templateUrl: './emp-project.component.html',
  styleUrls: ['./emp-project.component.css']
})
export class EmpProjectComponent implements OnInit {

  constructor(private utilservice:UtilserviceService, private router:Router) { }
  projectList:any;
  ngOnInit(): void {
    this.utilservice.doValidate().subscribe({
      next: (data) => {
        if (data) {
  this.utilservice.getAllProjects().subscribe(
    {
      next: (data) => this.projectList=data,
      error: (error) => { console.log(error) },
    }
  )
} else {
  this.router.navigateByUrl("sessionError");
}
},
error:(error)=> this.router.navigateByUrl("sessionError")})
  }
}
