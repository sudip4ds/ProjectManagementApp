import { Skill } from "./Skill";
import { Project } from "./Project";

export class Employee{
    constructor(public empId:number,public empName:string,public empEmail:string,public empExp:number,public empDesg:string,public empSkills:Skill[],public currentProj:Project[]){
        
    }

    public Employee(){
        
    }

    
}
