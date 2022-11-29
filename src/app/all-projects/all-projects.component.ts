import { Component, OnInit } from '@angular/core';
import { UtilserviceService } from '../utilservice.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit {

  constructor(private utilservice:UtilserviceService) { }
  projectList:any;
  ngOnInit(): void {
    this.utilservice.getAllProjects().subscribe(
      {
        next: (data) => this.projectList=data,
        error: (error) => { console.log(error) },
        complete: () => console.log("all projects done")
      }
    )
  }

}
