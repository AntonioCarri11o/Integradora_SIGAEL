import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStateService } from 'src/app/services/login-state.service.service';
import {OrdersService} from "../../services/orders.service";
import {Order} from "../../modules/orders/types/orders";
import { MatDialog } from '@angular/material/dialog';
import { UpdateOrderStatusComponent } from '../order/update-order-status/update-order-status.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {
  orders:Order[]=[]
  constructor(
    private breakpointObserver:BreakpointObserver,
    private router:Router,
    private loginStateService:LoginStateService,
    private orderService:OrdersService,
    public dialog:MatDialog
){
    this.loginStateService.setIsLogged=!!localStorage.getItem("token");
    if(this.loginStateService.setIsLogged) this.router.navigateByUrl("/auth")
}
  ngOnInit(): void {
    this.orderService.getOrders().subscribe(resp=>{
      this.orders=resp;
    })
  }
  logout(){
    localStorage.clear();
    this.loginStateService.setIsLogged=false;
    this.router.navigateByUrl("/")
  }
  updateStatus(order:any){

    const dialogRef=this.dialog.open(UpdateOrderStatusComponent,{data:order})
  }
}
