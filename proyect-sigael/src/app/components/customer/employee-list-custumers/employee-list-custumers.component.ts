import { Component, OnInit,Inject } from '@angular/core';
import { Customer } from 'src/app/modules/customer/types/customer';
import { CustomersService } from 'src/app/services/customers.service';
import {UpdateOrderComponent} from "../../order/update-order/update-order.component";
import {MatDialog} from "@angular/material/dialog";
import {NewOrderComponent} from "../../order/new-order/new-order.component";

@Component({
  selector: 'app-employee-list-custumers',
  templateUrl: './employee-list-custumers.component.html'
})
export class EmployeeListCustumersComponent implements OnInit {
  customers:Customer[]=[];
  constructor(private customersService:CustomersService,public dialog:MatDialog) { }

  ngOnInit(): void {
    const type=localStorage.getItem("type")
    this.customersService.getByType({type}).subscribe(resp=>{
      this.customers=resp;
    })
  }
  newOrder(custumer:Customer){
    const dialogRef=this.dialog.open(NewOrderComponent,{data:custumer})

  }

}
