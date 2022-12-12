import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/app/modules/employee/types/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html'
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<UpdateEmployeeComponent>,@Inject(MAT_DIALOG_DATA)public emp:Employee, private employeeService:EmployeeService) { }

  ngOnInit(): void {
  }
  close(){
    window.location.reload();
    this.dialogRef.close();
    //this.router.navigateByUrl('admin/listCustomers')
  }
  update(){
    this.employeeService.updateEmployee(this.emp)
    this.dialogRef.close();
  }
}
