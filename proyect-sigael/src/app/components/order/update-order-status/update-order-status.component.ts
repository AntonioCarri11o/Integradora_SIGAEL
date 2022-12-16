import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-update-order-status',
  templateUrl: './update-order-status.component.html'
})
export class UpdateOrderStatusComponent implements OnInit {
  constructor(public dialogRef:MatDialogRef<UpdateOrderStatusComponent>,@Inject(MAT_DIALOG_DATA) public order:any, private orderService:OrdersService) { }
  ngOnInit(): void {
  }

  updateStatus(status:string,id:number){
    
  }
  close(){
    window.location.reload();
    this.dialogRef.close();
  }

}
