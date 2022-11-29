import { Component } from '@angular/core';
import { Employee } from './Employee';
import { Status } from './Status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectManagementApp';

  role:any;
  employee:any;
  flag = true;
  
  getEmployee(obj:Status){
    console.log(obj);
    this.employee=obj.emp;
    this.role=obj.emp.empDesg;
    this.flag=obj.flag;
  }

  // logOut(obj:Status){
  //   this.employee=obj.emp;
  //   this.role=obj.emp.empDesg;
  //   this.flag=obj.flag;
  // }

  logOut(){
    this.flag=false;
  }

}
