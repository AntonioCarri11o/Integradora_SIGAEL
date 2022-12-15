import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {OrdersService} from "../../../services/orders.service";
import {Customer} from "../../../modules/customer/types/customer";

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html'
})
export class NewOrderComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<NewOrderComponent>,@Inject(MAT_DIALOG_DATA)public customer:Customer,orderService:OrdersService) { }
  order:any={
    name:"",
    desc:"",
    pieces:0,
    prize:0,
    total:0,
    balance:0,
    comments:"",
    idr_employee:5557
  }
  ngOnInit(): void {
  }
  close(){
    window.location.reload();
    this.dialogRef.close();
    //this.router.navigateByUrl('admin/listCustomers')
  }
  save(){

  }
}
