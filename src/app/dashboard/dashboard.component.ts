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
    this.utilservice.doValidate().subscribe({
      next: (data) => {
        if (data) {
          this.utilservice.getAllPost().subscribe({
            next: (dataa) => {
              console.log(dataa)
              this.postList = dataa
            },
            error: (error) => { console.log(error) },
            complete: () => console.log("all posts done")
          })
        } else {
          this.router.navigateByUrl("sessionError");
        }
      },
      error:(error)=> this.router.navigateByUrl("sessionError")})
  }

 

  deletePost(p: Post) {
    

    this.router.navigateByUrl(`delete/${p.postId}`); 
  }

}
