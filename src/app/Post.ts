import { Project } from "./Project";


export class Post{
    constructor(public postId:number,public projectName:Project,public description:string,public minExp:number){
        
    }
}
