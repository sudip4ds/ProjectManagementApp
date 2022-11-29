import { Skill } from "./Skill";
import { Employee } from "./Employee";

export class Project{
    constructor(public projectId:number,public projectName:string,public reqSkills:Skill[],public noOfMembers:number,public members:Employee[],public deadline:Date){
        
    }
}

