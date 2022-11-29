import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UtilserviceService } from '../utilservice.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(public router:Router,public route: ActivatedRoute,private utilservice:UtilserviceService) { }
  id:any;
  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    console.log(this.id);
    this.utilservice.deletePost(this.id).subscribe(
      {
        next: (data) => {
          console.log("deleted")

        },
        error: (error) => { console.log(error) },
        complete: () => console.log('hello deleted')
      }
    );
    this.router.navigateByUrl("dashboard");

  }

}
