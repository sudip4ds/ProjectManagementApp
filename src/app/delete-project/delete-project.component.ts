import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilserviceService } from '../utilservice.service';

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.css']
})
export class DeleteProjectComponent implements OnInit {

  constructor(public router:Router,public route: ActivatedRoute,private utilservice:UtilserviceService) { }
  id:any;

  ngOnInit(): void { 
    this.id = this.route.snapshot.params["id"];

  this.utilservice.deleteProject(this.id).subscribe(
    {
      next: (data) => {
        console.log("deleted")

      },
      error: (error) => {
        this.router.navigateByUrl(`errorPage/${"Error while deleting"}`)},
      complete: () => console.log('hello deleted')
    }
  );
  this.router.navigateByUrl("allprojects");

  }

}
