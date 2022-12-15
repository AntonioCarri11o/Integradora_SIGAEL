import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { LoginStateService } from 'src/app/services/login-state.service.service';

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
  newOrder(type:string){
    console.log(type)
    localStorage.setItem('type',type)
    this.router.navigateByUrl("/employee/customers");
  }

}
