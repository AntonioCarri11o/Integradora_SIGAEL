import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Customer } from 'src/app/modules/customer/types/customer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
})
export class AddCustomerComponent {
  constructor(public dialogRef:MatDialogRef<AddCustomerComponent>) { }
  customer:Customer={
    id:0,
    name:"",
    type:"",
    phone_number:0,
    address:"",
    balance:""
  }
  

  ngOnInit(): void {
  }
  close():void{
    this.dialogRef.close();
  }
  send(){
    console.log(this.customer.name);
    this.close()
  }
}
