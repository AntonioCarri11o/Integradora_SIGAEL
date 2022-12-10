import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { LoginStateService } from 'src/app/services/login-state.service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {
  //role="ADMIN"
  isHandset$:Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result)=>result.matches),shareReplay()
);
  constructor(
    private breakpointObserver:BreakpointObserver,
    private router:Router,
    private loginStateService:LoginStateService,
){
    this.loginStateService.setIsLogged=!!localStorage.getItem("token");
    if(this.loginStateService.setIsLogged) this.router.navigateByUrl("/auth")
}
logout(){
    localStorage.clear();
    this.loginStateService.setIsLogged=false;
    this.router.navigateByUrl("/")
}

  ngOnInit(): void {
  }

}
