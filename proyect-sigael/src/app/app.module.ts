import { NgModule }      from '@angular/core';
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
import { ListOrdersComponent } from './components/order/list-orders/list-orders.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ListCustomersComponent } from './components/customer/list-customers/list-customers.component';
import { AddCustomerComponent } from './components/customer/add-customer/add-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateCustomerComponent } from './components/customer/update-customer/update-customer.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './components/employee/update-employee/update-employee.component';
import { UpdateOrderComponent } from './components/order/update-order/update-order.component';
import { EmployeeListCustumersComponent } from './components/customer/employee-list-custumers/employee-list-custumers.component';
import { EmployeeNavbarComponent } from './components/employee/employee-navbar/employee-navbar.component';
import { NewOrderComponent } from './components/order/new-order/new-order.component';
import { ListCustomerTallerComponent } from './components/customer/list-customer-taller/list-customer-taller.component';
import { NewOrderTempComponent } from './components/order/new-order-temp/new-order-temp.component';
const appRoutes:Routes=[
  {path:'admin',component:AdminComponent},
  {path:`admin/listEmployee`, component:ListEmployeeComponent},
  {path:'',component:NavigationComponent},
  {path:'admin/orders',component:OrderComponent},
  {path:'admin/listCustomers',component:ListCustomersComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'employee/customers/escuela',component:EmployeeListCustumersComponent,pathMatch:'full'},
  {path:'employee/customers/taller',component:EmployeeListCustumersComponent,pathMatch:'full'}
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
    ListOrdersComponent,
    CustomerComponent,
    ListCustomersComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    UpdateOrderComponent,
    EmployeeListCustumersComponent,
    EmployeeNavbarComponent,
    NewOrderComponent,
    ListCustomerTallerComponent,
    NewOrderTempComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ...materialModules,
    AuthModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
