import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../Post';
import { UtilserviceService } from '../utilservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(private utilservice: UtilserviceService, public router: Router) { }

  postList: any;

  ngOnInit() {
    return this.utilservice.getAllPost().subscribe(
      {
        next: (data) =>{console.log(data)
        this.postList=data} ,
        error: (error) => { console.log(error) },
        complete: () => console.log("all posts done")
      }
    )
  }

 

  deletePost(p: Post) {
    

    this.router.navigateByUrl(`delete/${p.postId}`); 
  }

}
