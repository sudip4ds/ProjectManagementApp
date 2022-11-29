import { Component, OnInit } from '@angular/core';
import { UtilserviceService } from '../utilservice.service';

@Component({
  selector: 'app-emp-project',
  templateUrl: './emp-project.component.html',
  styleUrls: ['./emp-project.component.css']
})
export class EmpProjectComponent implements OnInit {

  constructor(private utilservice:UtilserviceService) { }
  projectList:any;
  ngOnInit(): void {
    this.utilservice.getAllProjects().subscribe(
      {
        next: (data) => this.projectList=data,
        error: (error) => { console.log(error) },
      }
    )
  }
}
