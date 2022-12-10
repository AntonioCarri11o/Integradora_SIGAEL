import {RouterModule, Routes} from "@angular/router";
import { NgModel } from "@angular/forms";
import {AppComponent} from "../../app.component";
import { AdminComponent } from "src/app/components/admin/admin.component";
import {SigninComponent} from "../../modules/auth/pages/signin/signin.component";
import { ListEmployeeComponent } from "src/app/components/employee/list-employee/list-employee.component";

const routes: Routes = [
  
  {
    path: `/auth`,
    component: SigninComponent
  },
  {
    path:`/admin`, component:AdminComponent
  },
  {
    path:`/admin/listEmployee`,component:ListEmployeeComponent
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
