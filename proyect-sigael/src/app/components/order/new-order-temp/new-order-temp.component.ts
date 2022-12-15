import {Component, OnInit} from '@angular/core';
import { MatDialogRef} from "@angular/material/dialog";
import {OrdersService} from "../../../services/orders.service";

@Component({
  selector: 'app-new-order-temp',
  templateUrl: './new-order-temp.component.html'
})
export class NewOrderTempComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<NewOrderTempComponent>,orderService:OrdersService) { }
  customer:any={
    name:"",
    phone_number:"",
  }
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
