import {NgModule} from "@angular/core";
import {SigninComponent} from "./pages/signin/signin.component";
import {materialModules} from "../../types/material-modules";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [SigninComponent],
  imports: [CommonModule, FormsModule, ...materialModules],
  exports: [SigninComponent],
  bootstrap: [SigninComponent],
})
export class AuthModule{}
