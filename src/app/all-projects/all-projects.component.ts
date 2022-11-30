import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UtilserviceService } from '../utilservice.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit {

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
        complete: () => console.log("all projects done")
      }
    )
  }else {
    this.router.navigateByUrl("sessionError");
  }
},
error:(error)=> this.router.navigateByUrl("sessionError")})
  }

}
