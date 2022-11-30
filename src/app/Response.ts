import { Employee } from "./Employee";
import { Project } from "./Project";

export class Request{
    constructor(public requestId:number,public project:Project,public employee:Employee,public status:number){
        
    }
}
