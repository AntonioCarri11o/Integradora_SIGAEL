import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { LoginStateService } from 'src/app/services/login-state.service.service';
import {NewOrderTempComponent} from "../../order/new-order-temp/new-order-temp.component";

@Component({
  selector: 'app-employee-navbar',
  templateUrl: './employee-navbar.component.html'
})
export class EmployeeNavbarComponent implements OnInit {

  isHandset$:Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result)=>result.matches),shareReplay()
);
  constructor(
    private breakpointObserver:BreakpointObserver,
    private router:Router,
    private loginStateService:LoginStateService,
    public dialog:MatDialog
  ) { }
  logout(){
    localStorage.clear();
    this.loginStateService.setIsLogged=false;
    this.router.navigateByUrl("/")
}

  ngOnInit(): void {
  }
  newOrderE(type:string){
    localStorage.setItem('type',type)
    this.router.navigateByUrl("/employee/customers/escuela");
  }
  newOrderT(type:string){
    localStorage.setItem('type',type)
    const num=Math.floor(Math.random()*(5000-1)+1)
    console.log(num)
    this.router.navigateByUrl("/employee/customers/taller");
  }
  newOrderTemp(){
    const dialogRef=this.dialog.open(NewOrderTempComponent,)  }

}
