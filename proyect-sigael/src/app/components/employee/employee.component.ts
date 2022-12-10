import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStateService } from 'src/app/services/login-state.service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {

  constructor(
    private breakpointObserver:BreakpointObserver,
    private router:Router,
    private loginStateService:LoginStateService,
){
    this.loginStateService.setIsLogged=!!localStorage.getItem("token");
    if(this.loginStateService.setIsLogged) this.router.navigateByUrl("/auth")
}
  ngOnInit(): void {
  }
  logout(){
    localStorage.clear();
    this.loginStateService.setIsLogged=false;
    this.router.navigateByUrl("/")
}
}
