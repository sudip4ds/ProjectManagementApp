import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../Employee';
import { UtilserviceService } from '../utilservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  role:any;
  constructor(private utilservice: UtilserviceService,public route: ActivatedRoute, public router: Router) { }
  username:any;
  password:any;
  profile: any;
  id:any;
  employee:Employee | undefined;
  ngOnInit(): void {
    this.username=this.utilservice.employee?.empEmail;
    this.utilservice.getEmployee(this.username).subscribe(
         {
         next: (data) => this.profile = data
         }
         )}

}
