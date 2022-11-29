import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';
import { Project } from '../Project';
import { Skill } from '../Skill';
import { UtilserviceService } from '../utilservice.service';
// import { setTimeout } from "timers/promises";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  constructor(public router:Router,public route: ActivatedRoute, private utilservice: UtilserviceService) { }

  dropdownList:Skill[]=[];
  dropdownSettings: IDropdownSettings = {};
  
  skills:Skill[]=[]
  returnMsg:any;


  ngOnInit() {
    this.utilservice.getAllSkills().subscribe({
      next:(data)=>{
    
        this.dropdownList=data;
        console.log(this.skills);
      },
      error:(error)=>console.log(error),
      complete:()=>console.log("done all skills")
    })
    this.dropdownSettings={
      idField:'skillId',
      textField:'skillName'
    }
  }




  resultSkill: string[] = [];
  onItemSelect(item: any) {
    this.skills.push(item)
  }


  onItemDeSelect(item: any) {
    this.skills.forEach((element, index) => {
      if (element == item) {
        this.skills.splice(index, 1);
      }
    })
  }
  


  PrAddForm = new FormGroup({
    prname: new FormControl('', [Validators.required]),
    noemp: new FormControl('', [Validators.required]),
    deadline: new FormControl('', [Validators.required])
  })


  onsubmit() {
    
    let date = new Date(this.PrAddForm.get("deadline")?.value+"");
    console.log(date)
    let project = new Project(0,this.PrAddForm.get("prname")?.value+"",this.skills,parseInt(this.PrAddForm.get("noemp")?.value+""),[],date)
    this.utilservice.addProject(project).subscribe({
      next:(data)=>this.returnMsg=data,
      error:(error)=>console.log(error),
      complete:()=>{yourFunction()}
    })

    // const delay = ms => new Promise(res => setTimeout(res, ms));
    // const yourFunction = async () => {
    //   await delay(5000);
    //   console.log("Waited 5s");
    
    //   await delay(5000);
    //   console.log("Waited an additional 5s");
    // };

    const yourFunction = async () => {
      // await setTimeout(5000);
      console.log("Waited 5s");
      this.router.navigateByUrl("allprojects");
      
    };
  
  }
}
