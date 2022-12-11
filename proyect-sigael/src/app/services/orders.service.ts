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
  get isLoading(){
    return this.loading;
  }
  constructor(private http:HttpClient) {}
}
