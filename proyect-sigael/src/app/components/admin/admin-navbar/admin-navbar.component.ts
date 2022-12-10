import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { LoginStateService } from 'src/app/services/login-state.service.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html'
})
export class AdminNavbarComponent implements OnInit {
  isHandset$:Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result)=>result.matches),shareReplay()
);
  constructor(
    private breakpointObserver:BreakpointObserver,
    private router:Router,
    private loginStateService:LoginStateService,
  ) { }
  logout(){
    localStorage.clear();
    this.loginStateService.setIsLogged=false;
    this.router.navigateByUrl("/")
}

  ngOnInit(): void {
  }

}
