import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Employee } from '../modules/employee/types/employee';
import { Order } from '../modules/orders/types/orders';
import { APP_URL } from './base-url';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private loading:boolean=false;
  getEmployees(){
    return this.http.get<any>(`${APP_URL}api/empleados`)
  }
  updateEmployee(payload:Employee){
    const headers={
      "Content-type":"application/json"
    }
    return this.http.put<any>(`${APP_URL}api/empleados/`,payload,{headers}).pipe(
      catchError((error)=>{
        this.loading=false;
        return error;
      })
    ).subscribe((response)=>{
      console.log(response.message)
    })
  }
  createEmployee(payload:Employee){
    console.log(payload)
    this.loading=false;
    const headers={
      "Content-type":"application/json"
    }
    return this.http.post<any>(`${APP_URL}api/empleados/`,payload,{headers}).pipe(
      catchError((error)=>{
        this.loading= false;
        return error;
      })
    ).subscribe((response)=>{
      console.log(response.message)
    })
  }
  constructor(private http:HttpClient) { }

}
