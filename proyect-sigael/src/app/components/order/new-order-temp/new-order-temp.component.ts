import {Component, OnInit} from '@angular/core';
import { MatDialogRef} from "@angular/material/dialog";
import {OrdersService} from "../../../services/orders.service";
import {CustomersService} from "../../../services/customers.service";
import {Customer} from "../../../modules/customer/types/customer";

@Component({
  selector: 'app-new-order-temp',
  templateUrl: './new-order-temp.component.html'
})
export class NewOrderTempComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<NewOrderTempComponent>,private orderService:OrdersService,
              private customerService:CustomersService) { }
  customer:any={
    id:0,
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
    id_customer:0,
    idr_employee:5557,
    idg_eployee:5557
  }
  ngOnInit(): void {
  }
  close(){
    window.location.reload();
    this.dialogRef.close();
    //this.router.navigateByUrl('admin/listCustomers')
  }

  save(){
    //this.validateId()
    this.customer.id=Math.floor(Math.random()*(5000-1)+1)
    this.customerService.createCustomer(this.customer).subscribe((response)=>{
      console.log(response.message)
    })
    this.order.id_customer=this.customer.id
    this.order.total=(this.order.prize*this.order.pieces)-this.order.balance
    this.orderService.createOrder(this.order).subscribe((response)=>{
      console.log(response.message)
    })
    this.close()
  }

}
