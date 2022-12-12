import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { Employee } from 'src/app/modules/employee/types/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { LoginStateService } from 'src/app/services/login-state.service.service';
import { OrdersService } from 'src/app/services/orders.service';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html'
})
export class ListEmployeeComponent implements OnInit {
  employees:Employee[]=[];
  

  constructor(
    private breakpointObserver:BreakpointObserver,
    private router:Router,
    private loginStateService:LoginStateService,
    private employeeServices:EmployeeService,
    public dialog:MatDialog
){
}


  ngOnInit(): void {
    this.employeeServices.getEmployees().subscribe(resp=>{
      this.employees=resp;

    })
  }
  addEmployee(){
    const dilogRef=this.dialog.open(AddEmployeeComponent,{
      width:"35%"
    })
  }
  updateEmployee(employee:Employee){
    const dialogRef=this.dialog.open(UpdateEmployeeComponent,{data:employee})
  }



}
