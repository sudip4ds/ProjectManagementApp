import {  NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { RequestsComponent } from './requests/requests.component';
import { AssignedprojectsComponent } from './assignedprojects/assignedprojects.component';
import { EmployeeComponent } from './employee/employee.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { DeleteComponent } from './delete/delete.component';
import { DeleteProjectComponent } from './delete-project/delete-project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { MultiSelectComponent } from 'ng-multiselect-dropdown';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AddPostComponent } from './add-post/add-post.component';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { EmpProjectComponent } from './emp-project/emp-project.component';
import { ErrorPageComponent } from './error-page/error-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManagerComponent,
    DashboardComponent,
    AllEmployeesComponent,
    EditPostComponent,
    AddProjectComponent,
    AllProjectsComponent,
    RequestsComponent,
    AssignedprojectsComponent,
    EmployeeComponent,
    EditPostComponent,
    DeleteComponent,
    DeleteProjectComponent,
    AddPostComponent,
    EmpDashboardComponent,
    ProfileComponent,
    EmpProjectComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
