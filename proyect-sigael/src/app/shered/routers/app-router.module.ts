import {RouterModule, Routes} from "@angular/router";
import { NgModel } from "@angular/forms";
import {AppComponent} from "../../app.component";
import {SigninComponent} from "../../modules/auth/pages/signin/signin.component";

const routes: Routes = [
  {
    path: `auth`,
    component: SigninComponent
  },
];

/*
@NgModel({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
 */

export class AppRouterModule{}
