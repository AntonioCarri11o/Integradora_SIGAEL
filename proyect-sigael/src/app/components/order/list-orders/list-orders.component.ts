import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/modules/employee/types/employee';
import { Order } from 'src/app/modules/orders/types/orders';
import { OrdersService } from 'src/app/services/orders.service';
import { UpdateOrderComponent } from '../update-order/update-order.component';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html'
})
export class ListOrdersComponent implements OnInit {
  orders:Order[]=[]

  ngOnInit(): void {
    this.orderServices.getOrders().subscribe(resp=>{
      this.orders=resp
      console.log(resp)
    })
  }
  constructor(private orderServices:OrdersService,public dialog:MatDialog) {
  }
  update(order:Order){
    const dialogRef=this.dialog.open(UpdateOrderComponent,{data:order})
  }

  
}
