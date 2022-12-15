import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Customer } from '../modules/customer/types/customer';
import { APP_URL } from './base-url';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private loading:boolean=false;
  getCustomers(){
    return this.http.get<any>(`${APP_URL}api/clientes`);
  }
  getByType(payload:any){
    const headers={
      "Content-type":"application/json"
    }
    return this.http.post<any>(`${APP_URL}api/clientes/bytype`,payload,{headers})
  }
  updateCustomer(payload:Customer){
    const headers={
      "Content-type":"application/json"
    }
    return this.http.put<any>(`${APP_URL}api/clientes/`,payload,{headers}).pipe(
      catchError((error)=>{
        this.loading= false;
        return error;
      })
    ).subscribe((response)=>{
      console.log(response.message)
    })
  }
  createCustomer(payload:Customer){
    this.loading=true
    console.log(payload)
    const headers={
      "Content-type":"application/json"
    }
    return this.http.post<any>(`${APP_URL}api/clientes/`,payload,{headers})
  }
  validateId(id:number){
    const payload={id}
    this.loading=true;
    const headers={
      "Content-type":"application/json"
    }
    return this.http.post<any>(`${APP_URL}api/clientes/validateId`,payload,{headers})
  }

  get isLoading(){
    return this.loading;
  }
  constructor(private http:HttpClient) { }
}
