import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/modules/customer/types/customer';
import { CustomersService } from 'src/app/services/customers.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { MatDialog } from '@angular/material/dialog';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { UpdateCustomerComponent } from '../update-customer/update-customer.component';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html'
})
export class ListCustomersComponent{
  customers:Customer[]=[];
  constructor(private customersService:CustomersService, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.customersService.getCustomers().subscribe(resp=>{
      this.customers=resp;
    })
  }
  updateCustomer(customer:Customer){
    const dialogRef=this.dialog.open(UpdateCustomerComponent,{data:customer})
    //console.log(customer.name)
  }
  addCustomer(){
    const dialogRef=this.dialog.open(AddCustomerComponent,{})
  }

}
