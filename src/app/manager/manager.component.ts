import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../Employee';
import { Project } from '../Project';
import { Skill } from '../Skill';
import { Status } from '../Status';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

@Output()
logOut=new EventEmitter();

  constructor(public router:Router,public route: ActivatedRoute,private httpclient:HttpClient) { }

  ngOnInit(): void {
  }

  @Input()
  employee=null;


  statusEmitter = new EventEmitter<Status>();

 logout(){
  this.logOut.emit();
 }



}
