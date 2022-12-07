import {RouterModule, Routes} from "@angular/router";
import { NgModel } from "@angular/forms";
import {AppComponent} from "../../app.component";
import { AdminComponent } from "src/app/components/admin/admin.component";
import {SigninComponent} from "../../modules/auth/pages/signin/signin.component";

const routes: Routes = [
  {path:'', redirectTo:'/admin',pathMatch:'full'},
  {
    path: `auth`,
    component: SigninComponent
  },
  {
    path:'admin', component:AdminComponent
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
