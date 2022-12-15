import { Component, OnInit,Inject } from '@angular/core';
import { Customer } from 'src/app/modules/customer/types/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-employee-list-custumers',
  templateUrl: './employee-list-custumers.component.html'
})
export class EmployeeListCustumersComponent implements OnInit {
  customers:Customer[]=[];
  constructor(private customersService:CustomersService) { }

  ngOnInit(): void {
    const type=localStorage.getItem("type")
    console.log(type)
    this.customersService.getByType({type}).subscribe(resp=>{
      this.customers=resp;
    })
  }
  newOrder(id:number){

  }

}
