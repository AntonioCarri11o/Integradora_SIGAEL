import { Component } from "@angular/core";
import { BreakpointObserver,Breakpoints } from "@angular/cdk/layout";
import { from, Observable } from "rxjs";
import {map, shareReplay} from "rxjs/operators";
import { Router } from "@angular/router";
import {LoginStateService} from "../../services/login-state.service.service";
import { GetTokenServiceService } from "src/app/services/get-token-service.service";

@Component({
    selector:"app-navigation",
    templateUrl:"./navigation.component.html",
    //styleUrls:["./navigation.component.css"],
})
export class NavigationComponent{
    get session(){
        return this.loginStateService.isLogged;
    }
    get tokenRole(){
        return localStorage.getItem('role')==="admin"
    }
    get tokenAd(){
        const token=localStorage.getItem('token');
        //const role=this.getTokenService.getRoleUsername(token!);
        //console.log(token)
        //console.log(localStorage.getItem('role'))
        return localStorage.getItem('token')
    }
    isHandset$:Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map((result)=>result.matches),shareReplay()
    );
    constructor(
        private breakpointObserver:BreakpointObserver,
        private router:Router,
        private loginStateService:LoginStateService,
    ){
    }
    logout(){
        localStorage.clear();
        this.loginStateService.setIsLogged=false;
        this.router.navigateByUrl("/")
    }
}
