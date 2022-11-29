import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../Post';
import { UtilserviceService } from '../utilservice.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  constructor(public router:Router,public route: ActivatedRoute,private utilservice:UtilserviceService) { }
  postId:any;
  descrip:any;
  minE:any
  post:any
  project:any;
  ngOnInit(): void {
    this.postId = this.route.snapshot.params["post"];
    this.utilservice.getPost(this.postId).subscribe({
      next:(data)=>this.post=data  ,
      error:(error)=>console.log(error),
      complete:()=>console.log("done")
    })

   
  }


  editPost=new FormGroup({
   
    description:new FormControl('',[Validators.required]),
    minExp:new FormControl('',[Validators.required])
   })

   onSubmit(){

    this.descrip=this.editPost.get("description")?.value;
      this.minE=this.editPost.get("minExp")?.value
      this.utilservice.editPost(new Post(this.post.postId,this.post.projectName,this.descrip+"",this.minE)).subscribe({
        next:(data)=>console.log(data),
       error:(error)=>console.log(error),
       complete:()=>console.log("post edit") 
      });

      this.router.navigateByUrl("dashboard")
   }


}
