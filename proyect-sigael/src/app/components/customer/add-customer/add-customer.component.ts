import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Customer } from 'src/app/modules/customer/types/customer';
import { CustomersService } from 'src/app/services/customers.service';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
})
export class AddCustomerComponent {
  constructor(public dialogRef:MatDialogRef<AddCustomerComponent>,private customerService:CustomersService) { }
  customer:Customer={
    id:0,
    name:"",
    type:"",
    phone_number:null,
    address:"",
    balance:""
  }


  ngOnInit(): void {
  }
  close():void{
    this.dialogRef.close();
  }
  send(){
    //window.location.reload()P
    this.customerService.createCustomer(this.customer)
    this.close()
  }
}
