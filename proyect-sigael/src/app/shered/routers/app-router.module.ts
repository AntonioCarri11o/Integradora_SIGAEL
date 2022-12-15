import {RouterModule, Routes} from "@angular/router";
import { NgModel } from "@angular/forms";
import {AppComponent} from "../../app.component";
import { AdminComponent } from "src/app/components/admin/admin.component";
import {SigninComponent} from "../../modules/auth/pages/signin/signin.component";
import { ListEmployeeComponent } from "src/app/components/employee/list-employee/list-employee.component";
import { OrderComponent } from "src/app/components/order/order.component";
import { CustomerComponent } from "src/app/components/customer/customer.component";
import { EmployeeComponent } from "src/app/components/employee/employee.component";
import { ListOrdersEmployeeComponent } from "src/app/components/employee/list-orders-employee/list-orders-employee.component";
import { EmployeeListCustumersComponent } from "src/app/components/customer/employee-list-custumers/employee-list-custumers.component";

const routes: Routes = [
  
  {
    path: `/auth`,
    component: SigninComponent
  },
  
  {
    path:`/admin`, component:AdminComponent,pathMatch:'full'
  },
  {
    path:`/admin/listEmployee`,component:ListEmployeeComponent
  },
  {
    path:`/admin/orders`,component:OrderComponent
  },
  {
    path:`/admin/listCustomers`,component:CustomerComponent
  },
  {
    path:'/employee',component:EmployeeComponent,pathMatch:'full'
  },
  {
    path:'/employee/customers',component:EmployeeListCustumersComponent,pathMatch:'full'
  }

];

/*
@NgModel({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
 
*/
export class AppRouterModule{}
