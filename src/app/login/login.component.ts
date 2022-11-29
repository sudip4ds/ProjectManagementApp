import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../Employee';
import { Status } from '../Status';
import { User } from '../User';
import { UtilserviceService } from '../utilservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm=new FormGroup({
  email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9]+@[a-z0-9]+.[a-z]{2,4}")]),
  password:new FormControl('',[Validators.required])

 }) 

 username:any;
password:any;

@Output()
  statusEmitter = new EventEmitter<Status>();
  errorMsg: any;


  constructor(private utilservice:UtilserviceService) { }

  ngOnInit(): void {
  }

   employee:Employee | undefined;



  login(){

    this.username=this.loginForm.get("email")?.value;
    this.password=this.loginForm.get("password")?.value;

    this.utilservice.getUser(new User(this.username,this.password)).subscribe({
      next:(data)=>{
        sessionStorage.setItem("token",data.token);
        this.utilservice.getEmployee(this.username).subscribe(
          (data)=>{
            this.utilservice.setemp(data);
            this.statusEmitter.emit(new Status(data,false));
          }
        );
      },
      error: (error)=>this.errorMsg="username not found",
      complete:()=>console.log("verified")
    });

    
  }

  

}
