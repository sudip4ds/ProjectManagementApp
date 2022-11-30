import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { AssignedprojectsComponent } from './assignedprojects/assignedprojects.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteProjectComponent } from './delete-project/delete-project.component';
import { DeleteComponent } from './delete/delete.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { EmpProjectComponent } from './emp-project/emp-project.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestsComponent } from './requests/requests.component';
import { SessionErrorComponent } from './session-error/session-error.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"allemployee",component:AllEmployeesComponent},
  {path:"allprojects",component:AllProjectsComponent},
  {path:"requests",component:RequestsComponent},
  {path:"dashboard/addpost",component:AddPostComponent},
  {path:"allprojects/addproject",component:AddProjectComponent},
  {path:"allprojects/assignproject",component:AssignedprojectsComponent},
  {path:"dashboard/editpost/:post",component:EditPostComponent},
  {path:"dashboard/delete/:id",component:DeleteComponent},
  {path:"allprojects/deleteproject/:id",component:DeleteProjectComponent},
  {path:"errorPage/:errMsg",component:ErrorPageComponent},
  {path:"empDashboard/:empEmail",component:EmpDashboardComponent},
  {path:"empProject",component:EmpProjectComponent},
  {path:"profile",component:ProfileComponent},
  {path:"sessionError",component:SessionErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
