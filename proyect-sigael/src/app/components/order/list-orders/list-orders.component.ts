import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from 'src/app/modules/orders/types/orders';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html'
})
export class ListOrdersComponent implements OnInit {
  orders:Order[]=[]

  ngOnInit(): void {
    this.orderServices.getOrders().subscribe(resp=>{
      this.orders=resp
    })
  }
  constructor(private orderServices:OrdersService,) {
  }

  
}
