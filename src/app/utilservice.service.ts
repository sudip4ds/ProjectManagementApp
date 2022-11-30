import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';
import { Employee } from './Employee';
import { Post } from './Post';
import { Project } from './Project';
import { Request } from './Request';
import { Skill } from './Skill';


@Injectable({
  providedIn: 'root'
})
export class UtilserviceService {

  constructor(private httpclient:HttpClient) { }

   employee:Employee|undefined;

   setemp(e:Employee){
    this.employee=e;
  }

   httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) , withCredentials: false, };

  getUser(user:User):Observable<any>{
    return this.httpclient.post<any>("http://localhost:8089/authenticate/",{
      "username":user.username,
      "password":user.password
    },
    {responseType:"json"});

  }

  getAllReq():Observable<Request[]>{
    return this.httpclient.get<Request[]>("http://localhost:8085/getAllReqs/");
  }

  getEmployee(email:string):Observable<Employee>{
    return this.httpclient.get<Employee>("http://localhost:8085/getemp/"+email);
  }

  getAllEmployee():Observable<Employee[]>{
    return this.httpclient.get<Employee[]>("http://localhost:8085/getallemp/");
  }

  getAllPost():Observable<Post[]>{
    return this.httpclient.get<Post[]>("http://localhost:8085/getAllPost");
  }

  deletePost(id:number){
    return this.httpclient.delete<number>("http://localhost:8085/deletepost/"+id);
  }

  getAllProjects():Observable<Project[]>{
    return this.httpclient.get<Project[]>("http://localhost:8085/getAllProject/")
  }

  deleteProject(id:number){
    return this.httpclient.delete<number>("http://localhost:8085/deleteProject/"+id);
  }

  acceptEmp(r:Request){
   return this.httpclient.post<Request>("http://localhost:8085/acceptEmp/",{
      "requestId":r.requestId,
      "project":r.project,
      "employee":r.employee,
      "status":1
    },
    {responseType:"json"});

  }
  doValidate(){
    let token=sessionStorage.getItem("token");
    if(token!=null){
         return this.httpclient.post('http://localhost:8089/validate/',{},{
      headers: new HttpHeaders().set('Authorization',token)
    })
  }else{
    return this.httpclient.post('http://localhost:8089/validate/',{},{
      headers: new HttpHeaders().set('Authorization',"")
    })
  }
  }


  reject(r:Request){
    return this.httpclient.delete<number>("http://localhost:8085/deleteReq/"+r.requestId)
  }
  addPost(p:Post){
    return this.httpclient.post<Post>("http://localhost:8085/addPost",{
      "postId":p.postId,
      "projectName":p.projectName,
      "description":p.description,
      "minExp":p.minExp
    },
    {responseType:"json"});
  }


  addProject(p:Project){
    return this.httpclient.post<Project>("http://localhost:8085/addProject",{
      "projectId":0,
      "projectName":p.projectName,
      "reqSkills":p.reqSkills,
      "noOfMembers":p.noOfMembers,
      "members":p.members,
      "deadline":p.deadline
    },
    {responseType:"json"});
  }

  getProject(id:number){
    return this.httpclient.get<Project>("http://localhost:8085/findProject/"+id);
  }

  getUnpoted(){
    return this.httpclient.get<Project[]>("http://localhost:8085/getUnPosted");
  }

  getAllSkills(){
    return this.httpclient.get<Skill[]>("http://localhost:8085/getAllSkills")
  }

  getPost(id:number){
    return this.httpclient.get<Post>("http://localhost:8085/getPost/"+id);
  }

  editPost(p:Post){
    return this.httpclient.post<Post>("http://localhost:8085/updatePost/",{
      
        "postId":p.postId,
        "projectName":p.projectName,
        "description":p.description,
        "minExp":p.minExp
  },
    {responseType:"json"});
  }

  apply(r:Request){
    return this.httpclient.post<Request>("http://localhost:8085/apply/",{
      "requestId":r.requestId,
      "project":r.project,
      "employee":r.employee,
      "status":0
    },
    {responseType:"json"});
  }

  getAllPostForEmp(){
    return this.httpclient.get<Post[]>("http://localhost:8085/getPostForEmp/");

  }
}
