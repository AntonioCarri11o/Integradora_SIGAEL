import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Order } from 'src/app/modules/orders/types/orders';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html'
})
export class UpdateOrderComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<UpdateOrderComponent>, @Inject(MAT_DIALOG_DATA)public order:Order, private orderService:OrdersService) { }

  ngOnInit(): void {
  }
  close(){
    window.location.reload();
    this.dialogRef.close();
    //this.router.navigateByUrl('admin/listCustomers')
  }
  update(){
    this.orderService.updateOrder(this.order)
    this.dialogRef.close();
  }
  updateStatus(status:string, id:number){
    const payload={
      "status":status,
      "id":id,
      "idg_employee":5555
    };
    this.orderService.updateStatus(payload)
    this.close();
  }
  
}
