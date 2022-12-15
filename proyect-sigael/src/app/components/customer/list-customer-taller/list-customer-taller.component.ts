import { Component, OnInit } from '@angular/core';
import {CustomersService} from "../../../services/customers.service";
import {Customer} from "../../../modules/customer/types/customer";

@Component({
  selector: 'app-list-customer-taller',
  templateUrl: './list-customer-taller.component.html'
})
export class ListCustomerTallerComponent implements OnInit {
  customers:Customer[]=[]
  constructor(private customersService:CustomersService, ) { }

  ngOnInit(): void {
    const type=localStorage.getItem("type")
    this.customersService.getByType({type}).subscribe(resp=>{
      this.customers=resp;
    })
  }
  newOrder(customer:Customer){

  }

}
