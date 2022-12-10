import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {materialModules} from "./types/material-modules";
import {HttpClientModule} from "@angular/common/http";
import { EmployeeComponent } from './components/employee/employee.component';
import { OrderComponent } from './components/order/order.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/admin/login/login.component';
import { NavigationComponent } from './shered/navigation/navigation.component';
import { AuthModule } from './modules/auth/auth.module';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './components/employee/list-employee/list-employee.component';
import { AdminNavbarComponent } from './components/admin/admin-navbar/admin-navbar.component';

const appRoutes:Routes=[
  {path:'admin',component:AdminComponent},
  {path:`admin/listEmployee`, component:ListEmployeeComponent},
  {path:'',component:NavigationComponent}
]
@NgModule({
  declarations: [
    AppComponent,    
    EmployeeComponent,
    OrderComponent,
    AdminComponent,
    LoginComponent,
    NavigationComponent,
    ListEmployeeComponent,
    AdminNavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ...materialModules,
    AuthModule,
    RouterModule.forRoot(appRoutes)

  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
