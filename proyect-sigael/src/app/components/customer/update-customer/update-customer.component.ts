import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Customer } from 'src/app/modules/customer/types/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html'
})
export class UpdateCustomerComponent implements OnInit {
  constructor(public router:Router,public dialogRef:MatDialogRef<UpdateCustomerComponent>,@Inject(MAT_DIALOG_DATA)public custom:Customer, private customerService:CustomersService) { 
  
  }
  
  
  

  ngOnInit(): void {
  }
  close(){
    window.location.reload();
    this.dialogRef.close();
    //this.router.navigateByUrl('admin/listCustomers')
  }
  update(){
    this.customerService.updateCustomer(this.custom)
    this.dialogRef.close();
  }
}
