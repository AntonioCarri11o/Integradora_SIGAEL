import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Employee } from 'src/app/modules/employee/types/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html'
})
export class AddEmployeeComponent implements OnInit {

  constructor(public dilogRef:MatDialogRef<AddEmployeeComponent>, private employeeService:EmployeeService) { }
  employee:Employee={
    id:0,
    username:"",
    password:"",
    name:"",
    age:null,
    phone_number:"",
    gender:"",
    state:"a",
    role:"employee"

  }
  ngOnInit(): void {
  }
  close():void{
    this.dilogRef.close();
  }
  send(){
    //window.location.reload();
    this.employeeService.createEmployee(this.employee)
    this.close();
  }

}
