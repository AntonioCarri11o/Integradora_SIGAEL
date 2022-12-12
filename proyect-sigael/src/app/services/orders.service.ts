import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Order } from '../modules/orders/types/orders';
import { APP_URL } from './base-url';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private loading:boolean=false;
  getOrders(){
    return this.http.get<any>(`${APP_URL}api/ordenes/`)
  }
  updateOrder(payload:Order){
    payload.total=payload.prize!*payload.pieces!
    const headers={
      "Content-type":"application/json"
    }
    return this.http.put<any>(`${APP_URL}api/ordenes/`,payload,{headers}).pipe(
      catchError((error)=>{
        this.loading= false;
        return error;
      })
    ).subscribe((response)=>{
      console.log(response.message)
    })
  }
  updateStatus(payload:any){
    const headers={
      "Content-type":"application/json"
    }
    return this.http.put<any>(`${APP_URL}api/ordenes/upState`,payload,{headers}).pipe(
      catchError((error)=>{
        this.loading= false;
        return error;
      })
    ).subscribe((response)=>{
      console.log(response.message)
    })
  }
  get isLoading(){
    return this.loading;
  }
  constructor(private http:HttpClient) {}
}
