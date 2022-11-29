import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Post } from '../Post';
import { Project } from '../Project';
import { UtilserviceService } from '../utilservice.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {


  constructor(public router:Router,public route: ActivatedRoute,private utilservice:UtilserviceService) { }
  AddPost=new FormGroup({
    projectName:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    minExp:new FormControl('',[Validators.required])
   })

   projectList:any;
 

    ngOnInit() {
      this.utilservice.getUnpoted().subscribe({
        next:(data)=> this.projectList=data,
        error:(error)=>console.log(error),
        complete:()=>console.log("got all projects")
      })
    }

    projectId:any;
    descrip:any;
    minE:any;

    onSubmit(){
      this.projectId=parseInt(this.AddPost.get("projectName")?.value+"")
      this.descrip=this.AddPost.get("description")?.value;
      this.minE=this.AddPost.get("minExp")?.value
      
      this.utilservice.getProject(this.projectId).subscribe({
        next:(data)=>{
          this.utilservice.addPost(new Post(0,data,this.descrip,this.minE))
          .subscribe({
            next:(data)=>console.log("posted"),
            error:(error)=>console.log(error),
            complete:()=>console.log("done add posted")
          });
        },
        error:(error)=>console.log(error),
        complete:()=>console.log("done")
      })
      
     this.router.navigateByUrl("dashboard");
    }
}
