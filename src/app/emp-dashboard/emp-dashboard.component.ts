import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../Post';
import { Request } from '../Request';
import { UtilserviceService } from '../utilservice.service';

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.css']
})
export class EmpDashboardComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }


  constructor(private utilservice: UtilserviceService, public router: Router,public route:ActivatedRoute) { }
  postList: any;
  empEmail:any;

  employee:any;

  ngOnInit() {
    this.utilservice.doValidate().subscribe({
      next: (data) => {
        if (data) {
    this.empEmail = this.route.snapshot.params["empEmail"];
    this.utilservice.getEmployee(this.empEmail).subscribe({
      next:(data)=> this.employee=data
    });
     this.utilservice.getAllPost().subscribe(
      {
        next: (data) => this.postList = data,
        error: (error) => { console.log(error) }      }
    )
  } else{
      this.router.navigateByUrl("sessionError");
    }
  },
  error:(error)=> this.router.navigateByUrl("sessionError")})
  }

  apply(p:Post){
 
    

      let request = new Request(0,p.projectName,this.employee,0)

      this.utilservice.apply(request).subscribe({
        next:(data)=>console.log(data),
        error:(error)=>console.log(error),
        complete:()=>console.log("applied")
    })
  }
}


